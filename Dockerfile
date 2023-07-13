FROM node

WORKDIR /usr/app

COPY package.json ./

RUN npm install\
&& npm install typescript -g
COPY . .
RUN tsc

EXPOSE 3330

CMD ["npm","run","dev"]