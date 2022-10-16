FROM node:14-alpine3.12 as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf ./*

COPY --from=build /app/dist .

ENTRYPOINT ["nginx", "-g", "daemon off;"]
