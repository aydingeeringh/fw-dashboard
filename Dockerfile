# Simple static build approach - build locally first
FROM nginx:alpine

# Copy nginx configuration and remove default config
COPY nginx.conf /etc/nginx/nginx.conf
RUN rm -f /etc/nginx/conf.d/default.conf

# Copy pre-built Evidence files
COPY build/ /usr/share/nginx/html/

# Expose port 8080
EXPOSE 8080

# Start nginx
CMD ["nginx", "-g", "daemon off;"]