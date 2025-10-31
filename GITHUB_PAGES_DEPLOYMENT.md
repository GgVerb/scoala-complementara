# GitHub Pages Deployment Guide

## Step 1: Prepare Your Repository

1. Create a new repository on GitHub (e.g., `scoala-complementara`)
2. Initialize git in your project (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```
3. Add GitHub as remote:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/scoala-complementara.git
   git push -u origin main
   ```

## Step 2: Deploy to GitHub Pages

### Option A: Using GitHub Actions (Recommended - Automatic)

1. Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main ]
     workflow_dispatch:

   permissions:
     contents: read
     pages: write
     id-token: write

   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         
         - name: Setup Node
           uses: actions/setup-node@v4
           with:
             node-version: '20'
             
         - name: Install dependencies
           run: npm ci
           
         - name: Build
           run: npm run build
           
         - name: Upload artifact
           uses: actions/upload-pages-artifact@v3
           with:
             path: ./dist/public

     deploy:
       needs: build
       runs-on: ubuntu-latest
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       steps:
         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v4
   ```

2. Push this workflow to GitHub
3. Go to your repository Settings → Pages
4. Under "Build and deployment", select "GitHub Actions"
5. Your site will be live at `https://YOUR_USERNAME.github.io/scoala-complementara/`

### Option B: Manual Deployment (Simple)

1. Build your site:
   ```bash
   npm run build
   ```

2. Install `gh-pages` package:
   ```bash
   npm install --save-dev gh-pages
   ```

3. Add to `package.json` scripts:
   ```json
   "scripts": {
     "deploy": "gh-pages -d dist/public"
   }
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

5. Go to repository Settings → Pages → Source → Select `gh-pages` branch

## Step 3: Add Custom Domain

1. Buy your domain from **Cloudflare** ($9.15/year) or **Porkbun** ($11.06/year)

2. In your domain DNS settings, add these records:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   
   Type: A
   Name: @
   Value: 185.199.109.153
   
   Type: A
   Name: @
   Value: 185.199.110.153
   
   Type: A
   Name: @
   Value: 185.199.111.153
   
   Type: CNAME
   Name: www
   Value: YOUR_USERNAME.github.io
   ```

3. In GitHub repository Settings → Pages → Custom domain, enter your domain (e.g., `scoala-complementara.ro`)

4. Enable "Enforce HTTPS" (wait 24-48 hours for DNS propagation first)

## Step 4: Verify Deployment

1. Visit your site at `https://YOUR_USERNAME.github.io/scoala-complementara/`
2. Test all pages and links
3. Check portfolio link works correctly
4. Once custom domain is configured, visit `https://your-domain.com`

## Cost Summary

- **Hosting**: FREE forever
- **Domain**: $9.15-$10.47/year
- **SSL Certificate**: FREE (automatic via GitHub)
- **Bandwidth**: Unlimited (soft limit: 100GB/month)

## Notes

- GitHub Pages is 100% free for public repositories
- Automatic SSL certificates
- Global CDN included
- Perfect for static sites like yours
