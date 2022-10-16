FROM node:16-alpine3.15

WORKDIR /usr/src/orchestrator

COPY package*.json ./

COPY . .

RUN npm ci

EXPOSE 8080

CMD [ "npm", "run", "start" ]