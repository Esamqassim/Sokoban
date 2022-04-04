
//document.getElementById("demo2").innerHTML = "My First JavaScript in program----";

import {tileMap01,kingPlasment,Tiles,Entities}from './SokobanBase.js';
//



export{makeGameBoard,setupBoard, makeBlock, moveKingUp ,moveKingLeft,moveKingRight }

  
const boardElement = document.getElementById('board');
//Get Array of 
const boardMap=makeGameBoard();//Its required,but it generate generate board in the beginng only


function setupBoard(boardBlockHeight, boardBlockWidth) {
  boardElement.innerHTML = "";//clear board
  const blockHeight = 50;
  const blockWidth = 50;
  const boardHeight = boardBlockHeight * blockHeight;
  const boardWidth = boardBlockWidth * blockWidth;

  boardElement.style.width = boardWidth + "px";
  boardElement.style.height = boardHeight + "px";

  //reset kingPlasment
  kingPlasment.posY = -1;
  kingPlasment.posX = -1;
}

function makeBlock(cssColorClass, idValue) {
  let block = document.createElement('div');
  block.id = idValue;// for example Y0 X0 for first element
  //block.setAttribute("id", idValue);  
  //block.classList.add('block');
  //block.classList.add(cssColorClass);
  block.className = 'block ' + cssColorClass;// for example bolckgreen
  boardElement.appendChild(block);
}
//makeGameBoard();
function makeGameBoard() {
  //document.getElementById("demo").innerHTML = "My First JavaScript in makeGameBoard----";
  
  setupBoard(16, 19);

  for (let yPos = 0; yPos < 16; yPos++) {

      for (let xPos = 0; xPos < 19; xPos++) {

         const colorCss = tileMap01[yPos][xPos];//3-dimension array,get just color from array
        
         
          if (colorCss.includes('kingIcon')) {//in [] des not readed!
              kingPlasment.posY = yPos;
              kingPlasment.posX = xPos;
            // document.getElementById("demo").innerHTML = "Hellow i am in loop" ;
          }
          makeBlock(colorCss, "Y" + yPos + "X" + xPos);
          
          
        }
  }

 
}
document.getElementById("draw").addEventListener("click",  makeGameBoard);
//Added

function moveKingUp() {
 // document.getElementById("demo").innerHTML = "My First JavaScript inmoveKingUp()----";
  if (kingPlasment.posY === -1) {//if there is no king placed
      return;//exit function
  }

  const kingDiv = document.getElementById("Y" + kingPlasment.posY + "X" + kingPlasment.posX);
  //document.getElementById("demo2").innerHTML ="Y" + kingPlasment.posY + "X" + kingPlasment.posX;
  const kingsNewPosY = kingPlasment.posY - 1;
   // Don't move if you meet a wall
   const x=tileMap01[kingsNewPosY][kingPlasment.posX];
   if (x.includes(Tiles.Wall)) {
    return
  }
 
  const kingMoveToDiv = document.getElementById("Y" + kingsNewPosY + "X" + kingPlasment.posX);

  kingDiv.classList.toggle('kingIcon');
  kingMoveToDiv.classList.toggle( 'kingIcon');

  kingPlasment.posY = kingPlasment.posY - 1;
}
document.getElementById("hellobutton").addEventListener("click",  moveKingUp);

//End move UP
function moveKingLeft() {
  // document.getElementById("demo").innerHTML = "My First JavaScript  moveKingLeft()----";
   if (kingPlasment.posX === -1) {//if there is no king placed
       return;//exit function
   }
 
   const kingDiv = document.getElementById("Y" + kingPlasment.posY + "X" + kingPlasment.posX);
  
   const kingsNewPosX = kingPlasment.posX - 1;
    // Don't move if you meet a wall
    const x=tileMap01[kingPlasment.posY][kingsNewPosX];//
    if (x.includes(Tiles.Wall)) {
     return
   }
  
   const kingMoveToDiv = document.getElementById("Y" +  kingPlasment.posY + "X" +kingsNewPosX);
 
   kingDiv.classList.toggle('kingIcon');
   kingMoveToDiv.classList.toggle( 'kingIcon');
 
   kingPlasment.posX = kingPlasment.posX - 1;
 }
 document.getElementById("left").addEventListener("click",  moveKingLeft);
 //End move left

 function moveKingRight() {
  document.getElementById("demo").innerHTML = "My First JavaScript  moveKingRightt()----";
   if (kingPlasment.posX === -1) {//if there is no king placed
       return;//exit function
   }
 
   const kingDiv = document.getElementById("Y" + kingPlasment.posY + "X" + kingPlasment.posX);
  
   const kingsNewPosX = kingPlasment.posX + 1;
    // Don't move if you meet a wall
    const x=tileMap01[kingPlasment.posY][kingsNewPosX];//
    if (x.includes(Tiles.Wall)) {
     return
   }
  
   const kingMoveToDiv = document.getElementById("Y" +  kingPlasment.posY + "X" +kingsNewPosX);
 
   kingDiv.classList.toggle('kingIcon');
   kingMoveToDiv.classList.toggle( 'kingIcon');
 
   kingPlasment.posX = kingPlasment.posX + 1;
 }
 document.getElementById("right").addEventListener("click",  moveKingRight);
 //End move right

 function moveKingDown() {
   document.getElementById("demo").innerHTML = "My First JavaScript moveKingDown()----";
   if (kingPlasment.posY === -1) {//if there is no king placed
       return;//exit function
   }
 
   const kingDiv = document.getElementById("Y" + kingPlasment.posY + "X" + kingPlasment.posX);
   //document.getElementById("demo2").innerHTML ="Y" + kingPlasment.posY + "X" + kingPlasment.posX;
   const kingsNewPosY = kingPlasment.posY+ 1;
    // Don't move if you meet a wall
    const x=tileMap01[kingsNewPosY][kingPlasment.posX];
    if (x.includes(Tiles.Wall)) {
     return
   }
  
   const kingMoveToDiv = document.getElementById("Y" + kingsNewPosY + "X" + kingPlasment.posX);
 
   kingDiv.classList.toggle('kingIcon');
   kingMoveToDiv.classList.toggle( 'kingIcon');
 
   kingPlasment.posY = kingPlasment.posY + 1;
 }
 document.getElementById("down").addEventListener("click",  moveKingDown);

/*function hello() {
  alert('Hello');
  }
  document.getElementById("hellobutton").addEventListener("click",  hello);*/