FROM node:18

WORKDIR /Users/katas8n/Desktop/exmp/superproject

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "dev"] 

EXPOSE 3000