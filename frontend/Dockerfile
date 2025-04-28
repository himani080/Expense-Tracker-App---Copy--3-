# Step 1: Build the React App
FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
ENV NODE_OPTIONS="--max-old-space-size=2048"
RUN npm run build

# Step 2: Serve the React Build
FROM nginx:stable-alpine

# Copy the React build output to Nginx's HTML folder
COPY --from=builder /app/build /usr/share/nginx/html

# Copy a default nginx config (optional, if needed)
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
