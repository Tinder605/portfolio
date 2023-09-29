FROM --platform=linux/amd64 node:18-alpine

WORKDIR /workspace/nuxt

COPY ./package*.json ./

RUN npm install

COPY ./ ./

RUN npm run build

EXPOSE 3000
