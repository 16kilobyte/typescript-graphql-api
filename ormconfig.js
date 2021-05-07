
const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME, DB_TYPE, NODE_ENV, DB_FORCE } = process.env;

const DEV_MODE = NODE_ENV === "development";
const DROP_SCHEMA = DB_FORCE === "true";

module.exports = {
  type: DB_TYPE,
  host: DB_HOST || "localhost",
  port: DB_PORT || 5432,
  username: DB_USERNAME || "postgres",
  password: DB_PASSWORD || "postgres",
  database: DB_NAME || "postgres",
  dropSchema: DROP_SCHEMA,
  synchronize: DEV_MODE,
  logging: DEV_MODE,
  entities: ["src/database/**/**/model.ts"],
  subscribers: ["src/database/**/**/subscriber.ts"],
  migrations: ["src/database/migrations/*.ts"],
  cli: {
    entitiesDir: "src/database/entities",
    migrationsDir: "src/database/migrations"
  },
};