const express = require("express");
const bodyParser = require("body-parser");

const app = express();


app.set("view engine", "ejs");
app.set("views", "views");
//add other template engines

const adminRouter = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const errorContoller = require('./controllers/error');

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin',adminRouter);
app.use(shopRoutes);

app.use(errorContoller.error404);


app.listen(5000, () => {
  console.log("Server running");
});
