#! /bin/bash

npm i
DATABASE_URL="postgres://postgres:postgres@db:5432/mydb?sslmode=disable" npx prisma generate
DATABASE_URL="postgres://postgres:postgres@db:5432/mydb?sslmode=disable" npm run dev