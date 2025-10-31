# Server Requirements și Recomandări Hosting - Școala Complementară

## 📋 Specificații Tehnice Site

### Tipul Site-ului
- **Static React Application** (fără backend/database)
- **Build Output**: ~15-20MB (dist/public/)
- **Asset-uri**: ~80MB imagini și fișiere media
- **Total Space**: ~100MB maximum

### Tehnologii
- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui
- **Routing**: Client-side (Wouter)
- **Animații**: Framer Motion
- **Build**: Static files (HTML, CSS, JS, imagini)

---

## 🖥️ Cerințe Minime Server

### Pentru Hosting Static (RECOMANDAT)
```
• CPU: Orice (nu necesită procesare server)
• RAM: Minim 128MB (doar pentru serving files)
• Storage: 1GB SSD (mult peste necesar)
• Bandwidth: 10GB/lună (suficient pentru trafic mediu)
• Server Software: Nginx, Apache, sau orice web server
```

### Pentru Hosting cu Node.js (OPȚIONAL)
```
• CPU: 1 vCPU (0.5 cores sufficient)
• RAM: 512MB minimum, 1GB recomandat
• Storage: 5GB SSD
• Node.js: versiunea 18+ 
• PM2 pentru process management
• Nginx ca reverse proxy
```

---

## 💰 RECOMANDĂRI HOSTING IEFTIN

### 🥇 **TOP 1: Hostinger** ⭐⭐⭐⭐⭐
```
Plan: Premium Web Hosting
Preț: 2.99€/lună (36 luni în avans)
Features:
✅ 100GB SSD Storage
✅ Bandwidth nelimitat
✅ SSL gratuit
✅ Domeniu custom inclus (ai deja)
✅ Email hosting inclus
✅ CDN global Cloudflare
✅ 99.9% uptime garantat
✅ Support 24/7 în română

Link: https://www.hostinger.ro
Total anual: ~36€ (3€/lună)
```

### 🥈 **TOP 2: Contabo VPS** ⭐⭐⭐⭐
```
Plan: Cloud VPS S
Preț: 4.99€/lună
Features:
✅ 4 vCPU cores
✅ 8GB RAM
✅ 50GB NVMe SSD
✅ 32TB bandwidth
✅ Locația: Germania (latență bună pentru România)
✅ Full root access
✅ Instalare automată Ubuntu/Nginx

Link: https://contabo.com
Total anual: ~60€ (5€/lună)
Setup: Nginx + Node.js dacă vrei features avansate
```

### 🥉 **TOP 3: Netcup** ⭐⭐⭐⭐
```
Plan: Root Server VPS 200 G10
Preț: 2.99€/lună
Features:
✅ 1 vCPU
✅ 2GB RAM
✅ 40GB SSD
✅ 80TB bandwidth
✅ Locația: Germania
✅ Full root access
✅ IPv4 + IPv6

Link: https://www.netcup.eu
Total anual: ~36€ (3€/lună)
Perfect pentru site-uri statice cu trafic mic/mediu
```

---

## 🚀 Setup Rapid pe Server (Ubuntu/Debian)

### Pentru Site Static (Nginx)
```bash
# 1. Update sistem
sudo apt update && sudo apt upgrade -y

# 2. Instalează Nginx
sudo apt install nginx -y

# 3. Configurează domeniul
sudo nano /etc/nginx/sites-available/scoala-complementara

# Conținut fișier:
server {
    listen 80;
    server_name taudomeniu.ro www.taudomeniu.ro;
    root /var/www/scoala-complementara;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}

# 4. Activează site-ul
sudo ln -s /etc/nginx/sites-available/scoala-complementara /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx

# 5. SSL cu Let's Encrypt
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d taudomeniu.ro -d www.taudomeniu.ro

# 6. Upload fișierele site-ului
sudo mkdir -p /var/www/scoala-complementara
# Copiază conținutul din scoalaverb-netlify-ready.zip
sudo chown -R www-data:www-data /var/www/scoala-complementara
```

### Pentru Site cu Node.js (Opțional)
```bash
# 1. Instalează Node.js 18
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# 2. Instalează PM2
sudo npm install -g pm2

# 3. Upload proiectul și instalează dependințe
cd /var/www/scoala-complementara
npm install
npm run build

# 4. Configurează PM2
pm2 start npm --name "scoala-complementara" -- start
pm2 save
pm2 startup

# 5. Nginx ca reverse proxy
# În /etc/nginx/sites-available/scoala-complementara:
server {
    listen 80;
    server_name taudomeniu.ro;
    
    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## 📊 Comparație Costuri Anuale

| Provider | Plan | Preț/An | Storage | Bandwidth | Support |
|----------|------|---------|---------|-----------|---------|
| **Hostinger** | Premium | 36€ | 100GB | Nelimitat | ⭐⭐⭐⭐⭐ |
| **Contabo** | VPS S | 60€ | 50GB | 32TB | ⭐⭐⭐⭐ |
| **Netcup** | VPS 200 | 36€ | 40GB | 80TB | ⭐⭐⭐ |
| Netlify | Pro | 228€ | 100GB | 1TB | ⭐⭐⭐⭐ |
| DigitalOcean | Basic | 72€ | 25GB | 1TB | ⭐⭐⭐⭐ |

---

## 🎯 RECOMANDAREA MEA FINALĂ

### Pentru Începători: **HOSTINGER Premium**
- **Preț**: 36€/an (3€/lună)
- **Motivul**: 
  - Cel mai simplu de configurat
  - Support în română
  - Include totul (SSL, CDN, Email)
  - Performanțe excelente pentru România
  - Upload prin cPanel (drag & drop)

### Pentru Utilizatori Avansați: **Contabo VPS**
- **Preț**: 60€/an (5€/lună)
- **Motivul**:
  - Resurse generoase (4 CPU, 8GB RAM)
  - Flexibilitate maximă
  - Poți găzdui multiple site-uri
  - Performanțe superioare
  - Control total asupra serverului

---

## 📁 Fișierele de Upload

Folosește una din arhivele create:

1. **scoalaverb-netlify-ready.zip** (60MB) - Pentru hosting static simplu
2. **scoala-complementara-FIXED.zip** (95MB) - Pentru development/modificări
3. **scoala-replit-complete.zip** (95MB) - Pentru Node.js hosting

---

## 🔧 Monitorizare și Întreținere

### Backup Săptămânal
```bash
# Script backup automat
#!/bin/bash
tar -czf /backup/scoala-$(date +%Y%m%d).tar.gz /var/www/scoala-complementara
find /backup -name "scoala-*.tar.gz" -mtime +30 -delete
```

### Monitoring Performance
- **Google Analytics**: Deja configurat în site
- **Server monitoring**: htop, netstat pentru resurse
- **SSL renewal**: Certbot automat renewal

### Updates
- Site-ul este static - nu necesită updates regulate
- Updates sistem: `sudo apt update && sudo apt upgrade` lunar

---

## 💡 Concluzie

Pentru domeniul tău existent și site-ul Școala Complementară, **Hostinger Premium la 36€/an** este alegerea optimă:

✅ **Simplu de configurat** (10 minute setup)  
✅ **Performanțe excelente** în România  
✅ **Preț imbatabil** pentru features oferite  
✅ **Support în română** când ai nevoie de ajutor  
✅ **SSL și CDN incluse** pentru securitate și viteză  

**Site-ul va funcționa perfect cu traficul pe care îl aștepți!**