#!/bin/bash

# Script de instalare automată pentru Școala Complementară
# Rulați cu: sudo bash install.sh

set -e  # Ieșire la prima eroare

# Culori pentru output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Funcție pentru logging
log() {
    echo -e "${GREEN}[$(date '+%Y-%m-%d %H:%M:%S')] $1${NC}"
}

warning() {
    echo -e "${YELLOW}[WARNING] $1${NC}"
}

error() {
    echo -e "${RED}[ERROR] $1${NC}"
}

info() {
    echo -e "${BLUE}[INFO] $1${NC}"
}

# Verifică dacă rulează ca root
if [[ $EUID -ne 0 ]]; then
   error "Acest script trebuie rulat cu sudo"
   exit 1
fi

log "Începe instalarea Școala Complementară"

# Actualizare sistem
log "Actualizare sistem..."
apt update && apt upgrade -y

# Instalare Node.js
log "Instalare Node.js..."
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt-get install -y nodejs

# Verifică versiunea Node.js
NODE_VERSION=$(node --version)
log "Node.js instalat: $NODE_VERSION"

# Instalare PostgreSQL
log "Instalare PostgreSQL..."
apt install postgresql postgresql-contrib -y

# Pornire PostgreSQL
systemctl start postgresql
systemctl enable postgresql

# Instalare Nginx
log "Instalare Nginx..."
apt install nginx -y

# Instalare PM2
log "Instalare PM2..."
npm install -g pm2

# Instalare Certbot pentru SSL
log "Instalare Certbot..."
apt install certbot python3-certbot-nginx -y

# Creare user pentru aplicație
log "Creare user pentru aplicație..."
if ! id "scoala" &>/dev/null; then
    useradd -m -s /bin/bash scoala
    log "User 'scoala' creat"
else
    log "User 'scoala' există deja"
fi

# Creare directoare necesare
log "Creare directoare..."
mkdir -p /var/log/scoala-complementara
mkdir -p /opt/scoala-complementara
chown -R scoala:scoala /opt/scoala-complementara
chown -R scoala:scoala /var/log/scoala-complementara

# Configurare PostgreSQL
log "Configurare PostgreSQL..."
sudo -u postgres psql -c "SELECT 1" &>/dev/null || {
    error "PostgreSQL nu funcționează corect"
    exit 1
}

# Creare bază de date și user
info "Crearea bazei de date..."
echo "Introduceți parola pentru user-ul bazei de date 'scoala_complementara':"
read -s DB_PASSWORD

sudo -u postgres psql << EOF
CREATE USER scoala_complementara WITH PASSWORD '$DB_PASSWORD';
CREATE DATABASE scoala_complementara_db OWNER scoala_complementara;
GRANT ALL PRIVILEGES ON DATABASE scoala_complementara_db TO scoala_complementara;
\q
EOF

log "Baza de date configurată"

# Salvare configurație
echo "DATABASE_URL=postgresql://scoala_complementara:$DB_PASSWORD@localhost:5432/scoala_complementara_db" > /opt/scoala-complementara/.env.tmp

# Configurare Nginx
log "Configurare Nginx..."
systemctl start nginx
systemctl enable nginx

# Configurare firewall
log "Configurare firewall..."
ufw allow 22/tcp
ufw allow 80/tcp
ufw allow 443/tcp
ufw --force enable

# Configurare logrotate
log "Configurare logrotate..."
cat > /etc/logrotate.d/scoala-complementara << 'EOF'
/var/log/scoala-complementara/*.log {
    daily
    missingok
    rotate 52
    compress
    delaycompress
    notifempty
    create 644 scoala scoala
}
EOF

# Configurare cron pentru backup
log "Configurare backup automat..."
cat > /etc/cron.d/scoala-backup << 'EOF'
# Backup zilnic la 3:00 AM
0 3 * * * scoala cd /opt/scoala-complementara && ./backup.sh
EOF

log "Instalarea de bază completă!"

info "Pași următori:"
echo "1. Copiați fișierele aplicației în /opt/scoala-complementara/"
echo "2. Completați configurația în /opt/scoala-complementara/.env"
echo "3. Rulați: cd /opt/scoala-complementara && npm install"
echo "4. Rulați: npm run build"
echo "5. Configurați Nginx pentru domeniul dvs."
echo "6. Porniți aplicația: pm2 start ecosystem.config.js"

warning "Nu uitați să:"
echo "- Configurați domeniul în Nginx"
echo "- Obțineți certificat SSL cu certbot"
echo "- Testați backup-ul: ./backup.sh"
echo "- Configurați monitoring-ul"

log "Instalarea s-a terminat cu succes!"