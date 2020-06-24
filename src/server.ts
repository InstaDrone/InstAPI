import Express from "express";

require("dotenv").config();

const app = Express();

app.get("/", (_, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}! 🚀`);
});
