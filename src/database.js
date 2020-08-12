const mongoose = require("mongoose");

mongoose
  .connect("mongodb://mongo/mydatabase", {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB esta connectada");
  })
  .catch((err) => {
    console.error(err);
  });
