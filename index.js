const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("server ready");
});

app.listen(port, () => {
  console.log(`server connected port on ${port}`);
});
