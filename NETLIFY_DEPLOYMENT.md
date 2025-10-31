# Deploy to Netlify - Step by Step Guide

## Option 1: Direct Upload (Quickest)

1. **Build your site locally:**
   ```bash
   npm run build
   ```

2. **Go to Netlify:**
   - Visit https://netlify.com
   - Click "Sign up" (free account)

3. **Deploy manually:**
   - Click "Deploy manually" 
   - Drag and drop the `dist/public` folder
   - Your site will be live instantly at `[random-name].netlify.app`

4. **Custom domain (optional):**
   - Go to Site settings → Domain management
   - Change site name to `scoalacomplementara`
   - URL becomes: `scoalacomplementara.netlify.app`

## Option 2: GitHub Integration (Best for updates)

1. **Push to GitHub:**
   - Create repository on GitHub
   - Push your code:
   ```bash
   git init
   git add .
   git commit -m "Static site ready for deployment"
   git remote add origin https://github.com/yourusername/scoalacomplementara.git
   git push -u origin main
   ```

2. **Connect to Netlify:**
   - Sign up at https://netlify.com
   - Click "Import from Git"
   - Connect GitHub account
   - Select your repository

3. **Configure build:**
   - Build command: `npm run build`
   - Publish directory: `dist/public`
   - Click "Deploy site"

4. **Automatic updates:**
   - Every push to GitHub automatically updates your site
   - Perfect for content changes

## Features You Get FREE:

- **Custom domain**: `scoalacomplementara.netlify.app`
- **SSL certificate**: Automatic HTTPS
- **CDN**: Fast loading worldwide
- **Bandwidth**: 100GB/month (more than enough)
- **Build minutes**: 300/month (you need ~2 minutes)
- **Form handling**: Can process contact forms (optional upgrade)

## Cost: 100% FREE
Your 50 visitors/day will use less than 1% of the free limits.

## Google Analytics Setup:
Add this environment variable in Netlify:
- Key: `VITE_GA_MEASUREMENT_ID`
- Value: `your-ga-id` (if you have Google Analytics)

Your educational site will be live and professional in minutes!