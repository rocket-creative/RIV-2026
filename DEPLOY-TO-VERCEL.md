# Deploy to Vercel - Quick Guide
## Riviera Waterfront Mansion

**Status:** ✅ All code ready for deployment  
**Branch:** RIVIERA-FINAL_MAIN (production)  
**GitHub Repo:** `git@github.com:rocket-creative/riviera.git`

---

## Option 1: Deploy via Vercel Dashboard (Easiest - 5 minutes)

### Step 1: Go to Vercel
1. Visit https://vercel.com/new
2. Log in with your account

### Step 2: Import Git Repository
1. Click **"Import Git Repository"** or **"Add New Project"**
2. If not connected, click **"Connect Git Provider"** → **GitHub**
3. Authorize Vercel to access your GitHub repos
4. Find `rocket-creative/riviera` in the list
5. Click **"Import"**

### Step 3: Configure Project
```
Project Name: riv-2026 (or any name you want)
Framework Preset: Other
Root Directory: ./
Build Command: (leave empty)
Output Directory: (leave empty)
Install Command: (leave empty)
```

### Step 4: Environment Variables
- Skip this (no env vars needed for static site)

### Step 5: Deploy Settings
- Branch: Select **RIVIERA-FINAL_MAIN** as production branch
- Click **"Deploy"**

### Step 6: Wait (2-3 minutes)
- Vercel will upload 1.2GB of images
- Build the static site
- Deploy to production

### Step 7: Get Your URL
- Your site will be live at: `riv-2026.vercel.app` (or whatever project name you chose)
- Vercel will show you the production URL

---

## Option 2: Deploy via CLI (If you want to try again)

The CLI was having issues with the project name. Here's the correct process:

### Step 1: Install Vercel CLI Globally
```bash
sudo npm install -g vercel
# Enter your password when prompted
```

### Step 2: Login
```bash
vercel login
# This will open your browser to authenticate
```

### Step 3: Link Project
```bash
cd "/Users/rocketcreative/Desktop/CURSER BUILDS/RIVIERA-FINAL"
vercel link
```

Answer the prompts:
```
? Set up and deploy "~/Desktop/CURSER BUILDS/RIVIERA-FINAL"? Y
? Which scope? [Select your account/team]
? Link to existing project? N
? What's your project's name? riv2026
? In which directory is your code located? ./
```

### Step 4: Deploy to Production
```bash
vercel --prod
```

This will:
- Upload all files (1.2GB)
- Build and deploy
- Give you the production URL

---

## Option 3: GitHub Actions Auto-Deploy (Advanced)

If you want automatic deployments on every push to MAIN:

1. **Vercel Integration** is already set up if you connect via dashboard
2. Every push to `RIVIERA-FINAL_MAIN` will auto-deploy
3. Every push to `RIVIERA-FINAL_DEV` will create preview deployments

No extra setup needed!

---

## What's Included in This Deployment

✅ **All HTML pages** - index, gallery, real-weddings, etc.  
✅ **All JavaScript** - forms, consent manager, wedding data  
✅ **Security headers** - via vercel.json  
✅ **1405 wedding photos** - Full IMAGES directory  
✅ **Copyright protection** - UXUI Design Corp ownership  
✅ **Clean URLs** - No .html extensions  
✅ **HTTPS** - Automatic SSL certificate  

---

## After Deployment

### 1. Custom Domain (Optional)
1. Go to Project Settings → Domains
2. Add your domain: `www.rivierawaterfrontmansion.com`
3. Follow DNS instructions
4. SSL auto-provisions

### 2. Configure Formspree
1. Open `unified-contact-form.js`
2. Replace `YOUR_FORMSPREE_ID` with real ID
3. Push to GitHub (auto-deploys)

### 3. Test Everything
- ✅ All pages load
- ✅ Forms submit
- ✅ Images load
- ✅ Gallery works
- ✅ Real weddings page works

### 4. Check Security Headers
- Visit https://securityheaders.com
- Enter your Vercel URL
- Should see Grade A or B

---

## Troubleshooting

### Images Not Loading
- Check browser console for errors
- Verify paths are case-sensitive (`IMAGES/` not `images/`)
- Clear browser cache (Cmd+Shift+R)

### Forms Not Working
- Replace `YOUR_FORMSPREE_ID` in unified-contact-form.js
- Check browser console for errors
- Test with a real email

### Deployment Failed
- Check build logs in Vercel dashboard
- Look for file size limits (100MB per file max)
- Verify vercel.json syntax

---

## Current Status

**Local:** ✅ All code ready  
**GitHub:** ✅ MAIN branch updated (commit 623539f)  
**Vercel:** ⏳ Waiting for deployment  

**Next:** Go to https://vercel.com/new and import the repo!

---

**Last Updated:** 2026-02-04  
**Ready to Deploy:** YES ✅
