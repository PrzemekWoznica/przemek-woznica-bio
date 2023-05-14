FROM node:16-alpine3.16 as build
WORKDIR /web
COPY package.json package-lock.json ./
COPY src/ src/
COPY public/ public/
RUN npm install
RUN npm run build

FROM nginx:1.22.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /web/build /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]