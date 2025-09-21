const express = require("express");
const studentRouter = require("./routes/studentRouter");
const app = express();
app.use(express.json());
app.use("/students", studentRouter);
app.listen(3000, () => {
  console.log("Server is running");
});
