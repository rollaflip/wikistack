const express = require("express");
const sequelize = require("sequelize");
const morgan = require("morgan");
const layout = require("./views/layout");
const { db, Page, User } = require('./models');
const app = express();
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/user');

app.use('/wiki', wikiRouter);
app.use('/user', userRouter);




db.authenticate().
then(() => {
  console.log('connected to the database');
});

// app.get("/", (req, res) => {
//   res.send(layout());
// });

app.get("/", (req, res) => {
  res.redirect('/wiki');
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

//init();





