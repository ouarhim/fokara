# Single-stage Dockerfile for Coolify
# Builds and serves the React app
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Install all dependencies (needed for build)
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Install serve globally
RUN npm install -g serve

# Expose port 3000
EXPOSE 3000

# Note: Healthcheck removed - Nixpacks handles healthcheck when using Nixpacks build pack
# If using Dockerfile build pack, uncomment the healthcheck below:
# HEALTHCHECK --interval=1m --timeout=10s --start-period=30s --retries=3 \
#   CMD wget --spider --quiet http://localhost:3000 || exit 1

# Start the application with SPA routing
# -s flag enables single-page app mode (all routes serve index.html)
CMD ["serve", "-s", "dist", "-l", "3000"]