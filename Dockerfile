# base image
FROM node:12.2.0-alpine AS builder
EXPOSE 80 8080

# install chrome for protractor tests
#RUN apt-key add "$(wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub -e use_proxy=yes -e http_proxy=http://abws399:R3tr0R%36bb1t@bc-array.intra.absa.co.za:8080)"
#RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
#RUN apt-get update && apt-get install -yq google-chrome-stable

ARG env=prod

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# RUN npm config set registry http://registry.npmjs.org/

# install and cache app dependencies
# COPY package.json /app/package.json
# RUN npm cache clean --force
# RUN npm cache verify
# RUN npm install --verbose
# RUN npm install -g @angular/cli@7.3.9

# add app
COPY . /app

# build app
RUN npm run build:$env
RUN ls -lrt /app

# change image to nginx
FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html
COPY --from=builder /app/dist/ .
RUN chmod 777 /usr/share/nginx/html
