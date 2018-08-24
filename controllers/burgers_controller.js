var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res) {
    console.log("We are in the main page... ");
    burger.allBurgers(function(data) {
      var allB = {
        allburgers: data
      };
      console.log("Inside GET / "+ allB);
      res.render("index", allB);
    });
  });

  router.post("/api", function(req, res) {
    // Test it.
    console.log("Inserting... "+req.body.burger);
    
    // Test it.
    // res.send('You sent, ' + req.body.wish)
    burger.insertBurger(req.body.burger, function(result){
        //res.json({id: result.id});
        res.redirect("/");
    });
    
    //res.redirect("/");
    
  });



  router.put("/api/:id", function(req, res) {
      var idnum = req.params.id;
      console.log("Id is...: "+ idnum);
    burger.eatenBurger(idnum, function(result){
        if (result.changedRows == 0){
            return res.status(404).end();
        }else{
            res.status(200).end();
        }
    });

    //res.redirect("/");
  });






module.exports = router;