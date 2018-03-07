// this is the code for camera and


navigator.getUserMedia = ( navigator.getUserMedia ||
                   navigator.webkitGetUserMedia ||
                   navigator.mozGetUserMedia ||
                   navigator.msGetUserMedia);
var video;
var webcamStream;

function startWebcam() {
  if (navigator.getUserMedia) {
    navigator.getUserMedia (

        // constraints
    {
       video: true,
       audio: false
    },

        // successCallback
    function(localMediaStream) {
    video = document.querySelector('video');
    video.src = window.URL.createObjectURL(localMediaStream);
    webcamStream = localMediaStream;
    },

        // errorCallback
    function(err) {
       console.log("The following error occured: " + err);
    }
     );
  } else {
     console.log("getUserMedia not supported");
  };
};

      //---------------------
      // TAKE A SNAPSHOT CODE
      //---------------------
    var canvas, ctx;



    function init() {
      // Get the canvas and obtain a context for
      // drawing in it
      canvas = document.getElementById("myCanvas");
      ctx = canvas.getContext('2d');
    };

    function hideVideo(){
      setTimeout(function(){

        const v = document.getElementById('video');
        v.parentNode.removeChild(v);

      },6000);
    };



    function snapshot() {
      setTimeout(function(){
       // Draws current image from the video element into the canvas
      ctx.drawImage(video, 0,0, canvas.width, canvas.height);
      },5000);

      // above is delay for 5 seconds;
    };



//       $("#canvas").click(function(e){
//      getPosition(e);
// });

// below is the code for forming points, lines and angels:

var pointSize = 3;

let xy = [];

let i = 0;

let angleResult = 0;

const a = document.getElementById("myCanvas");
a.addEventListener("click",(event) => {
  getPosition(event);

});

function getPosition(event){
     var rect = canvas.getBoundingClientRect();
     var x = event.clientX - rect.left;
     var y = event.clientY - rect.top;
     xy.push([x,y]);
     drawCoordinates(x,y);
     i++;
     if(i>1){
      drawLine(xy[i-2][0],xy[i-2][1],xy[i-1][0],xy[i-1][1])
     };
     if(i>2){
      angle(xy[i-3][0],xy[i-3][1],xy[i-2][0],xy[i-2][1],xy[i-1][0],xy[i-1][1])
     };
};

function drawCoordinates(x,y){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle = "#ff2626"; // Red color
    ctx.beginPath();
    ctx.arc(x, y, pointSize, 0, Math.PI * 2, true);
    ctx.fill();
};

const drawLine = (x1,y1,x2,y2) => {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
};

const angle = (x1,y1,x2,y2,x3,y3) => {
    var line12 = Math.sqrt(Math.pow(x2-x1,2)+
                        Math.pow(y2-y1,2)); // p0->c (b)
    var line23 = Math.sqrt(Math.pow(x2-x3,2)+
                        Math.pow(y2-y3,2)); // p1->c (a)
    var line13 = Math.sqrt(Math.pow(x3-x1,2)+
                         Math.pow(y3-y1,2)); // p0->p1 (c)
    angleResult = (Math.acos((line23*line23+line12*line12-line13*line13)/(2*line23*line12)))*180/Math.PI;
};
