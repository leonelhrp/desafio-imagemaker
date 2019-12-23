FROM node:lts-alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Set environment variables
ENV NODE_ENV production
ENV REACT_HOST 0.0.0.0
ENV REACT_PORT 3000

# Install git and other tools
RUN apk update && apk upgrade && apk add git yarn && \
  rm -rf /var/lib/apt/lists/* && \
  rm /var/cache/apk/*

# Bundle app source
COPY . /usr/src/app

# If you are building your code for development
# RUN npm install
RUN yarn install

# If you are building your code for production
#RUN npm install --only=production
#RUN npm run build
#RUN yarn install --production
#RUN yarn build 

EXPOSE 3000

# Run en development mode
# CMD [ "npm", "run", "start" ]
CMD [ "yarn", "start" ]

# Run in production mode
#CMD [ "npm", "start" ]
#CMD [ "yarn", "start" ]