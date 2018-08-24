var orm = require("../config/orm.js");



var burger = {
// Find all the pets ordering by the lowest price to the highest price.
allBurgers: function (cb){
    orm.selectAll("burgers", function(res){
        cb(res);
    });
},

// Find a pet in the pets table by an animal_name of Rachel.

insertBurger: function (burger, cb){
    orm.insertOne('burgers', 'burger_name', burger, function(res){
        cb(res);
    });},


// Find the buyer with the most pets.
eatenBurger: function (id, cb){
    orm.updateOne("burgers",id, function(res){
        cb(res);
    });}


}

module.exports = burger;