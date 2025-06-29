// if else-if  else switch

let loggedIn = true;
let admin = false;

if (loggedIn && admin) {
    console.log("Welcome back!");
}else if (admin) {
    console.log("Welcome to our site!");
}
else {
    console.log("Please log in.");
}


// switch case

let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
        break;

}


// Practice: Student grade logic

function getGrade (score){
    if (score <= 100 && score >= 90) {
        return "A+";
    }else if (score < 90 && score >= 80){
        return "B";
    }else if (score < 80 && score >= 70){
        return "C";
    }else if (score < 70 && score >= 60){
        return "D";
    }else if (score < 60 && score >= 50){
        return "E";
    }else if (score > 0 && score < 32) {
        return  "F";
    }else {
       return "💀 Invalid score";
    }
}

getGrade(24);



// Practice : Rock Paper Scissors

function playRPS(player1, player2) {
    if (player1 === "rock" && player2 === "scissors") {
        return "Player 1 wins!";
    }
    if (player1 === "secissors" && player2 === "rock") {
        return "Player 2 wins!";
    }

    if (player1 === "paper" && palyer2 === "rock") {
        return "Player 1 wins!";
    }

    if (player1 === "rock" && player2 === "paper") {
        return "Player 2 wins!";
    }

    if (player1 === player2) {
        return "It's a tie!";
    }
}

// efficient write code
function rps(user , computer){
    if (user === computer) {
        return "Draw";
    }
    if (user === "rock" && computer === "seissors") return "User wins";
    if (user === "secissors" && computer === "paper") return "user wins";
    if (user === "paper" && computer === "rock") return "User wins";

    return "computer wins";
}

playRPS("rock", "paper");


