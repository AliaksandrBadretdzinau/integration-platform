FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm cache clean --force
RUN npm install

COPY . .

ENV PORT=8081

EXPOSE 8081

CMD [ "npm", "start" ]
