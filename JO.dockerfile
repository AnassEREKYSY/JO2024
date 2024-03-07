# Use the official Node.js 20 image as the base
FROM node:20

# Copy the package.json file
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the remaining application files
COPY . .

# Expose the port used by your application (adjust if needed)
EXPOSE 3000

# Start the Node.js application
CMD ["node", "index.js"]
