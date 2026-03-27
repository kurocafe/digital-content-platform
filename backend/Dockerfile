# backend/Dockerfile
FROM node:25.8.2-alpine3.23

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 4000
# CMD ["npm", "run", "start:dev"]