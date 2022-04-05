const path = require("path");
const fs = require("fs");

const express = require("express");
const uuid = require("uuid");

const resData = require("./util/restaurant-data");
const defaultRoutes = require("./routes/default");
const restaurantRoutes = require("./routes/restaurant");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));

app.use(express.static("public"));

app.use("/" , defaultRoutes);

app.use("/" , restaurantRoutes);

app.use(function(req , res){
  // if the request doesn't matches to any of the above, then it means that the url is wrong.
  // So we need to show the 404 page. 
  // here we are making use of middleware, because many url will fall in this category.
  res.status(404).render("404");
})

// if we want to handle the internal server error, 
// then we have to make use of middleware, because it can happen in many ways, 
// and route should accept them all. 
// in order to specify that this will run for internal server error, we should pass the function
// with exactly 4 arguments
app.use(function(error , req , res , next){
  res.status(500).render("500");
})

app.listen(3000);
