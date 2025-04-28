# Step 1: Build the React App
FROM node:18 AS builder

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the entire project to the container
COPY . .

# Set memory limit for Node.js build
ENV NODE_OPTIONS="--max-old-space-size=8192"  # You can increase this further if needed

# Build the app
RUN npm run build

# Step 2: Serve the React Build with Nginx
FROM nginx:stable-alpine

# Copy the build output from the builder image to Nginx’s HTML folder
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80 to serve the app
EXPOSE 80

# Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]
