FROM node:16.10-alpine

WORKDIR /data/www

RUN rm -rf node_modules

COPY package*.json ./

RUN apk add --no-cache python3 make g++

RUN npm install glob rimraf

RUN npm install

COPY . .

RUN npm run build

CMD ["npm","run","start"]
