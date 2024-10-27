FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./

RUN apt-get update && apt-get install -y wget

ENV DOCKERIZE_VERSION v0.8.0

RUN apt-get update \
  && apt-get install -y wget \
  && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
  && apt-get autoremove -yqq --purge wget && rm -rf /var/lib/apt/lists/*

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]