# Cloudflare Pages Deployment Guide

## Why Cloudflare Pages?

- **FREE hosting** with unlimited bandwidth
- **Super fast** global CDN (300+ locations)
- **Free SSL** certificates
- **Custom domains** included
- Best if buying domain from Cloudflare anyway

## Step 1: Prepare Your Code

1. Create a GitHub repository (or GitLab/Bitbucket):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/scoala-complementara.git
   git push -u origin main
   ```

## Step 2: Deploy to Cloudflare Pages

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Sign up/Login (free account)
3. Click **Pages** in the left sidebar
4. Click **Create a project**
5. Click **Connect to Git**
6. Authorize Cloudflare to access your GitHub
7. Select your repository: `scoala-complementara`
8. Configure build settings:
   ```
   Production branch: main
   Build command: npm run build
   Build output directory: dist/public
   ```
9. Click **Save and Deploy**

Your site will be live at: `https://scoala-complementara.pages.dev`

## Step 3: Buy & Add Custom Domain via Cloudflare

### Option A: Buy Domain Through Cloudflare (Recommended)

1. In Cloudflare dashboard, go to **Domain Registration**
2. Search for your desired domain (e.g., `scoala-complementara.ro` or `scoala-complementara.com`)
3. Purchase domain:
   - **.COM**: $9.15/year (at-cost pricing)
   - **.RO**: Check price (usually ~$10-13/year)
4. Go to **Pages** → Your project → **Custom domains**
5. Click **Set up a custom domain**
6. Enter your domain (e.g., `scoala-complementara.ro`)
7. Cloudflare automatically configures DNS
8. Enable **Always Use HTTPS**

✅ Done! Your site is live on your custom domain with SSL.

### Option B: Use Existing Domain from Another Registrar

1. Go to **Websites** → **Add a site** → Enter your domain
2. Follow Cloudflare's nameserver setup instructions
3. Change nameservers at your registrar to:
   ```
   andy.ns.cloudflare.com
   lucy.ns.cloudflare.com
   ```
4. Wait for DNS propagation (up to 24 hours)
5. Go to **Pages** → Your project → **Custom domains**
6. Add your domain
7. Cloudflare handles SSL automatically

## Step 4: Configure Environment Variables (if needed)

1. In Pages project settings → **Environment variables**
2. Add any `VITE_` prefixed variables (e.g., `VITE_GA_MEASUREMENT_ID`)

## Step 5: Automatic Deployments

Every time you push to GitHub:
- Cloudflare automatically rebuilds and deploys
- Preview deployments for pull requests
- Production deployment for main branch

## Monitoring & Analytics

1. **Cloudflare Analytics**: Built-in for free
   - Page views
   - Bandwidth usage
   - Geographic distribution
2. **Web Analytics**: Privacy-first analytics (free)
   - Enable in Cloudflare dashboard → Analytics → Web Analytics

## Cost Summary

- **Hosting**: FREE (unlimited bandwidth)
- **Domain via Cloudflare**: 
  - .COM: $9.15/year
  - .RO: ~$10.47/year
- **SSL Certificate**: FREE (automatic)
- **CDN**: FREE (300+ locations worldwide)
- **Total**: ~$9-11/year (just the domain!)

## Cloudflare vs GitHub Pages

| Feature | Cloudflare Pages | GitHub Pages |
|---------|------------------|--------------|
| Hosting | FREE | FREE |
| Bandwidth | Unlimited | 100GB soft limit |
| CDN | 300+ locations | Yes, but smaller |
| Build speed | Very fast | Moderate |
| Analytics | Built-in | Need GA4 |
| Domain | Buy at cost price | Buy elsewhere |
| **Best for** | Speed, all-in-one | Simplicity |

## Recommended Setup

1. ✅ Buy domain from **Cloudflare** ($9.15/year for .COM)
2. ✅ Deploy to **Cloudflare Pages** (FREE)
3. ✅ Connect domain in Cloudflare (automatic DNS)
4. ✅ Enable automatic deployments from GitHub

**Total cost: ~$9-11/year** (just the domain!)

## Deployment Commands Summary

```bash
# Initial setup
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/scoala-complementara.git
git push -u origin main

# Future updates (automatic deployment)
git add .
git commit -m "Update content"
git push
```

## Support

- **Cloudflare Docs**: https://developers.cloudflare.com/pages/
- **Community**: https://community.cloudflare.com/
