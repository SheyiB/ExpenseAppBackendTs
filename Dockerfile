FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

COPY .env ./

RUN npm install

RUN npm install -g typescript

COPY . . 

RUN tsc

EXPOSE 7000

CMD [ "node", "build/index.js" ]