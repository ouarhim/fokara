# Dockerfile Location

The Dockerfile has been renamed to `Dockerfile.backup` because we're using **Nixpacks** build pack.

## When to Use Dockerfile

If you want to switch from Nixpacks to Dockerfile:

1. In Coolify → General Settings:
   - Change **Build Pack** from `Nixpacks` to `Dockerfile`
   - Set **Dockerfile Location** to `/Dockerfile.backup`
   - Or rename `Dockerfile.backup` back to `Dockerfile`

2. The Dockerfile will:
   - Build the app (`npm run build`)
   - Serve from `dist` folder on port 3000
   - Use `serve` package for SPA routing

## Current Setup (Nixpacks)

- **Build Pack**: `Nixpacks`
- **Is it a static site?**: ✅ Checked
- **Publish Directory**: `dist`
- **Port**: `3000`

Nixpacks automatically handles building and serving, so Dockerfile is not needed.
