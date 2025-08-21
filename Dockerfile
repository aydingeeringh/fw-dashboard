FROM node:20

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first (if present)
COPY . .

# Install dependencies
RUN npm install && npm run sources && npm run build

# Expose port (replace 3000 with your server's port if needed)
EXPOSE 3000

# Start the server
CMD ["node", "server.js"]