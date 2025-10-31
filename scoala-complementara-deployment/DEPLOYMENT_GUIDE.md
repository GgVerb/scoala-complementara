# Ghid de Deployment pentru Școala Complementară

## Prezentarea Generală

Acest ghid vă va ajuta să exportați și să deployați site-ul "Școala Complementară" pe un server privat. Site-ul este o aplicație full-stack cu React frontend și Express backend.

## Cerințe de Sistem

### Server Requirements
- **Node.js**: versiunea 18 sau mai nouă
- **NPM**: versiunea 8 sau mai nouă
- **PostgreSQL**: versiunea 12 sau mai nouă
- **RAM**: minim 1GB
- **Disk Space**: minim 2GB

### Servicii Opționale
- **SendGrid**: pentru trimiterea emailurilor (opțional)
- **Google Analytics**: pentru tracking (opțional)

## Pași de Deployment

### 1. Pregătirea Server-ului

```bash
# Actualizați sistemul
sudo apt update && sudo apt upgrade -y

# Instalați Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Instalați PostgreSQL
sudo apt install postgresql postgresql-contrib -y

# Creați un user PostgreSQL
sudo -u postgres createuser --interactive --pwprompt scoala_complementara

# Creați baza de date
sudo -u postgres createdb scoala_complementara_db -O scoala_complementara
```

### 2. Descărcarea Proiectului

```bash
# Clonați proiectul (sau copiați fișierele)
git clone [URL_REPO] scoala-complementara
cd scoala-complementara

# Sau copiați toate fișierele din proiect în directorul server-ului
```

### 3. Configurarea Mediului

Creați fișierul `.env` în directorul principal:

```env
# Database Configuration
DATABASE_URL=postgresql://scoala_complementara:parola@localhost:5432/scoala_complementara_db

# Environment
NODE_ENV=production

# Optional: SendGrid for emails
SENDGRID_API_KEY=your_sendgrid_api_key_here

# Optional: Google Analytics
VITE_GA_MEASUREMENT_ID=your_ga_measurement_id_here

# Port Configuration
PORT=3000
```

### 4. Instalarea Dependențelor

```bash
# Instalați dependențele
npm install

# Instalați dependențele specifice pentru producție
npm install --production
```

### 5. Construirea Aplicației

```bash
# Construiți frontend-ul
npm run build

# Verificați că s-a creat directorul dist/
ls -la dist/
```

### 6. Configurarea Bazei de Date

```bash
# Rulați migrațiile pentru a crea tabelele
npm run db:push

# Opțional: populați cu date inițiale
npm run db:seed
```

### 7. Configurarea Procesului de Producție

Creați fișierul `ecosystem.config.js` pentru PM2:

```javascript
module.exports = {
  apps: [{
    name: 'scoala-complementara',
    script: 'dist/index.js',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_file: './logs/combined.log',
    time: true
  }]
};
```

Instalați și configurați PM2:

```bash
# Instalați PM2 global
sudo npm install -g pm2

# Creați directorul pentru log-uri
mkdir logs

# Porniți aplicația
pm2 start ecosystem.config.js

# Configurați PM2 să pornească automat
pm2 startup
pm2 save
```

### 8. Configurarea Nginx (Reverse Proxy)

Creați fișierul `/etc/nginx/sites-available/scoala-complementara`:

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Optimizare pentru fișiere statice
    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

Activați configurația:

```bash
# Activați site-ul
sudo ln -s /etc/nginx/sites-available/scoala-complementara /etc/nginx/sites-enabled/

# Testați configurația
sudo nginx -t

# Reporniți Nginx
sudo systemctl restart nginx
```

### 9. Configurarea SSL (opțional dar recomandat)

```bash
# Instalați Certbot
sudo apt install certbot python3-certbot-nginx -y

# Obțineți certificatul SSL
sudo certbot --nginx -d your-domain.com -d www.your-domain.com

# Configurați renewal automat
sudo crontab -e
# Adăugați linia:
0 12 * * * /usr/bin/certbot renew --quiet
```

### 10. Backup și Monitoring

Creați script pentru backup:

```bash
#!/bin/bash
# backup.sh
DATE=$(date +%Y%m%d_%H%M%S)
pg_dump -h localhost -U scoala_complementara -d scoala_complementara_db > backup_$DATE.sql
find . -name "backup_*.sql" -mtime +7 -delete
```

Configurați monitoring:

```bash
# Monitorizați aplicația
pm2 monit

# Verificați log-urile
pm2 logs scoala-complementara
```

## Structura Fișierelor pe Server

```
/home/user/scoala-complementara/
├── dist/                 # Aplicația compilată
├── logs/                 # Log-uri PM2
├── attached_assets/      # Fișiere media
├── .env                  # Configurația mediului
├── ecosystem.config.js   # Configurația PM2
├── package.json          # Dependențele
└── backup.sh            # Script de backup
```

## Comenzi Utile pentru Administrare

```bash
# Verificați statusul aplicației
pm2 status

# Reporniți aplicația
pm2 restart scoala-complementara

# Vedeți log-urile
pm2 logs scoala-complementara

# Verificați utilizarea resurselor
pm2 monit

# Backup manual
./backup.sh

# Actualizarea aplicației
git pull origin main
npm install
npm run build
pm2 restart scoala-complementara
```

## Troubleshooting

### Problema: Aplicația nu pornește

```bash
# Verificați log-urile
pm2 logs scoala-complementara

# Verificați conexiunea la baza de date
psql -h localhost -U scoala_complementara -d scoala_complementara_db
```

### Problema: Erori de permisiuni

```bash
# Verificați permisiunile
ls -la dist/
sudo chown -R $USER:$USER /path/to/scoala-complementara/
```

### Problema: Aplicația e lentă

```bash
# Verificați resursele
top
htop
pm2 monit
```

## Actualizări Future

Pentru a actualiza aplicația:

1. Opriți aplicația: `pm2 stop scoala-complementara`
2. Faceți backup: `./backup.sh`
3. Actualizați codul: `git pull origin main`
4. Instalați dependențele: `npm install`
5. Construiți aplicația: `npm run build`
6. Reporniți: `pm2 start scoala-complementara`

## Suport

Pentru probleme tehnice, verificați:
- Log-urile aplicației: `pm2 logs scoala-complementara`
- Log-urile Nginx: `sudo tail -f /var/log/nginx/error.log`
- Statusul bazei de date: `sudo systemctl status postgresql`

---

**Notă**: Înlocuiți `your-domain.com` cu domeniul dvs. real și `parola` cu o parolă sigură pentru baza de date.