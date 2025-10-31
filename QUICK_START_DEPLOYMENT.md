# Quick Start Deployment Guide

## 🚀 Fastest Way to Deploy Your Site

Choose your preferred platform:

---

## Option 1: Cloudflare Pages (Recommended)

**Total cost: ~$9-11/year** (domain only, hosting FREE)

### Why Cloudflare?
- ✅ Buy domain and host in one place
- ✅ Unlimited bandwidth
- ✅ Fastest CDN (300+ locations)
- ✅ Automatic SSL
- ✅ Built-in analytics

### Steps:
1. **Create GitHub repository** (if not already):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/scoala-complementara.git
   git push -u origin main
   ```

2. **Deploy to Cloudflare Pages**:
   - Go to [dash.cloudflare.com](https://dash.cloudflare.com/)
   - Pages → Create project → Connect Git
   - Select repository
   - Build settings:
     - Build command: `npm run build`
     - Output directory: `dist/public`
   - Deploy!

3. **Buy domain** (in Cloudflare dashboard):
   - Domain Registration → Search domain
   - .COM: $9.15/year | .RO: ~$10.47/year
   - Pages → Custom domains → Add domain
   - Done! SSL automatic

**Site live at**: `https://your-domain.com`

📖 **Full guide**: See `CLOUDFLARE_PAGES_DEPLOYMENT.md`

---

## Option 2: GitHub Pages

**Total cost: ~$9-11/year** (domain only, hosting FREE)

### Why GitHub Pages?
- ✅ Simple and reliable
- ✅ Free forever
- ✅ Good for developers
- ✅ 100GB bandwidth/month

### Steps:
1. **Create GitHub repository**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/scoala-complementara.git
   git push -u origin main
   ```

2. **Install deployment tool**:
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Add deploy script** to `package.json`:
   ```json
   "scripts": {
     "deploy": "gh-pages -d dist/public"
   }
   ```

4. **Deploy**:
   ```bash
   npm run build
   npm run deploy
   ```

5. **Enable GitHub Pages**:
   - Repository → Settings → Pages
   - Source: `gh-pages` branch
   - Save

6. **Buy domain** (Cloudflare or Porkbun):
   - Cloudflare: $9.15/year
   - Porkbun: $11.06/year

7. **Connect domain**:
   - Add DNS records (see full guide)
   - GitHub Settings → Pages → Custom domain

**Site live at**: `https://your-domain.com`

📖 **Full guide**: See `GITHUB_PAGES_DEPLOYMENT.md`

---

## What You Get

Both options include:
- ✅ FREE hosting
- ✅ FREE SSL certificate
- ✅ Global CDN
- ✅ Custom domain support
- ✅ Automatic deployments

**Only cost**: Domain registration (~$9-11/year)

---

## My Recommendation

### Choose Cloudflare Pages if:
- You want everything in one dashboard
- You need unlimited bandwidth
- You want maximum speed

### Choose GitHub Pages if:
- You're already familiar with GitHub
- You prefer simpler setup
- 100GB bandwidth is enough

Both are excellent choices! Can't go wrong either way.

---

## Next Steps

1. ✅ Site is already built (files in `dist/public/`)
2. Choose platform (Cloudflare or GitHub)
3. Follow the respective deployment guide
4. Buy and connect your domain
5. Your site is LIVE! 🎉

---

## Need Help?

- **Cloudflare Pages**: See `CLOUDFLARE_PAGES_DEPLOYMENT.md`
- **GitHub Pages**: See `GITHUB_PAGES_DEPLOYMENT.md`
- **Domain Setup**: Included in both guides
