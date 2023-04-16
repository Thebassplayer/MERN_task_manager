const express = require("express");

const app = express();

//PORT
const PORT = process.env.PORT || 5002;

//Routes

app.get("/", (req, res) => {
  res.send("Hola raul");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
