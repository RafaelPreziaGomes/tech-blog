const Sequelize = require("sequelize");

require("dotenv").config();

let sequelize;

// connect to database
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,
    {
      host: "localhost",
      user: "root",
      dialect: "mysql",
      port: 3306,
      logging: false,
    }
  );
}

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been stablised successfully.");
  })
  .catch((err) => {
    console.log("Unable to connect to the database", err);
  });

module.exports = sequelize;
