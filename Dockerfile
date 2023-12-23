# Base image
FROM node:20.10-slim

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Copy source files
COPY . .

# Install dependencies
RUN npm install

# Build the app
RUN npm run build

# Expose the port the app runs on
EXPOSE  5173

# Start the application
CMD ["npm", "run", "dev"]
