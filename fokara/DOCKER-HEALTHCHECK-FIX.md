# Docker Healthcheck Fix Summary

## Audit Results

All Dockerfiles have been audited and fixed with proper healthcheck configurations.

## Changes Applied

### 1. Dockerfile (Main)
- **Port**: 3000
- **Healthcheck**: Added `HEALTHCHECK --interval=1m --timeout=10s --start-period=30s --retries=3 CMD wget --spider --quiet http://localhost:3000 || exit 1`
- **Status**: ✅ Fixed

### 2. Dockerfile.coolify
- **Port**: 3000
- **Healthcheck**: Updated intervals from `30s/3s/5s` to `1m/10s/30s`
- **Status**: ✅ Fixed

### 3. Dockerfile.nginx
- **Port**: 80
- **Healthcheck**: Updated to explicitly use port 80 and improved intervals
- **Status**: ✅ Fixed

### 4. Dockerfile.simple
- **Port**: 3000
- **Healthcheck**: Added `HEALTHCHECK --interval=1m --timeout=10s --start-period=30s --retries=3 CMD wget --spider --quiet http://localhost:3000 || exit 1`
- **Status**: ✅ Fixed

## Healthcheck Configuration Details

All healthchecks use:
- **Interval**: 1 minute (recommended for production)
- **Timeout**: 10 seconds (allows for slow responses)
- **Start Period**: 30 seconds (gives container time to start)
- **Retries**: 3 (fails after 3 consecutive failures)
- **Command**: `wget --spider --quiet http://localhost:PORT || exit 1`
  - `wget` is available in Alpine Linux by default
  - `--spider` checks if URL exists without downloading
  - `--quiet` suppresses output
  - `|| exit 1` ensures proper exit code

## Verification

After deployment, verify healthcheck status:

```bash
docker inspect --format='{{json .State.Health}}' <container_name>
```

Expected output should show:
```json
{
  "Status": "healthy",
  "FailingStreak": 0,
  "Log": [...]
}
```

## Coolify Configuration

Ensure in Coolify UI:
- **Port**: Matches Dockerfile EXPOSE (3000 for serve, 80 for nginx)
- **Healthcheck Path**: `/` (default)
- **Healthcheck Port**: Matches EXPOSE port

## Rollback

If healthcheck causes issues, you can temporarily disable by:
1. Commenting out HEALTHCHECK line in Dockerfile
2. Or setting `exclude_from_hc: true` in docker-compose.yml (if used)

## Notes

- `wget` is available in `alpine` base images by default
- No need to install `curl` or `wget` separately
- Healthcheck runs inside container, so use `localhost` not external IP
- Start period of 30s gives Node.js apps time to fully start

## Next Steps

1. ✅ All Dockerfiles updated
2. 🔄 Commit and push changes
3. 🔄 Redeploy in Coolify
4. ✅ Verify healthcheck status after deployment
