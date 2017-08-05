# Use an official Node runtime as a parent image
FROM node:latest

# Set the working directory to /app
WORKDIR /app

# Cached Docker layers
COPY package.json /app
COPY package-lock.json /app

# Install any needed packages specified in package.json
RUN npm install

# Bundle app source
COPY . /app

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Define environment variable
ENV NODE_ENV production

# Run app when the container launches
CMD ["npm", "start"]