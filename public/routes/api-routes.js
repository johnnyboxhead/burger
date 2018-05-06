
//need to update
$(function() {
    $("#submit").on("click", function(event) {
      var id = $(this).data("id");
      var newSleep = $(this).data("newsleep");
  
      var newSleepState = {
        sleepy: newSleep
      };
  
      // Send the PUT request.
      $.ajax("/api/cats/" + id, {
        type: "PUT",
        data: newSleepState
      }).then(
        function() {
          console.log("changed sleep to", newSleep);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newCat = {
        name: $("#ca").val().trim(),
        sleepy: $("[name=sleepy]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/cats", {
        type: "POST",
        data: newCat
      }).then(
        function() {
          console.log("created new cat");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  

//   // Create all our routes and set up logic within those routes where required.
// router.get("/", function(req, res) {
//     burger.all(function(data) {
//       var hbsObject = {
//         burger: data
//       };
//       console.log(hbsObject);
//       res.render("index", hbsObject);
//     });
//   });
  
//   router.post("/api/burgers", function(req, res) {
//     burger.create(["name", "devoured"], [req.body.name, req.body.devoured], function(result) {
//       // Send back the ID of the new quote
//       res.json({ id: result.insertId });
//     });
//   });
  
//   router.put("/api/burgers/:id", function(req, res) {
//     var condition = "id = " + req.params.id;
  
//     console.log("condition", condition);
  
//     burger.update(
//       {
//         devoured: req.body.devoured
//       },
//       condition,
//       function(result) {
//         if (result.changedRows === 0) {
//           // If no rows were changed, then the ID must not exist, so 404
//           return res.status(404).end();
//         }
//         res.status(200).end();
  
//       }
//     );
//   });
  
//   // Export routes for server.js to use.
//   module.exports = router;