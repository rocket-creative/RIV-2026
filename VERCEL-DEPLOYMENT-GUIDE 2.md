# Vercel Deployment Guide
## Riviera Waterfront Mansion

**Status:** ✅ Code pushed to GitHub  
**Repository:** `git@github.com:rocket-creative/riviera.git`  
**Branch:** `RIVIERA-FINAL_DEV`  
**Vercel URL:** https://riviera-mansion-preview.vercel.app/

---

## ✅ What Just Happened

1. **Git Push Completed** - All 5 commits pushed to GitHub successfully
2. **Vercel Config Added** - `vercel.json` configured for static site deployment
3. **Security Headers Set** - All headers configured for Vercel platform
4. **Ready for Deployment** - Vercel should auto-deploy on next push to connected branch

---

## 🔗 Vercel Project Setup

### If Vercel is Already Connected

Your site should automatically deploy when you push to the connected branch. Check:

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Find "riviera-mansion-preview" project
3. Click on it to see deployment status
4. Look for latest deployment from `RIVIERA-FINAL_DEV` branch

**If it deployed:** ✅ You're done! Visit https://riviera-mansion-preview.vercel.app/

**If it didn't deploy:** Follow "Connect Vercel Project" below

---

### Connect Vercel Project (First Time Setup)

**Step 1: Go to Vercel Dashboard**
1. Visit https://vercel.com/dashboard
2. Click "Add New..." → "Project"

**Step 2: Import Git Repository**
1. Select "Import Git Repository"
2. Choose GitHub (if not connected, connect your GitHub account)
3. Search for `rocket-creative/riviera`
4. Click "Import"

**Step 3: Configure Project**
```
Project Name: riviera-mansion-preview (or your choice)
Framework Preset: Other
Root Directory: ./
Build Command: (leave empty - it's static HTML)
Output Directory: (leave empty)
Install Command: (leave empty)
```

**Step 4: Environment Variables**
- No environment variables needed for static site
- Skip this section

**Step 5: Deploy**
- Click "Deploy"
- Wait 2-3 minutes for first deployment
- Your site will be live at `your-project-name.vercel.app`

---

## 🔧 Vercel Configuration Explained

Your `vercel.json` file includes:

### Security Headers
```json
✅ X-Frame-Options: SAMEORIGIN (prevent clickjacking)
✅ X-Content-Type-Options: nosniff (prevent MIME sniffing)
✅ X-XSS-Protection: 1; mode=block (XSS protection)
✅ Referrer-Policy: strict-origin-when-cross-origin
✅ Permissions-Policy: camera=(), microphone=()
```

### Performance Optimization
```json
✅ JavaScript files: 1 year cache (immutable)
✅ Images: 1 year cache (immutable)
✅ Clean URLs (no trailing slashes)
✅ index.html redirect to /
```

### Static File Handling
```json
✅ All HTML files served as static
✅ All JavaScript files served as static
✅ IMAGES/ directory served as static
```

---

## 🚀 Deployment Workflow

### Automatic Deployments

Every time you push to the connected branch, Vercel automatically:

1. Detects the push
2. Pulls latest code
3. Builds the project (instant for static HTML)
4. Deploys to production
5. Updates your preview URL

**Push → Deploy → Live** (usually takes 30-60 seconds)

### Manual Deployment

If auto-deploy isn't working:

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy from project root
vercel --prod
```

---

## 📊 Check Deployment Status

### Via Vercel Dashboard
1. Go to https://vercel.com/dashboard
2. Click on your project
3. See all deployments with status

### Via Vercel CLI
```bash
# Check project status
vercel list

# See deployment logs
vercel logs [deployment-url]
```

---

## 🌐 Custom Domain Setup

### Add Your Domain to Vercel

**Step 1: Go to Project Settings**
1. Open your project in Vercel dashboard
2. Click "Settings" → "Domains"

**Step 2: Add Domain**
1. Enter your domain: `www.rivierawaterfrontmansion.com`
2. Click "Add"

**Step 3: Update DNS**
Vercel will show you DNS records to add:

**For www.rivierawaterfrontmansion.com:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**For rivierawaterfrontmansion.com (root):**
```
Type: A
Name: @
Value: 76.76.21.21
```

**Step 4: Wait for Propagation**
- DNS changes take 5 minutes to 48 hours
- Vercel will auto-provision SSL certificate
- HTTPS will be enabled automatically

---

## 🔒 SSL/HTTPS

Vercel automatically provides:
- ✅ Free SSL certificate
- ✅ Auto-renewal
- ✅ Force HTTPS redirects
- ✅ HTTP/2 support

No configuration needed!

---

## 📝 Environment-Specific Settings

### Production vs Preview

**Production Deployments:**
- Triggered by pushes to `RIVIERA-FINAL_MAIN` (if configured)
- Live at your custom domain
- Stable, permanent URL

**Preview Deployments:**
- Triggered by pushes to `RIVIERA-FINAL_DEV` or other branches
- Live at `your-project-name-git-branch.vercel.app`
- Great for testing before production

### Configure Production Branch

1. Go to Project Settings → Git
2. Set "Production Branch" to `RIVIERA-FINAL_MAIN`
3. Now pushes to MAIN → production, pushes to DEV → preview

---

## 🐛 Troubleshooting

### Deployment Failed

**Check build logs:**
1. Go to Vercel dashboard
2. Click on failed deployment
3. View "Build Logs" tab
4. Look for error messages

**Common issues:**
- Missing files → check `.vercelignore`
- Wrong directory → check "Root Directory" setting
- Large files → Vercel has 100MB limit per file

### Site Not Updating

**Clear cache:**
1. Push a change to trigger new deployment
2. Hard refresh browser (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
3. Check deployment logs to confirm new deploy

**Force redeploy:**
1. Go to Vercel dashboard
2. Click on latest deployment
3. Click "..." → "Redeploy"

### Images Not Loading

**Check paths:**
- Images should be in `IMAGES/` directory
- Paths in HTML should be relative: `IMAGES/photo.jpg`
- Check case sensitivity (Vercel is case-sensitive)

**Check file size:**
- Vercel limit: 100MB per file
- Consider optimizing large images

---

## 📈 Performance Monitoring

### Vercel Analytics (Free)

Enable analytics to track:
- Page views
- Load times
- Web Vitals (LCP, FID, CLS)
- Top pages

**Enable:**
1. Project Settings → Analytics
2. Toggle "Enable Analytics"
3. View data in "Analytics" tab

### Speed Insights

Check performance:
- Visit https://pagespeed.web.dev
- Enter your Vercel URL
- Review Core Web Vitals
- Follow optimization suggestions

---

## 🔄 Rollback Deployments

Made a mistake? Instantly rollback:

1. Go to Vercel dashboard → Deployments
2. Find the last good deployment
3. Click "..." → "Promote to Production"
4. Old version is live again (instant)

---

## 📚 Additional Resources

- **Vercel Docs:** https://vercel.com/docs
- **Static Site Deployment:** https://vercel.com/docs/concepts/deployments/overview
- **Custom Domains:** https://vercel.com/docs/concepts/projects/domains
- **Environment Variables:** https://vercel.com/docs/concepts/projects/environment-variables

---

## ✅ Deployment Checklist

Before going live on custom domain:

- [ ] Vercel project connected to GitHub repo
- [ ] `vercel.json` configured with security headers
- [ ] Test deployment at preview URL works
- [ ] All images loading correctly
- [ ] Forms submitting (Formspree ID configured)
- [ ] Cookie consent banner working
- [ ] Security headers verified at securityheaders.com
- [ ] Custom domain added to Vercel
- [ ] DNS records updated
- [ ] SSL certificate provisioned (automatic)
- [ ] HTTPS redirect enabled (automatic)
- [ ] Analytics enabled (optional)

---

## 🎯 Next Steps

1. **Verify Deployment**
   - Visit https://riviera-mansion-preview.vercel.app/
   - Check if all pages load
   - Test all links and forms

2. **Configure Formspree**
   - Replace `YOUR_FORMSPREE_ID` in `unified-contact-form.js`
   - Push the change to trigger redeploy

3. **Add Custom Domain**
   - Follow "Custom Domain Setup" above
   - Update DNS records with your registrar

4. **Enable Analytics**
   - Turn on Vercel Analytics
   - Monitor performance and traffic

5. **Set Production Branch**
   - Configure `RIVIERA-FINAL_MAIN` as production branch
   - Keep `RIVIERA-FINAL_DEV` for preview deployments

---

**Current Status:** ✅ Code pushed, ready for deployment!

**Last Updated:** 2026-02-04  
**Next Deployment:** Automatic on push to connected branch
