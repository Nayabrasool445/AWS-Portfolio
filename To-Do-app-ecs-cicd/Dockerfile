# Use the official NGINX base image
FROM nginx:alpine

# Remove the default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy your To-Do app files to the nginx web directory
COPY . /usr/share/nginx/html

# Copy the custom NGINX configuration
COPY default.conf /etc/nginx/conf.d/default.conf

# Fix ownership and permissions
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    find /usr/share/nginx/html -type d -exec chmod 755 {} \; && \
    find /usr/share/nginx/html -type f -exec chmod 644 {} \;

# Expose port 80
EXPOSE 80

# Run nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
