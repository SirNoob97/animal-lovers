FROM node:14.17.5-alpine3.14 AS builder
ARG USER_SERVICE_HOST_NAME
ARG USER_SERVICE_PORT
WORKDIR /app
COPY ./package.json .
COPY ./tsconfig.json .
RUN npm install --silent
COPY ./.env .
COPY ./src ./src
COPY ./public ./public
RUN npm run build

FROM nginx:1.20.1-alpine
COPY --from=builder /app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
