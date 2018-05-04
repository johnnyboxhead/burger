require("connection.js")

var selectAll = function(){
    connection.query("SELECT * FROM burgers", function(err, data){

    })
}

var insertOne = function(){
    connection.query("INSERT INTO burgers(burger_name, devoured) VALUES(?, false)", <<INSERT VALUE HERE>>, function(err, result){
        
    })
}

var updateOne = function(){
    connection.query("UPDATE burgers SET ? = ? WHERE ? = ?", [req.body.movie, req.params.id], function(err, result){
    })
}

module.exports.body

