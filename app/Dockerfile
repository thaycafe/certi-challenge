FROM node:alpine

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm i
RUN npm install dotenv
COPY . .

