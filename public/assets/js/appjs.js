console.log("AYEEEE");

$(function() {
$(".eat-burger").on("click", function(event) {
    console.log("Clicked button! ");
    var id = $(this).data("id");
    
    // Send the DELETE request.
    $.ajax("/api/" + id, {
      type: "PUT",
      data: id
    }).then(
      function() {
        console.log("ate burger", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});