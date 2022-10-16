FROM node:16-alpine3.15 as build

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm ci

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf ./*

COPY --from=build /app/dist .

ENTRYPOINT ["nginx", "-g", "daemon off;"]
