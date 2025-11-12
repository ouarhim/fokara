# Server-Side Troubleshooting Guide

## Common Issues and Solutions

### Issue 1: Website Not Loading / Blank Page

#### Symptoms:
- Server is running but shows blank page
- 404 errors on routes like `/agadir`
- Console errors about missing files

#### Solutions:

**Solution A: Verify SPA Routing**
The `serve` command with `-s` flag should handle SPA routing. Verify your Dockerfile has:
```dockerfile
CMD ["serve", "-s", "dist", "-l", "3000"]
```

**Solution B: Check Build Output**
Ensure `dist` folder contains:
- `index.html`
- `assets/` folder with JS and CSS
- All public files

**Solution C: Use Nginx (Recommended)**
Switch to `Dockerfile.nginx` for better SPA routing support:
```bash
# In Coolify, change Dockerfile to: Dockerfile.nginx
```

### Issue 2: Routes Not Working (404 on /agadir)

#### Cause:
Server not configured for SPA routing - all routes should serve `index.html`

#### Solutions:

**For serve command:**
- Ensure `-s` flag is present: `serve -s dist -l 3000`
- This enables SPA mode

**For Nginx:**
- Use `Dockerfile.nginx` which includes proper nginx.conf
- Config includes: `try_files $uri $uri/ /index.html;`

**For other servers:**
- Add `_redirects` file (for Netlify)
- Add `vercel.json` (for Vercel)
- Configure server to serve `index.html` for all routes

### Issue 3: Assets Not Loading

#### Symptoms:
- CSS/JS files return 404
- Images not displaying
- Console shows failed resource loads

#### Solutions:

**Check build:**
```bash
npm run build
ls -la dist/assets/
```

**Verify paths:**
- Ensure `base` in `vite.config.ts` is correct (default: `/`)
- Check that assets are in `dist/assets/` folder

**Check server:**
- Verify server is serving from `dist` folder
- Check CORS headers if loading from different domain

### Issue 4: Docker Build Fails

#### Common Causes:

**1. Missing dev dependencies:**
```dockerfile
# Wrong:
RUN npm ci --only=production

# Correct:
RUN npm ci  # Install all dependencies for build
```

**2. Build errors:**
- Check build logs: `npm run build`
- Fix TypeScript/linting errors
- Ensure all imports are correct

**3. Port conflicts:**
- Ensure port 3000 is available
- Or change port in Dockerfile and Coolify config

### Issue 5: Coolify Deployment Issues

#### Configuration Checklist:

- [ ] Repository URL: `https://github.com/ouarhim/fokara.git`
- [ ] Branch: `main`
- [ ] Build Method: `Dockerfile` or `Dockerfile.coolify`
- [ ] Port: `3000`
- [ ] Environment: `NODE_ENV=production`

#### Debug Steps:

1. **Check build logs in Coolify:**
   - Look for build errors
   - Verify `npm run build` succeeds
   - Check if `dist` folder is created

2. **Check runtime logs:**
   - Verify server starts successfully
   - Check for runtime errors
   - Verify port is listening

3. **Test locally:**
   ```bash
   npm run build
   npx serve -s dist -l 3000
   # Visit http://localhost:3000
   ```

## Quick Fixes

### Fix 1: Update Dockerfile.coolify
```dockerfile
# Change this:
RUN npm ci --only=production

# To this:
RUN npm ci
```

### Fix 2: Add SPA Routing Support
Create `public/_redirects`:
```
/*    /index.html   200
```

### Fix 3: Use Nginx (Best for Production)
Switch to `Dockerfile.nginx` for better routing support.

### Fix 4: Verify Build
```bash
# Build locally
npm run build

# Check output
ls -la dist/

# Test locally
npx serve -s dist -l 3000
```

## Testing Checklist

After deployment:

- [ ] Homepage loads: `/`
- [ ] Agadir page loads: `/agadir`
- [ ] Language switching works
- [ ] WhatsApp button works
- [ ] Images load correctly
- [ ] CSS styles apply
- [ ] No console errors
- [ ] Mobile responsive

## Server Configuration Files

### For Netlify/Vercel:
- `public/_redirects` - SPA routing
- `public/vercel.json` - Vercel config

### For Nginx:
- `public/nginx.conf` - Nginx config
- Use `Dockerfile.nginx`

### For serve command:
- `Dockerfile` or `Dockerfile.coolify`
- Uses `serve -s` flag for SPA routing

## Contact

If issues persist:
1. Check Coolify logs
2. Verify Docker build succeeds locally
3. Test with `npx serve -s dist -l 3000`
4. Check browser console for errors
