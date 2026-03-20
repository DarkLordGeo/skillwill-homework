FROM node:20-alpine

WORKDIR /usr/src/app

COPY package.json .

RUN install

COPY . .

EXPOSE 3000

CMD [ "npm","start" ]