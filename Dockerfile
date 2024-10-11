FROM node:22 AS base
WORKDIR /usr/local/app

FROM base AS client-base
WORKDIR /usr/local/app/client
COPY ./client/package.json ./
RUN npm install --include=dev
COPY ./client ./

FROM client-base AS client-dev
EXPOSE 5173
CMD ["npm", "run", "dev"]