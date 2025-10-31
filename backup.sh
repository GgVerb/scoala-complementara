#!/bin/bash

# Backup Script pentru Școala Complementară
# Creat: $(date +%Y-%m-%d)

# Configurări
DB_NAME="scoala_complementara_db"
DB_USER="scoala_complementara"
BACKUP_DIR="./backups"
DATE=$(date +%Y%m%d_%H%M%S)
LOG_FILE="./logs/backup.log"

# Funcție pentru logging
log() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" >> "$LOG_FILE"
    echo "$1"
}

# Creează directoarele necesare
mkdir -p "$BACKUP_DIR"
mkdir -p "./logs"

log "Începe backup-ul pentru $DB_NAME"

# Backup baza de date
BACKUP_FILE="$BACKUP_DIR/db_backup_$DATE.sql"
if pg_dump -h localhost -U "$DB_USER" -d "$DB_NAME" > "$BACKUP_FILE"; then
    log "Backup baza de date reușit: $BACKUP_FILE"
    
    # Comprimă backup-ul
    if gzip "$BACKUP_FILE"; then
        log "Backup comprimat: $BACKUP_FILE.gz"
    fi
else
    log "EROARE: Backup baza de date a eșuat"
    exit 1
fi

# Backup fișiere media (attached_assets)
if [ -d "attached_assets" ]; then
    MEDIA_BACKUP="$BACKUP_DIR/media_backup_$DATE.tar.gz"
    if tar -czf "$MEDIA_BACKUP" attached_assets/; then
        log "Backup media reușit: $MEDIA_BACKUP"
    else
        log "EROARE: Backup media a eșuat"
    fi
fi

# Backup configurații
CONFIG_BACKUP="$BACKUP_DIR/config_backup_$DATE.tar.gz"
if tar -czf "$CONFIG_BACKUP" .env ecosystem.config.js package.json; then
    log "Backup configurații reușit: $CONFIG_BACKUP"
else
    log "EROARE: Backup configurații a eșuat"
fi

# Curăță backup-urile vechi (păstrează ultimele 7 zile)
find "$BACKUP_DIR" -name "*.sql.gz" -mtime +7 -delete
find "$BACKUP_DIR" -name "*.tar.gz" -mtime +7 -delete

log "Backup complet terminat"

# Afișează dimensiunea backup-urilor
log "Dimensiunea backup-urilor:"
du -sh "$BACKUP_DIR"/*backup_$DATE* 2>/dev/null || log "Nu s-au găsit backup-uri pentru această sesiune"

exit 0