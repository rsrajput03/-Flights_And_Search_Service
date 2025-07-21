# Stage 1: Build
FROM nodesource/nsolid

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

# Run the entrypoint script
CMD [ "npm", "start" ]
