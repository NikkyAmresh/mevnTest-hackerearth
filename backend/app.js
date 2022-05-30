const express = require("express");
const cors = require("cors");
const app = express();

var corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
console.log({ dbUrl: db.url });
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

app.all("*", (_, res) => {
  res.status(204).send(null);
});

require("./app/routes/post.routes")(app);

module.exports = app;
