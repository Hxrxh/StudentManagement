const mySql = require("mysql2");

const connection = mySql.createConnection({
  host: "localhost",
  user: "root",
  password: "lenovog5012345",
  database: "studentmanagement",
});
connection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("connection established");
});

const connectionQuery = `Create Table IF NOT EXISTS Students( id int AUTO_INCREMENT PRIMARY KEY, 
name varchar(20), email varchar(30) UNIQUE ,age int)`;

connection.execute(connectionQuery, (err) => {
  if (err) {
    console.log(err);
    connection.end();
    return;
  }

  console.log("connection query executed");
});
module.exports = connection;
