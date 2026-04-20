import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging: false,
  },
);

export const connectDB = async () => {
  if (!global.sequelize) {
    try {
      await sequelize.authenticate();
      global.sequelize = sequelize;
      console.log("✅ DB Connected");
    } catch (error) {
      console.error("❌ DB Error:", error.message);
    }
  }
};

export default sequelize;
