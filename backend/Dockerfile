FROM node:lts-alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Set environment variables
ENV NODE_ENV production
ENV NODE_HOST 0.0.0.0
ENV NODE_PORT 9090

# Install git and other tools
RUN apk update && apk upgrade && apk add git yarn && \
  rm -rf /var/lib/apt/lists/* && \
  rm /var/cache/apk/*

# Bundle app source
COPY . /usr/src/app


# Enable env file
RUN mv /usr/src/app/env.example.json /usr/src/app/env.json

# If you are building your code for development
# RUN npm install
RUN yarn install

# If you are building your code for production
#RUN npm install --only=production
#RUN npm run build
#RUN yarn install --production
#RUN yarn build 

EXPOSE 9090

# Run en development mode
# CMD [ "npm", "run", "server" ]
CMD [ "yarn", "server" ]

# Run in production mode
#CMD [ "npm", "server" ]
#CMD [ "yarn", "server" ]