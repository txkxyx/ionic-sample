FROM node:latest

WORKDIR /src/app

RUN npm install -g @ionic/cli

CMD ["sh"]