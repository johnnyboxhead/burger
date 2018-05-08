    
$(function(){ 
    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
        burger_name: $("#bu").val().trim(),
        devoured: 0
        };

        // Send the POST request.
        $.ajax("/api/addburger", {
        type: "POST",
        data: newBurger
        }).then(
        function() {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
        }
        );
    });
    $(".burgerbutton").on("click", function(){
        console.log("this is working!")
        var id = $(this).data("id");
        var devoured = 1
        var newDevouredState = {
            devoured: devoured
        }

        $.ajax("/api/updateburger" + id, {
        type: "PUT",
        data: newDevouredState
        }).then(
        function() {
            console.log("updated burger");
            // Reload the page to get the updated list
            location.reload();
        })
    })    
})    

