let gameSeq = [];
let userSeq = [];
let btns =["yellow", "red", "purple","green"];
let started = false;
let level = 0;
let body = document.querySelector("body")
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
let hscore = 0;

document.addEventListener("keypress", function(){
    if(started == false){
         console.log("Game started");
         started = true;

         levelUp();
    }
   
});

function levelUp(){
  userSeq = [];
  
    level++;
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);

    //push
    gameSeq.push(randColor);
    // console.log(gameSeq);

    gameFlash(randBtn);
   
}

function gameFlash(btns){
      btns.classList.add("flash");

      setTimeout(function(){
        btns.classList.remove("flash");
      },200);
}
function userFlash(btns){
      btns.classList.add("userflash");

      setTimeout(function(){
        btns.classList.remove("userflash");
      },200);

      
}
function checkAns(idx){
  //  console.log(`current level = ${level}`);
 
  if(userSeq[idx] === gameSeq[idx]){
    if(userSeq.length == gameSeq.length){
      setTimeout(levelUp,1000);
  }
}
  else{
    h2.innerHTML = `game over! Your Score is <b>${level}<b>.<br> press any key to start.`;

    if(level > hscore){
      
    hscore = level;
    }
    h3.innerHTML = `High Score = ${hscore}`;

    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function(){
    document.querySelector("body").style.backgroundColor = "white";
    },200);

    reset();
    
    
  }
}
function btnPress(){
  // console.log(this);
  let  btn = this;
  userFlash(btn); 

  
  let userColor = btn.getAttribute("id");
  userSeq.push(userColor);
 
   let idx = level-1;
  checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(let btns of allBtns){
  btns.addEventListener("click", btnPress);
}





function reset(){
 
  started = false;
  gameSeq = [];
  userSeq = [];
  
  level = 0;
}