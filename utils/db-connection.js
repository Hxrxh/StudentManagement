const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("studentmanagement", "root", "lenovog5012345", {
  host: "localhost",
  dialect: "mysql",
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("connection with database has been established");
  } catch (err) {
    console.log(err);
  }
})();

module.exports = sequelize;
