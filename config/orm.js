var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM ?? ";
    connection.query(queryString, [tableInput], function(err, result) {
      if (err) throw err;
      console.log(result);
      cb(result);
    });
  },
  insertOne: function( table, field, newValue, cb) {
      console.log("We are inside insert One... newValue is.." + newValue);
    var queryString = "INSERT INTO ?? (??, devoured) VALUES (?, 0);";
    console.log(queryString);
    connection.query(queryString, [table, field, newValue], function(err, result) {
      if (err) throw err;
      cb(result);

    });
  },
  updateOne: function(table, id, cb) {
    var queryString =
      "UPDATE ?? SET devoured = 1 WHERE id = ?";
      connection.query(
      queryString, [table, id], function(err, result) {
        if (err) throw err;
        console.log("Update successful!");
        cb(result);
      }
    );
  }
};

module.exports = orm;