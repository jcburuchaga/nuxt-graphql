FROM node:erbium

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

ENV NUXT_HOST=0.0.0.0

CMD ["npm", "run", "start"]