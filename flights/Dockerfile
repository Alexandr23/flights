FROM node:14-alpine3.12

WORKDIR /usr/src/flights

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8001

CMD [ "npm", "run", "start" ]