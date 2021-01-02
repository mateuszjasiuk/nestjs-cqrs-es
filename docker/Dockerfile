FROM node:12.13-alpine As development

WORKDIR /usr/src/app

COPY package*.json yarn.lock ./

RUN yarn install

COPY . .

RUN npm run build

CMD ["node", "dist/main"]