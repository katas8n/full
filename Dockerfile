FROM node:18 

WORKDIR /superproject

COPY package*.json ./

RUN npm install 

COPY . .

CMD ["npm", "run", "dev"] 

EXPOSE 3000