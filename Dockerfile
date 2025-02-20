FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN rm -rf node_modules
RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm" , "start" ]