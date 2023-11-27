
FROM node:18.16.1-alpine

RUN node --version
RUN mkdir -p /src/app/client
WORKDIR /src/app/client


COPY package.json /src/app/client/
COPY package-lock.json /src/app/client/

RUN npm install --production
COPY . /src/app/client/


RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
