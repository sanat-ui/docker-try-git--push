# Step 1 — Start from Node.js version 18
FROM node:18

# Step 2 — Set working directory inside the container
WORKDIR /app

# Step 3 — Copy package.json first (for caching)
COPY package*.json ./

# Step 4 — Install dependencies
RUN npm install

# Step 5 — Copy the rest of your code
COPY . .

# Step 6 — Tell Docker this app uses port 3000
EXPOSE 3000

# Step 7 — Command to start the app
CMD ["node", "app.js"]