

let computerChoice;


function getComputerChoice(){
    let randomNumber=Math.floor((Math.random())*3+1);
    console.log(randomNumber);
    if(randomNumber==1){
        computerChoice='ROCK'
    }
    else if(randomNumber==2){
        computerChoice='SCISSOR'
    }
    else if(randomNumber==3){
        computerChoice='PAPER'
    }
    return computerChoice;
}


let computerScore=0;
 let userScore=0;

function playRound(computerChoice,userChoice){
  
    if(userChoice=='ROCK' && computerChoice=='SCISSOR'){
        console.log("You WIN! ROCK beats SCISSOR");
        userScore++;
    }
    else if(userChoice=='SCISSOR' && computerChoice=='PAPER'){

        console.log("You WIN! SCISSOR beats PAPER");
        userScore++;
    }
    else if(userChoice=='PAPER' && computerChoice=="ROCK"){
        console.log("You WIN! PAPER beats ROCK");
        userScore++;
    }
    else if(computerChoice=='ROCK' && userChoice=='SCISSOR'){
        console.log("You LOSE! ROCK beats SCISSOR");
        computerScore++;
    }
    else if(computerChoice=='SCISSOR' && userChoice=='PAPER'){
        console.log("You LOSE! SCISSOR beats PAPER");
        computerScore++;
    }
    else if(computerChoice=='PAPER' && userChoice=="ROCK"){
        console.log("You LOSE! PAPER beats ROCK");
    }
    else if(computerChoice==userChoice){
        console.log("Its tie");
        computerScore++;
    }
    
}

function game(){
    

    for(let i=0;i<5;i++){
     computerChoice= getComputerChoice();
     console.log(computerChoice);
     let answer = (prompt("Please enter the number you would like to FizzBuzz up to: "));
     let userChoice=answer.toUpperCase();
     console.log(userChoice);
     playRound(computerChoice,userChoice);


    }

    console.log("computer score is "+computerScore);
    console.log("User score is "+userScore);

    if(computerScore>userScore){
        console.log('******Computer won the Game***');
        
    }
    else if(userScore>computerScore){
        console.log('******User won the Game***');
    }
    else{
        console.log('******its Tie Game***');
    }
    
}


game();