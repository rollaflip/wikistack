const express = require("express");
const sequelize = require("sequelize");
const morgan = require("morgan");
const layout = require("./views/layout");
const { db, Page, User } = require('./models');

const app = express();

db.authenticate().
then(() => {
  console.log('connected to the database');
});

app.get("/", (req, res) => {
  res.send(layout());
});



const PORT = 3000;

// app.listen(PORT, () => {
//   console.log(`App listening in port ${PORT}`);
// });


db.sync({force: true});

const init = async () => {
  await db.sync();

  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  })
}

init();





