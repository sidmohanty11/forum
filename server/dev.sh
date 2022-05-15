#! /bin/bash

npm i
DATABASE_URL="postgres://postgres:postgres@postgres:5432/mydb?sslmode=disable?connect_timeout=300" npx prisma generate
DATABASE_URL="postgres://postgres:postgres@postgres:5432/mydb?sslmode=disable?connect_timeout=300" npx prisma db push
DATABASE_URL="postgres://postgres:postgres@postgres:5432/mydb?sslmode=disable?connect_timeout=300" npm run dev