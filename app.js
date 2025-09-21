const express = require("express");
const studentRouter = require("./routes/studentRouter");

const db = require("./utils/db-connection");
const app = express();
app.use(express.json());
app.use("/students", studentRouter);
db.sync()
  .then(() => {
    app.listen(3000, () => {
      console.log("Server is running");
    });
  })
  .catch((err) => {
    console.log(err);
  });
