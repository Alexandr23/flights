FROM node:16-alpine3.15

WORKDIR /usr/src/flights

COPY package*.json ./

COPY . .

RUN npm ci

EXPOSE 8001

CMD [ "npm", "run", "start" ]