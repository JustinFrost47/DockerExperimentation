FROM node:22 AS base
WORKDIR /usr/local/app

FROM base AS client-base
WORKDIR /usr/local/app/client
COPY ./client/package.json ./client/package-lock.json ./
RUN npm install 
COPY ./client ./

FROM client-base AS client-dev
EXPOSE 5173
CMD ["npm", "run", "dev"]


FROM base AS client-build
WORKDIR /usr/local/app/client
COPY ./client/package.json ./
RUN npm install --only=production  # Install only production dependencies
COPY ./client ./
RUN npm run build  # Create optimized production build

# Stage 2: Serve the client with a lightweight web server
FROM nginx:alpine AS client-production
COPY --from=client-build /usr/local/app/client/dist /usr/share/nginx/html
EXPOSE 80

# Use the default NGINX command to run the server
CMD ["nginx", "-g", "daemon off;"]