FROM node:20.5.1-alpine
RUN mkdir -p /app
WORKDIR /app
COPY . .
RUN npm cache clean --force
RUN npm run build
CMD ["npm", "run" ,"dev"]
EXPOSE 3000
