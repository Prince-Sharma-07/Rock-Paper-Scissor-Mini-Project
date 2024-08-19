let choices = document.querySelectorAll('.choices');
let userScore = document.querySelector('#user-score');
let compScore = document.querySelector('#comp-score');
let reStart = document.querySelector('#restart');
let msg = document.querySelector('#msg');

let compTurn , you = 0 , comp = 0;

rock.addEventListener("click" , ()=>{
    compTurn = Math.floor(Math.random()*3+1);
    if(compTurn == 1){
       msg.innerText = "It was Draw";
    }
    else if(compTurn == 2){
        msg.innerText = "You Lose";
        comp++;
        compScore.innerText = `${comp}`;
    }
    else if(compTurn == 3){
        msg.innerText = "You Win";
        you++;
        userScore.innerText = `${you}`;
    }
})

paper.addEventListener("click" , ()=>{
    compTurn = Math.floor(Math.random()*3+1);
    if(compTurn == 1){
        msg.innerText = "You Win";
        you++;
        userScore.innerText = `${you}`;
    }
    else if(compTurn == 2){
        msg.innerText = "It was Draw";
    }
    else if(compTurn == 3){
        msg.innerText = "You Lose";
        comp++;
        compScore.innerText = `${comp}`;
    }
})

scissor.addEventListener("click" , ()=>{
    compTurn = Math.floor(Math.random()*3+1);
    if(compTurn == 1){
        msg.innerText = "You Lose";
        comp++;
        compScore.innerText = `${comp}`;
    }
    else if(compTurn == 2){
        msg.innerText = "You Win";
        you++;
        userScore.innerText = `${you}`;
    }
    else if(compTurn == 3){
        msg.innerText = "It was Draw";
    }
})

reStart.addEventListener("click" , ()=>{
      window.location.reload();
})