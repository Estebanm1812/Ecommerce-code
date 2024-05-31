FROM node:20.3.1-alpine
RUN mkdir -p /app
WORKDIR /app
COPY . .
RUN npm cache clean --force
RUN npm install cloudinary --force
RUN npx prisma generate ./prisma/schema.prisma
CMD ["npm", "run" ,"dev"]
EXPOSE 3000
