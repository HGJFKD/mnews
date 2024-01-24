FROM node:16

WORKDIR /app/nest

COPY ./app/nest/package*.json .


COPY ./app/nest .
RUN npm install 

CMD ["npm", "start"]
