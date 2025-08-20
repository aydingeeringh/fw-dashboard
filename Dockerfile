# Simple Node.js static server
FROM node:18-alpine

WORKDIR /app

# Copy package.json and install only express
COPY package.json ./
RUN npm install express --only=production

# Copy built files and server
COPY build/ ./build/
COPY server.js ./

# Expose port 8080
EXPOSE 8080

# Start the server
CMD ["node", "server.js"]