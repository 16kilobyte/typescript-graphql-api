# 🈚 typescript-graphql-api

[![Build Status](https://dev.azure.com/16kilobyte/public-pipes/_apis/build/status/16kilobyte.typescript-graphql-api?branchName=master)](https://dev.azure.com/16kilobyte/public-pipes/_build/latest?definitionId=4&branchName=master)
[![Node CI](https://github.com/16kilobyte/typescript-graphql-api/workflows/Node%20CI/badge.svg)](https://github.com/16kilobyte/typescript-graphql-api/workflows/Node%20CI/badge.svg)

## Features

- Express
- Apollo Server
- TypeORM
- GraphQL
- MySQL or PostgreSQL
- Redis
- Sentry

## Directions

1. Clone this repo: `git clone https://github.com/16kilobyte/typescript-graphql-api.git`
2. Change directory: `cd typescript-graphql-api`
3. Install dependencies: `npm i`
4. Create a MySQL database and set your credentials on a `.env` file, similar to `.env.example`. Support for PostgreSQL is also included (you can start a Postgres db with Docker by running `npm run get:pg` followed by `npm run start:pg`)
5. Create a Redis database and set your credentials on a `.env` file, similar to `.env.example` (you can start Redis with Docker by running `npm run get:redis` followed by `npm run start:redis`)
6. Run the application: `npm start`
7. Navigate to `http://localhost:8080/api`
8. Make sure the app is up and running before generating the client types (`npm run gen`)

## Configuration

| Environment variable | Default value |
| -------------------- | ------------- |
| SESSION_SECRET       | random uuid   |
| PORT                 | 8080          |
| APOLLO_ENDPOINT      | /api          |
| DB_HOST              | localhost     |
| DB_NAME              | mysql         |
| DB_USERNAME          | root          |
| DB_PASSWORD          | root          |
| REDIS_HOST           | localhost     |
| REDIS_PORT           | 6379          |
| REDIS_PASSWORD       | undefined     |
| SENTRY_DNS           | undefined     |
| ENVIRONMENT          | local         |
