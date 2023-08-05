//key event

function keychek(event) {

  //Enter key

  if (event.which == 13) {

    if (runworkerid == 0) {

      runworkerid = setInterval(run, 100);

    }

    if (moveBackgroundAnimationId == 0) {

      moveBackgroundAnimationId = setInterval(moveBackground, 100);
    }

  }

  //space key
  if (event.which == 32) {

    if (jumpworkeId == 0) {

      clearInterval(runworkerid);
      jumpworkeId = setInterval(jump, 100);


    }
  }

}

//boy run
var boyId = document.getElementById("boy");
var runImageNumber = 1;
var runworkerid = 0;

function run() {

  //increment(1+1)
  runImageNumber++;

  if (runImageNumber == 9) {
    runImageNumber = 1;

  }

  boyId.src = "Run (" + runImageNumber + ").png";

}
var jumpImageNumber = 1;
var jumpworkeId = 0;
var boymargintop = 350;
function jump() {

  jumpImageNumber++;

  //jump fly

  if (jumpImageNumber <= 7) {
    boymargintop = boymargintop - 13;
    boyId.style.marginTop = boymargintop + "px";
  }
  //jump landing  

  if (jumpImageNumber >= 8) {

    boymargintop = boymargintop + 13;
    boyId.style.marginTop = boymargintop + "px";
  }

  if (jumpImageNumber == 13) {

    jumpImageNumber = 1;


    clearInterval(jumpworkeId);
    runworkerid = setInterval(run, 100);

    jumpworkeId = 0;
  }

  boyId.src = "Jump (" + jumpImageNumber + ").png";
}
//move background


var backgroundImagePositionX = 0;
var moveBackgroundAnimationId = 0;

function moveBackground() {

  backgroundImagePositionX = backgroundImagePositionX - 20;
  document.getElementById("background").style.backgroundPositionX = backgroundImagePositionX + "px";



}







