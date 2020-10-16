FROM node:12.18.4

COPY ["package.json", "package-lock.json", "/usr/src/AdminAppSerpro/"]

WORKDIR /usr/src/AdminAppSerpro/

RUN npm install
RUN npm audit fix
RUN npm install -g @angular/cli@7.3.9

COPY [".", "/usr/src/AdminAppSerpro"]
RUN npm build

FROM nginx:1.19.3

COPY /usr/src/AdminAppSerpro/dist /usr/share/nginx/html

EXPOSE 9090

#CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'", "npm", "start"]