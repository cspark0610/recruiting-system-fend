FROM node:16.14.0-alpine3.15 as builder

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./
COPY tsconfig.json ./

RUN npm install
RUN npm install react-scripts

COPY . .

CMD ["npm", "start"]
