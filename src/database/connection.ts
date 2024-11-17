import { Sequelize } from "sequelize-typescript";
import { envConfig } from "../config/config";

// Ensure environment variables are loaded
const sequelize = new Sequelize(envConfig.connectionString as string, {
  dialect: "postgres" 
});

const connectDatabase =  () => {
  try {
     sequelize.authenticate();
    console.log("Database connected successfully.");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};

// Call the connect function
connectDatabase();

export default sequelize;
