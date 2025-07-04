let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const RandIdx=Math.floor(Math.random()*3);
    return options[RandIdx];
};

const drawGame=()=>{
    msg.innerText="Game was Draw. Play Again.";
    msg.style.backgroundColor="#081b31";

};

 const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin===true){
        userScore++;
        userScorePara.innerText=userScore;  
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice} `;
        msg.style.backgroundColor="green";
    }else{
       compScore++;
       compScorePara.innerText=compScore
       msg.innerText=`You lose. ${compChoice} beats Your ${userChoice} `;
       msg.style.backgroundColor="red";
    }

};

const playGame=(userChoice)=>{
    //to generate comp choice
    const compChoice=genCompChoice();

    if(userChoice === compChoice){
        //Draw game
      drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            //paper,scissors
            userWin = compChoice==="paper" ? false  :true;
        }else if(userChoice==="paper"){
            //rock,scissors
            userWin = compChoice==="scissors" ? false : true;
        }else{
            //rock,paper
            userWin = compChoice==="rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

};

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id");
    playGame(userChoice);
    });   
});
