var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "",
    database: "burgers_db"
})

connection.connect(function(err){
    if (err) throw err;
})
//exporting for our ORM to use
module.exports = connection
