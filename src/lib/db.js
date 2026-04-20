// import { Sequelize } from "sequelize";

// const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD,
//   {
//     host: process.env.DB_HOST,
//     dialect: "mysql",
//     logging: false, // set true if you want SQL logs
//   },
// );

// // ✅ Test connection
// export const connectDB = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log("✅ MySQL Connected Successfully");
//   } catch (error) {
//     console.error("❌ DB Connection Error:", error.message);
//   }
// };

// export default sequelize;

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
  try {
    await sequelize.authenticate();
    console.log("✅ DB Connected");
  } catch (error) {
    console.error("❌ DB Error:", error.message);
  }
};

export default sequelize;
