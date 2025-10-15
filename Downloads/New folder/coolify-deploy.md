# Coolify Deployment Instructions

## Quick Fix for the Error

The error occurred because Coolify was looking for the `main` branch, but your repository was using `master`. This has been fixed by creating the `main` branch.

## Deployment Options

### Option 1: Use the main Dockerfile (Recommended)
- Repository: `https://github.com/ouarhim/maktabat_lfokara.git`
- Branch: `main`
- Build Method: `Dockerfile`
- Port: `3000`

### Option 2: Use Dockerfile.coolify (If Option 1 fails)
1. Rename `Dockerfile.coolify` to `Dockerfile` in your repository
2. Commit and push the changes
3. Deploy using the same settings

### Option 3: Manual Configuration (If Docker fails)
- Build Command: `npm run build`
- Start Command: `npx serve -s dist -l 3000`
- Port: `3000`
- Node Version: `18`

## Current Status
✅ Repository has `main` branch  
✅ All deployment files are ready  
✅ WhatsApp integration configured  
✅ Multi-language support included  

## Next Steps
1. Try deploying again in Coolify
2. Use the `main` branch
3. Select `Dockerfile` as build method
4. Set port to `3000`

Your website should deploy successfully now!
