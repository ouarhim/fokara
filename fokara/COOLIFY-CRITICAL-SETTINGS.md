# 🚨 CRITICAL Coolify Settings Fix

## Current Issues (From Your Screenshot)

1. ❌ **Is it a static site?** - **UNCHECKED** (Should be ✅ CHECKED)
2. ❌ **Publish Directory** - Set to `/` (Should be `dist`)

These two settings are causing your deployment to fail!

## 🔧 IMMEDIATE FIX REQUIRED

### Step 1: Check Static Site Box
1. In Coolify → Your Project → General Settings
2. ✅ **Check the box** "Is it a static site?"
3. This tells Coolify to serve static files correctly

### Step 2: Fix Publish Directory
1. In the same General Settings page
2. Find **Publish Directory** field
3. Change from `/` to `dist`
4. This tells Coolify to serve from the `dist` folder (where Vite builds your app)

### Step 3: Save and Redeploy
1. Click **Save** button
2. Click **Redeploy** button
3. Wait for deployment

## Why This Fixes It

**Before (Current):**
- Publish Directory = `/` → Serves source files
- Static site unchecked → Wrong server configuration
- Result: Browser requests `/src/main.tsx` → ❌ Error

**After (Fixed):**
- Publish Directory = `dist` → Serves built files
- Static site checked → Correct server configuration  
- Result: Browser requests `/assets/index-*.js` → ✅ Works

## Healthcheck Issue

The healthcheck error happens because:
1. Container might not be starting correctly due to wrong settings
2. Nixpacks generates healthcheck but container fails before it can run

**After fixing the two settings above, the healthcheck should work automatically.**

## Verification

After redeploy, check:
1. ✅ Website loads correctly
2. ✅ No errors in browser console
3. ✅ Requests go to `/assets/index-*.js` (not `/src/main.tsx`)

## Current Settings Summary

✅ **Correct:**
- Build Pack: `Nixpacks`
- Port: `3000`
- Base Directory: `/fokara`

❌ **Needs Fix:**
- Is it a static site?: **CHECK THIS BOX**
- Publish Directory: Change to `dist`

Fix these two settings and redeploy!
