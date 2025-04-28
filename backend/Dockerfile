# Use official Node.js LTS image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files first (for caching layers)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all other source code
COPY . .

# Set environment variables here
ENV MONGO_URI=mongodb+srv://Admin:mDb0SQNcyMBcKioh@cluster0.aievnvs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

# Expose the port your app runs on
EXPOSE 5000

# Start the app
CMD ["node", "app.js"]
