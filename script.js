
//Run sound
var runsound = new Audio("run.mp3");
runsound.loop = true;




//jump sound
var jumpsound = new Audio("jump.mp3");




//Dead sound
var deadsound = new Audio("dead.mp3")



//key event

function keyCheck(event) {

    //Enter key


    if (event.which == 13) {

        if (runWorkerId == 0) {

            runWorkerId = setInterval(run, 100);
            runsound.play();
            moveBackgroundWorkerId = setInterval(moveBackground, 100);
            creatBlockWorkerId = setInterval(createBlock,100);
            scoreWorkerId = setInterval(updateScore,100);
            moveBlockWorkerId=setInterval(moveBlock,100);
            
           
        }

    }







    //Space key


    if (event.which == 32) {


        if(jumWorkerId==0){

            clearInterval(runWorkerId)
            runWorkerId = -1;
            runsound.pause();

            jumWorkerId = setInterval(jump,100);
            jumpsound.play();
            
        }



    }


    }



var boyId = document.getElementById("boy");
var runImageNumber = 1;
var runWorkerId = 0;
function run() {

    runImageNumber++

    if (runImageNumber==9) {

        runImageNumber=1;
    }

    boyId.src = "Run (" + runImageNumber + ").png";

}



//boy jump


var jumpImageNumber = 1;
var jumWorkerId = 0;
var boyMargintop = 325;
function jump(){


    jumpImageNumber++;

    //jump fly

    if(jumpImageNumber <= 7){

        boyMargintop = boyMargintop- 30
        boyId.style.marginTop = boyMargintop + "px";
    }


    //jump landing


    if(jumpImageNumber >= 8){


        boyMargintop = boyMargintop + 30
        boyId.style.marginTop = boyMargintop + "px";
    }

    if(jumpImageNumber==13){

        jumpImageNumber=1;

        clearInterval(jumWorkerId);
        runWorkerId = setInterval(run,100);
        runsound.play();

        jumWorkerId = 0; 

       //start  game in tha jump

       if(scoreWorkerId==0);

       if(boyMargintop > 235 ){


        clearInterval(scoreWorkerId);
       scoreWorkerId = setInterval(updateScore,100);
       }
       }
       if(moveBackgroundWorkerId==0){

       moveBackgroundWorkerId = setInterval(moveBackground,100);
       }
       if(creatBlockWorkerId==0){
        creatBlockWorkerId= setInterval(createBlock,100);
       }
       if(moveBlockWorkerId==0){

        moveBlockWorkerId=setInterval(moveBlock,100);
     }


boyId.src = "Jump (" +jumpImageNumber+ ").png";



}
//move background
var backgroundId = document.getElementById("background");
var backgroundX = 0;
var moveBackgroundWorkerId = 0;

function moveBackground(){

    backgroundX = backgroundX - 20;
    backgroundId.style.backgroundPositionX = backgroundX  + "px";
}


//score
var scoreId = document.getElementById("score");
var newScore = 0;
var scoreWorkerId = 0;


function updateScore(){

    newScore++;

    scoreId.innerHTML = newScore;

}

//create block 

var blockMarginLeft = 500;
var creatBlockWorkerId = 0;
var blockId = 1;

function createBlock(){
    var block = document.createElement("div");
    block.className = "block";
    block.id = "block" + blockId;

    blockId++;

    var gap = Math.random()*(1000-400)+400; //creat random number

    blockMarginLeft = blockMarginLeft + gap;
    block.style.marginLeft = blockMarginLeft + "px";

    document.getElementById("background").appendChild(block);
}
//move block 

var moveBlockWorkerId = 0;


function moveBlock(){

    //using for loop

    for(var i=1; i<=blockId; i++){


        var currentBlock = document.getElementById("block" + i);
        var currentBlockMarginLeft =currentBlock.style.marginLeft;
        var newBlockMarginLeft = parseInt(currentBlockMarginLeft) - 20;


        currentBlock.style.marginLeft = newBlockMarginLeft + "px";

       //first- alert(newBlockMarginLeft);
        //144-44


        if(newBlockMarginLeft < 144 & newBlockMarginLeft > 44 ){

            //second-alert(boyMargintop);
            //235

             if(boyMargintop > 235 ){


                clearInterval(runWorkerId);
                runsound.pause();

                clearInterval(jumWorkerId);
                jumWorkerId = -1;

                clearInterval(scoreWorkerId);
                clearInterval(moveBackgroundWorkerId);
                clearInterval(creatBlockWorkerId);
                clearInterval(moveBlockWorkerId);
              

                deadWorkerId = setInterval(dead,100);
                deadsound.play();

           // alert("Dead!");

             }
        }
    }



}

//Boy dead

var deadImageNumber = 1;
var deadWorkerId = 0;



function dead(){

    deadImageNumber++;

    if(deadImageNumber==11){
        deadImageNumber=10

        

        boyId.style.marginTop = "325px";

        document.getElementById("endscreen").style.visibility = "visible";
        
        document.getElementById("endscore").innerHTML = newScore;
        
    }
      

    
    boyId.src = "Dead (" +deadImageNumber+ ").png";



}

//page reaload

function reload(){

    location.reload();
}