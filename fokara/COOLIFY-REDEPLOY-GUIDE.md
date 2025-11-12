# Coolify Redeploy Guide - مكتبة الفقراء أكادير

## 🚀 Quick Redeploy Steps

### Step 1: Manual Redeploy (Immediate)

1. **Log into Coolify Dashboard**
   - Go to your Coolify instance
   - Navigate to your application

2. **Trigger Redeploy**
   - Click on your application/service
   - Look for **"Redeploy"** or **"Rebuild"** button
   - Click it to trigger a new build

3. **Or Use Force Redeploy**
   - Go to **Settings** → **Deployments**
   - Click **"Force Redeploy"** or **"Redeploy Now"**

### Step 2: Verify Configuration

Ensure these settings are correct in Coolify:

#### Application Settings:
- **Repository**: `https://github.com/ouarhim/fokara.git`
- **Branch**: `main`
- **Build Method**: `Dockerfile` or `Dockerfile.coolify`
- **Port**: `3000`
- **Environment Variables**:
  - `NODE_ENV=production`

#### Dockerfile Selection:
- **Option A**: Use `Dockerfile` (multi-stage, recommended)
- **Option B**: Use `Dockerfile.coolify` (simpler, fixed)
- **Option C**: Use `Dockerfile.nginx` (best for production)

---

## 🔄 Automatic Deployment Setup

### Method 1: GitHub Webhook (Recommended)

1. **In Coolify Dashboard:**
   - Go to your application
   - Navigate to **Settings** → **Source**
   - Enable **"Auto Deploy"** or **"Watch for changes"**
   - Copy the webhook URL

2. **In GitHub Repository:**
   - Go to: `https://github.com/ouarhim/fokara/settings/hooks`
   - Click **"Add webhook"**
   - Paste the webhook URL from Coolify
   - Content type: `application/json`
   - Events: Select **"Just the push event"**
   - Click **"Add webhook"**

3. **Test Auto-Deploy:**
   ```bash
   # Make a small change
   echo "# Test" >> README.md
   git add README.md
   git commit -m "Test auto-deploy"
   git push origin main
   ```
   - Coolify should automatically detect and deploy

### Method 2: Coolify Watch Mode

1. **Enable Watch Mode:**
   - In Coolify app settings
   - Enable **"Watch for changes"**
   - Set branch to `main`
   - Save settings

2. **How it works:**
   - Coolify polls GitHub every few minutes
   - Detects new commits on `main` branch
   - Automatically triggers rebuild

---

## 📋 Pre-Deployment Checklist

Before redeploying, verify:

- [ ] All code is pushed to GitHub: `git push origin main`
- [ ] Build works locally: `npm run build`
- [ ] Dockerfile is correct (use `Dockerfile.coolify` or `Dockerfile`)
- [ ] Port is set to `3000` in Coolify
- [ ] Branch is set to `main` in Coolify
- [ ] Environment variables are set (if any)

---

## 🔧 Troubleshooting Deployment

### Issue: Build Fails

**Check:**
1. Build logs in Coolify
2. Verify `npm run build` works locally
3. Check Dockerfile syntax

**Fix:**
```bash
# Test build locally
npm run build

# Test Docker build locally
docker build -f Dockerfile.coolify -t fokara-test .
docker run -p 3000:3000 fokara-test
```

### Issue: Website Not Loading

**Check:**
1. Server logs in Coolify
2. Verify port 3000 is exposed
3. Check if `serve -s` command is correct

**Fix:**
- Ensure Dockerfile has: `CMD ["serve", "-s", "dist", "-l", "3000"]`
- The `-s` flag enables SPA routing

### Issue: Routes Not Working (404 on /agadir)

**Fix:**
- Ensure `serve -s` flag is present (SPA mode)
- Or switch to `Dockerfile.nginx` for better routing

---

## 🎯 Recommended Deployment Configuration

### For Coolify:

**Dockerfile**: `Dockerfile.coolify` (or `Dockerfile`)  
**Port**: `3000`  
**Branch**: `main`  
**Auto Deploy**: Enabled (via webhook)  
**Health Check**: Enabled  

### Environment Variables:
```
NODE_ENV=production
```

---

## 📊 Deployment Status Check

After deployment, verify:

1. **Build Status**: ✅ Success
2. **Container Status**: ✅ Running
3. **Health Check**: ✅ Passing
4. **Website**: ✅ Accessible
5. **Routes**: ✅ `/` and `/agadir` work
6. **Assets**: ✅ CSS/JS load correctly

---

## 🚨 Common Issues & Quick Fixes

### Issue: "Repository not found"
- **Fix**: Verify repository URL: `https://github.com/ouarhim/fokara.git`
- **Fix**: Check GitHub token/permissions in Coolify

### Issue: "Build failed"
- **Fix**: Check `Dockerfile.coolify` uses `npm ci` (not `--only=production`)
- **Fix**: Verify all dependencies are in `package.json`

### Issue: "Port already in use"
- **Fix**: Change port in Coolify settings or Dockerfile
- **Fix**: Stop other services using port 3000

### Issue: "Container exits immediately"
- **Fix**: Check CMD in Dockerfile: `CMD ["serve", "-s", "dist", "-l", "3000"]`
- **Fix**: Verify `dist` folder exists after build

---

## 🔄 Redeploy Commands (If Using CLI)

If you have Coolify CLI access:

```bash
# Redeploy specific application
coolify redeploy <app-name>

# Or via API
curl -X POST https://your-coolify-instance.com/api/applications/<app-id>/redeploy
```

---

## ✅ Success Indicators

After successful deployment:

- ✅ Build completes without errors
- ✅ Container starts and stays running
- ✅ Health check passes
- ✅ Website loads at your domain
- ✅ All routes work (`/`, `/agadir`)
- ✅ Language switching works
- ✅ WhatsApp button works
- ✅ Images load correctly

---

## 📝 Next Steps After Deployment

1. **Test Website:**
   - Visit homepage
   - Test `/agadir` route
   - Test language switching
   - Test WhatsApp button
   - Check mobile responsiveness

2. **Monitor:**
   - Check Coolify logs for errors
   - Monitor resource usage
   - Check response times

3. **Optimize:**
   - Enable CDN (if available)
   - Set up monitoring
   - Configure backups

---

## 🆘 Need Help?

If deployment still fails:

1. Check `SERVER-TROUBLESHOOTING.md` for detailed solutions
2. Review Coolify build logs
3. Test Docker build locally
4. Verify GitHub repository access
5. Check Coolify documentation

---

**Last Updated**: January 2025  
**Status**: Ready for deployment
