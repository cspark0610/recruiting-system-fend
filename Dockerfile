FROM node:16.14.0-alpine3.15 as builder

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:16.14.0-alpine3.15

COPY package.json .

COPY --from=builder ./app/build ./build

CMD ["npm", "start"]
