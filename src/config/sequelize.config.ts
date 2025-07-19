import { Sequelize } from "sequelize-typescript";
import { models } from "../models";
const dbConfig = require("./db-config.js");

const env = process.env.NODE_ENV || "development";
const config = (dbConfig as any)[env];

const sequelize = new Sequelize({
  database: config.database,
  dialect: "mysql",
  username: config.username,
  password: config.password,
  host: config.host,
  logging: false,
  models: models,
});

export default sequelize;
