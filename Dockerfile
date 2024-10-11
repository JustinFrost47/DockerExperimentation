FROM node:22 AS base
WORKDIR /usr/local/app

# frontend dev
FROM base AS client-base
WORKDIR /usr/local/app/client
COPY ./client/package.json ./client/package-lock.json ./
RUN npm install 
COPY ./client ./

FROM client-base AS client-dev
EXPOSE 5173
CMD ["npm", "run", "dev"]


# frontend production

FROM base AS client-build
WORKDIR /usr/local/app/client
COPY ./client/package.json ./client/package-lock.json ./
RUN npm install --only=production  # Install only production dependencies
COPY ./client ./
RUN npm run build  # Create optimized production build

FROM nginx:alpine AS client-production
COPY --from=client-build /usr/local/app/client/dist /usr/share/nginx/html
EXPOSE 80


CMD ["nginx", "-g", "daemon off;"]


# backend dev

FROM base AS backend-base
WORKDIR /usr/local/app/backend
COPY ./backend/package.json ./backend/package-lock.json ./
RUN npm install
COPY ./backend ./

FROM backend-base AS backend-dev
EXPOSE 5000
CMD ["npm", "run", "dev"] 