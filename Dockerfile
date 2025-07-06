# Stage 1: Build
FROM node:18-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy dependency files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the application code
COPY . .

# Build the TypeScript project
RUN npm run build

# Expose the application port
EXPOSE 3000

# We will use a custom entrypoint to run migrations and then start the app
COPY docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

ENTRYPOINT ["docker-entrypoint.sh"]


# Run the entrypoint script
CMD [ "npm", "start" ]
