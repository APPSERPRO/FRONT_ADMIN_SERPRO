FROM node:12.18.4

COPY ["package.json", "package-lock.json", "/usr/src/AdminAppSerpro/"]

WORKDIR /usr/src/AdminAppSerpro/

RUN npm install
RUN npm install -g @angular/cli@7.3.9

COPY [".", "/usr/src/AdminAppSerpro"]
RUN npm build

FROM nginx:1.19.3

COPY ["nginx.conf", "/etc/nginx/nginx.conf"]
COPY --from=build-step /usr/src/AdminAppSerpro/dist /usr/share/nginx/html


EXPOSE 9090

CMD ["npm", "start"]
