#! /bin/bash

npm i
DATABASE_URL="postgres://postgres:postgres@postgres:5432/mydb?sslmode=disable?connect_timeout=300" npx prisma generate
DATABASE_URL="postgres://postgres:postgres@postgres:5432/mydb?sslmode=disable?connect_timeout=300" npx prisma db push
npm run build
cd dist
npm install -g pm2
pm2 start index.js --name "forums-server"