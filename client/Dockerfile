FROM node:22

WORKDIR /app

COPY ./client/package*.json ./

RUN npm install

COPY ./client .

WORKDIR /app

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5173"]