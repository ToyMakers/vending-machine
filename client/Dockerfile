FROM node:14-alpine as build

WORKDIR /usr/src/app
COPY ./client/package*.json ./
RUN yarn cache clean && yarn --update-checksums
COPY ./client ./
RUN yarn && yarn build

FROM nginx:1.17-alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
