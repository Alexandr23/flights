FROM node:14-alpine3.12

WORKDIR /usr/src/orchestrator

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "npm", "run", "start" ]