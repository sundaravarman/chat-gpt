FROM docker-registry.qualcomm.com/library/node:lts AS build

WORKDIR /app

COPY package.json .

RUN npm install

copy . .

EXPOSE 3000

CMD [ "npm","start" ]
