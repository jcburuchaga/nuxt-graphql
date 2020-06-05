FROM node:erbium

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

ENV NUXT_HOST=0.0.0.0

RUN npm install && npm run build

CMD ["npm", "start"]