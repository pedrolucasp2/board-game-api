const express = require("express");
const app = express();

const port = 3000;

const db = require("./models");

db.sequelize.sync();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./roules/boardGame.routers")(app);

app.listen(port, () => {
  console.log("Server running on port  ${port}");
});
