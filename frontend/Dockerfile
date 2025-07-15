FROM nginx:alpine

# Clean default NGINX site config
RUN rm -rf /usr/share/nginx/html/*

# Copy Reflex static export
COPY out/ /usr/share/nginx/html

# Optional: serve single-page app fallback (for client-side routing)
COPY out/__spa-fallback.html /usr/share/nginx/html/index.html
