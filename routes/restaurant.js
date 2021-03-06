const express = require("express");

const resData = require("./../util/restaurant-data");

const router = express.Router();

router.get("/confirm", function (req, res) {
  res.render("confirm");
});

router.get("/recommend", function (req, res) {
  res.render("recommend");
});

router.post("/recommend", function (req, res) {
  const restaurant = req.body;
  restaurant.id = uuid.v4();
  const storedRestaurants = resData.getStoredRestaurants();

  storedRestaurants.push(restaurant);

  resData.storeRestaurants(storedRestaurants);

  res.redirect("/confirm");
});

router.get("/restaurants", function (req, res) {
  console.log("called");
  const storedRestaurants = resData.getStoredRestaurants();
  console.log(storedRestaurants);
  res.render("restaurants", {
    numberOfRestaurants: storedRestaurants.length,
    restaurants: storedRestaurants,
  });
});

router.get("/restaurants/:id" , function(req , res){
  const restaurantId = req.params.id;

  const storedRestaurants = resData.getStoredRestaurants();

  for(const restaurant of storedRestaurants){
    if(restaurant.id === restaurantId){
      return res.render("restaurant-detail" , {restaurant : restaurant});
    }
  }
  // this will run the url-Id doesnt matches with any of the stored id.
  res.status(404).render("404");
})

module.exports = router;