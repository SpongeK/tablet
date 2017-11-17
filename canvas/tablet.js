window.onload = function() {
  var canvas = document.getElementById("tabletId");
  var ctx = canvas.getContext("2d");
  var height = canvas.offsetParent.offsetTop;
  var width = canvas.offsetParent.offsetLeft;
  var flag = false;
  var downFlag = false;
  var startX = 0;
  var startY = 0;
  draw(ctx);

  canvas.onmouseup = function() {
    downFlag = false;
  };

  canvas.onmousedown = function(event) {
    startX = event.clientX;
    startY = event.clientY;
    downFlag = true;
    ctx.beginPath();
    ctx.moveTo(startX-width, startY-height);
  };

  canvas.onmouseout = function() {
    flag = false;
  };

  canvas.onmouseover = function() {
    flag = true;
  };

  canvas.onmousemove = function(event) {
      if (flag && downFlag) {
      ctx.strokeStyle = "black";
      ctx.lineWidth = 12;
      
      var curX = event.clientX;
      var curY = event.clientY;
      ctx.lineTo(curX-width, curY-height);
      ctx.lineCap="round";
      ctx.stroke();

    }
  };
};

function draw(ctx) {
  ctx.strokeStyle = "red";
  ctx.fillStyle = "red";
  ctx.lineWidth = 8;
  ctx.beginPath();
  // ctx.moveTo(75,40);
  // ctx.bezierCurveTo(75,37,70,25,50,25);
  // ctx.bezierCurveTo(20,25,20,62.5,20,62.5);
  // ctx.bezierCurveTo(20,80,40,102,75,120);
  // ctx.bezierCurveTo(110,102,130,80,130,62.5);
  // ctx.bezierCurveTo(130,62.5,130,25,100,25);
  // ctx.bezierCurveTo(85,25,75,37,75,40);
  // ctx.fill();
  ctx.moveTo(0, 0);
  ctx.lineTo(500, 0);
  ctx.lineTo(500, 500);
  ctx.lineTo(0, 500);
  ctx.closePath();
  ctx.moveTo(0, 0);
  ctx.lineTo(500, 500);
  ctx.moveTo(500, 0);
  ctx.lineTo(0, 500);
  ctx.moveTo(250, 0);
  ctx.lineTo(250, 500);
  ctx.moveTo(0, 250);
  ctx.lineTo(500, 250);
  ctx.stroke();
}
