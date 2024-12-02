# Backend Dockerfile

# Use node:20-alpine as the base image
FROM node:20-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and pnpm-lock.yaml to the working directory
COPY package.json pnpm-lock.yaml ./

# Install dependencies using pnpm install --frozen-lockfile
RUN npm install -g pnpm && pnpm install --frozen-lockfile

# Copy the rest of the application code to the working directory
COPY . .

# Build the application using pnpm nx build server --verbose
RUN pnpm nx build server --verbose

# Expose port 3000
EXPOSE 3000

# Set the command to run the application using node dist/apps/server/main.js
CMD ["node", "dist/apps/server/main.js"]

# Frontend Dockerfile

# Use node:20-alpine as the base image
FROM node:20-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and pnpm-lock.yaml to the working directory
COPY package.json pnpm-lock.yaml ./

# Install dependencies using pnpm install --frozen-lockfile
RUN npm install -g pnpm && pnpm install --frozen-lockfile

# Copy the rest of the application code to the working directory
COPY . .

# Build the application using pnpm nx build devmx --verbose
RUN pnpm nx build devmx --verbose

# Expose port 4200
EXPOSE 4200

# Set the command to run the application using pnpm nx serve devmx
CMD ["pnpm", "nx", "serve", "devmx"]