FROM node:9.9.0

ENV APP_DIR /home/node/webapp/
RUN mkdir /home/node/webapp/
WORKDIR /home/node/webapp/
COPY package.json /home/node/webapp/
RUN npm install --silent
EXPOSE 3000

CMD ["npm", "start"]
