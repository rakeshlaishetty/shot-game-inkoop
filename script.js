


    // getting DOM From Index Values 
    let player1 = document.getElementById("player1");
    let player2 = document.getElementById("player2");

// Asigning a Player Default Score
var player1_score = 100;
var player2_score = 100;

// window Load call back function initialization
window.addEventListener("load",init)

// creayte function initailazation start and set the values default
function init(){
// Setting Local Storage values default values and zeros
localStorage.setItem("round", 1);
localStorage.setItem("player1_wins",0 );
localStorage.setItem("player2_wins",0 );
var Mine = localStorage.getItem("round")
var round_board = document.getElementById("round")
round_board.innerHTML = "" + Mine;



}



// create function Shoot and start game
function shoot(player1_score,player2_score,player1_wins,player2_wins){
        
    // Getting Values from LocalStorage
    var Total_rounds = localStorage.getItem("round")
    var player1_final_wins = localStorage.getItem("player1_wins")
    var player2_final_wins = localStorage.getItem("player2_wins")

    
    var round = localStorage.getItem("round"); 
    // localStorage.setItem("round",round)
    
    // Assigning the score to the Players
    var player1_scores_board = document.getElementById("player1-score");

    var player2_score_board = document.getElementById("player2-score");
    var round_board = document.getElementById("round")
    var player_1_wins = document.getElementById("player_1_wins");
    var player_2_wins = document.getElementById("player_2_wins");
    var final_won = document.getElementById("final_won");
    final_won.innerHTML = "";
    // Adding Scores To The Players 
    player1_scores_board.innerHTML = "Health "+ this.player1_score;
    
    player2_score_board.innerHTML = "Health " + this.player2_score;
    round_board.innerHTML = " "+ round;
    player_1_wins.innerHTML = player1_final_wins; 
    player_2_wins.innerHTML = player2_final_wins; 
    


    // Adding Randm Number shoot Between 1 - 5
    let player1_shooting_number = Math.floor(Math.random() * 6);
    let player2_shooting_number = Math.floor(Math.random() * 6);
    
    
    // Set player score in local storage
    
    this.player1_score = this.player1_score - player1_shooting_number;
    this.player2_score = this.player2_score - player2_shooting_number;

    // get Rounds from LocalStorage

    // names[0] = prompt("New member name?");
    // localStorage.setItem("names", JSON.stringify(names));    
    // Conditional Values check whether score is 0 or not 
    if(this.player1_score == 0 || this.player1_score <= 0){
        var round = localStorage.getItem("round")
        
        console.log("Player1 Lose")
        round = Number(round) + 1;
        localStorage.setItem("round",round)
        player2_final_wins = Number(player2_final_wins) + 1;
        
        localStorage.setItem("player2_wins",player2_final_wins)
        playerupdate()
        
    }else if(this.player2_score == 0 || this.player2_score <= 0 ){
        var round = localStorage.getItem("round")
        console.log("player2 Lose")
        round = Number(round) + 1;
        localStorage.setItem("round",round)
        player1_final_wins = Number(player1_final_wins) + 1;
        localStorage.setItem("player1_wins",player1_final_wins)
            playerupdate()
            
    }


    // // Condition check the total rounds if total rounds complete then 
    // it will be terminate and create New Game and check the Player's
    //  wins in Inside cndition
if(Total_rounds>5){
    if(player1_final_wins>player2_final_wins){
        final_won.innerHTML = "Player 1 Won The Match";
        // final_won.style.display.visibility = "visible";
        // default call function initiate new Game
        init()
    }else if(player1_final_wins<player2_final_wins){
        // final_won.style.display.visibility = "visible";
        final_won.innerHTML = "Player 2 Won The Match";
        // default call function initiate new Game
        init()
    }
    
}
    

    // console.log("ROUND IS: " ,round)
    
    
// Update the Player score in after decalred wins

    function playerupdate(){
        this.player1_score = 100;
        this.player2_score = 100;
        console.log(round)

    }    
    
     
    
}
