import * as dotenv from "dotenv";

dotenv.config();

const ServerConfig = {
  PORT: process.env.PORT,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_NAME: process.env.DB_NAME,
  DB_HOST: process.env.DB_HOST,
  NODE_ENV: process.env.NODE_ENV,
};

export default ServerConfig;
