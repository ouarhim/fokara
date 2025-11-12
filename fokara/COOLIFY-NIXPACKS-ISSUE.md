# Coolify Nixpacks + Dockerfile Issue

## Problem Identified

From the deployment logs, I can see:

1. ✅ **Nixpacks builds successfully** - Creates `/app/dist` folder
2. ❌ **Dockerfile copies from wrong location** - Tries to copy from `/app/src` instead of `/app/dist`
3. ❌ **Healthcheck fails** - Container starts but healthcheck fails

## Root Cause

Coolify is using **Nixpacks** to build (even though Build Pack is set to "Dockerfile"), then trying to use a **Dockerfile** for the final runtime image. The generated Dockerfile copies from the wrong location.

## Solution Options

### Option 1: Use Nixpacks Only (Recommended)

Since Nixpacks is working correctly:

1. In Coolify → General Settings:
   - **Build Pack**: Change to `Nixpacks` (not Dockerfile)
   - **Is it a static site?**: ✅ Check this box
   - Nixpacks will automatically:
     - Build your app (`npm run build`)
     - Serve from `dist` folder using Caddy
     - Handle SPA routing correctly

2. **Remove or rename Dockerfile** temporarily:
   - Rename `Dockerfile` to `Dockerfile.backup`
   - This prevents Coolify from trying to use it

### Option 2: Use Dockerfile Only

If you want to use Dockerfile:

1. In Coolify → General Settings:
   - **Build Pack**: Keep as `Dockerfile`
   - **Dockerfile Location**: `/Dockerfile`
   - **Port**: `3000`

2. The updated Dockerfile will:
   - Build everything itself (no Nixpacks)
   - Serve from `dist` folder using `serve`

## Current Status

✅ **Dockerfile updated** - Now uses single-stage build compatible with Coolify
✅ **Build succeeds** - Nixpacks builds correctly
❌ **Runtime fails** - Dockerfile copies from wrong location

## Next Steps

**Recommended**: Switch to Nixpacks only:
1. Change Build Pack to `Nixpacks`
2. Check "Is it a static site?"
3. Redeploy

This should work immediately since Nixpacks is already building correctly!
