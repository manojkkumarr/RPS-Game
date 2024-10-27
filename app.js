let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const generateComputerChoice = () => {
    let options = ["rock","paper","scissors"];
    const randInd = Math.floor(Math.random() * 3);
    return options[randInd];
};

const drawGame = () => {
    console.log("Its a draw");
    msg.innerText = "It's a Draw";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, computerChoice) => {
    if (userWin) {
        msg.innerText = `You Win! ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        userScorePara.innerText = userScore;
    } else {
        msg.innerText = `You Lose... ${computerChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        compScorePara.innerText = compScore;
    }
};

const playGame = (userChoice) => {
    const computerChoice = generateComputerChoice();

    if (userChoice === computerChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice ==="rock") {
            userWin = computerChoice === "paper" ? false : true;
        } else if (userChoice ==="scissors") {
            userWin = computerChoice === "rock" ? false : true;
        } else if (userChoice ==="paper") {
            userWin = computerChoice === "scissors"? false : true;
    }
    showWinner(userWin, userChoice,computerChoice);
}
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});