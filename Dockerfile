FROM node:lts-alpine3.9

COPY . /usr/
WORKDIR /usr/
RUN npm i && cd frontend && npm i
RUN cd frontend && npm run build
EXPOSE 5000

CMD ["node", "server.js"]
