const express = require("express");

const app = express();
require("./database");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", require("./routes/index.routes"));

app.listen(3000, () => {
  console.log(`Estoy en: http://localhost:3000`);
});
