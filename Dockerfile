# Use Node.js as base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the project for production
RUN npm run build

# Expose port 3000
#EXPOSE 3000
RUN ls -la /app/dist

# Start the application
CMD ["npx", "serve", "-s", "dist", "-l", "3000"]