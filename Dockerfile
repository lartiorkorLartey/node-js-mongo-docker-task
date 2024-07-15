FROM node:alpine

COPY ./ /home/app

WORKDIR /home/app

RUN npm install

CMD [ "nodemon", "server.js" ]