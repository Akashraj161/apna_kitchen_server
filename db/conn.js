const mongoose = require("mongoose");

mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection has been established");
  })
  .catch((e) => {
    console.log(e);
    console.log("Connection Lost");
  });