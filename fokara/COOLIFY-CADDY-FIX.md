# Coolify Caddy Configuration Fix

## Problem
Coolify is using Caddy to serve files, but it's serving from the **source directory** instead of the **built `dist` folder**. This causes:
- Browser requests `/src/main.tsx` (dev file) instead of `/assets/index-*.js` (built file)
- Website doesn't load because TypeScript files aren't served

## Root Cause
Coolify's Caddy is configured to serve from `/app` (root) instead of `/app/dist` (build output).

## Solution

### Option 1: Configure Coolify to Use Dockerfile (Recommended)
1. In Coolify dashboard → Your app → Settings
2. Set **Dockerfile** to: `Dockerfile.coolify`
3. Set **Port** to: `3000`
4. Redeploy

This will:
- Build the app (`npm run build`)
- Serve from `dist` folder using `serve` package
- Properly handle SPA routing

### Option 2: Configure Caddy to Serve from dist
If Coolify is using Caddy directly (not Dockerfile):

1. In Coolify → Settings → **Build Command**: `npm run build`
2. In Coolify → Settings → **Publish Directory**: `dist`
3. The `Caddyfile` I created should automatically serve from `/app/dist`

### Option 3: Manual Caddy Configuration
If you have access to Caddy config in Coolify:

```caddyfile
:80 {
    root * /app/dist
    file_server
    try_files {path} /index.html
    
    @js {
        path *.js *.mjs
    }
    header @js Content-Type "application/javascript; charset=utf-8"
    
    @css {
        path *.css
    }
    header @css Content-Type "text/css; charset=utf-8"
}
```

## Verification After Fix

After redeploy, check:
1. Browser DevTools → Network tab
2. Look for requests to `/assets/index-*.js` (not `/src/main.tsx`)
3. Status should be `200 OK`
4. Content-Type should be `application/javascript`

## Current Issue in Logs
```
"uri":"/src/main.tsx"  ← WRONG: This is a dev file
```

## Expected After Fix
```
"uri":"/assets/index-zc1iW2OU.js"  ← CORRECT: Built file
```
