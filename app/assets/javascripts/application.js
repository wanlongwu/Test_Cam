//= require rails-ujs
//= require_tree .


// var camera = new JpegCamera("#camera");

// var snapshot = camera.capture();

// snapshot.show(); // Display the snapshot

// snapshot.upload({api_url: "/upload_image"}).done(function(response) {
//   response_container.innerHTML = response;
//   this.discard(); // discard snapshot and show video stream again
// }).fail(function(status_code, error_message, response) {
//   alert("Upload failed with status " + status_code);
// });


// $("#canvas").click(function(e){
//      getPosition(e);
// });

// var pointSize = 3;

// function getPosition(event){
//      var rect = canvas.getBoundingClientRect();
//      var x = event.clientX - rect.left;
//      var y = event.clientY - rect.top;

//      drawCoordinates(x,y);
// }

// function drawCoordinates(x,y){
//     var ctx = document.getElementById("canvas").getContext("2d");


//     ctx.fillStyle = "#ff2626"; // Red color

//     ctx.beginPath();
//     ctx.arc(x, y, pointSize, 0, Math.PI * 2, true);
//     ctx.fill();
// }

// canvas.addEventListener("click",(event) => {
//   getPosition(e)
// });
