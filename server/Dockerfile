#1
FROM node:alpine

#2
RUN mkdir -p /src/app/server
WORKDIR /src/app/server

#3
COPY package.json /src/app/server
COPY package-lock.json /src/app/server

#4
RUN npm install --production

#5
COPY . /src/app/server/

#6
CMD [ "node", "Server.js" ]