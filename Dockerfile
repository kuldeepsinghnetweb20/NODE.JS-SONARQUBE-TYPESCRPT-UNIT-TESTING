# syntax=docker/dockerfile:1.0.0-experimental
FROM node:14.17.0

ARG NODE_ENV
ENV NODE_ENV=${NODE_ENV}
RUN echo ${NODE_ENV}

RUN mkdir -p  /usr/src/app/datauser
# Server
WORKDIR /usr/src/app/datauser
COPY package.json /usr/src/app/datauser
RUN npm cache verify
RUN npm install    
COPY . /usr/src/app/datauser
EXPOSE 7000
CMD ["npm", "start"]

