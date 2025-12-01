const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Sabari! Your Node.js app is running 🚀");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
