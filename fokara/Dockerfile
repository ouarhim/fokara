# Production stage - copies from Nixpacks build output
# Nixpacks builds the app and creates /app/dist folder
FROM nginx:alpine

# Copy custom nginx config for SPA routing
COPY public/nginx.conf /etc/nginx/conf.d/default.conf

# Copy built application from Nixpacks build stage
# Nixpacks builds into /app/dist, so we copy from there
COPY --from=qg0ckg44wsowskgw8ossogkc:c3332c2e8851f6ca3304ec12c8bed94fb7c0166d-build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]