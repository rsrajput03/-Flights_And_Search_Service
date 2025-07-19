import express from "express";
import ServerConfig from "./config/server-config";
import logger from "./config/logger-config";
import sequelize from "./config/sequelize";
import errorHandler from "./middlewares/error-handler.middlerware";
import routes from "./routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", routes);
app.use(errorHandler);

// 🚀 Start Server
async function startServer() {
  try {
    await sequelize.authenticate();
    logger.info(`Database connection established successfully.`);
    app.listen(ServerConfig.PORT, () => {
      logger.info(
        `Successfully started the server on port ${ServerConfig.PORT}`
      );
    });
  } catch (error) {
    logger.error("Unable Start Server: ", error);
  }
}

startServer();
