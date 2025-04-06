FROM node:22.14.0 AS debug

WORKDIR /app

RUN rm -rf node_modules package-lock.json

COPY ./package*.json ./

COPY ./tsconfig.json ./

COPY ./.husky ./.husky

RUN npm install

COPY . .

EXPOSE 6785

EXPOSE 9229

ENV NODE_ENV=development

CMD ["npm", "run", "start:dev"]