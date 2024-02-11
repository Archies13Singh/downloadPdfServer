const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.download("./Archies_Resume.pdf");
});

app.listen(4000, () => {
  console.log("Starting Server on Port 4000");
});
