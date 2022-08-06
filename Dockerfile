
FROM node:latest

WORKDIR /app
ADD . / /app/

RUN npm install
RUN npm config set scripts-prepend-node-path auto

WORKDIR /app
EXPOSE 80
EXPOSE 443

CMD ["npm",  "start"]
