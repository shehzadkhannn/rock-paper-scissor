let userScor = 0;
let comScor = 0;
let choice = document.querySelectorAll(".image");
let msg = document.querySelector("#msg");
let comcsorpara = document.querySelector(".com-scor");
let userscorpara = document.querySelector(".user-scor");

let gencomchoice = () => {
    let option = ["rock", "paper", "scissor"];
    let randomidx = Math.floor(Math.random() * 3);
    return option[randomidx];
}
let drawgame = () => {
    msg.innerText = "game was draw play again!";
    msg.style.backgroundColor = "darkcyan"
}

let playgame = (userchoice) => {
    let comchoice = gencomchoice();
    if (userchoice === comchoice) {
        //draw game
        drawgame();
        return;
    } else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = comchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userwin = comchoice === "scissor" ? false : true;
        } else {
            userwin = comchoice === "rock" ? false : true;
        }
        showwinner(userwin, userchoice, comchoice);
    }
}
choice.forEach((choice) => {

    let userchoice = choice.getAttribute("id");
    choice.addEventListener("click", () => {

        playgame(userchoice);

    })
})
let showwinner = (userwin, userchoice, comchoice) => {
    if (userwin) {
        userScor++;
        userscorpara.innerText = userScor;
        msg.innerText = `you win! your ${userchoice} beats ${comchoice}`;
        msg.style.backgroundColor = "green";
    } else {
        comScor++;
        comcsorpara.innerText = comScor;
        msg.innerText = `you lose ${comchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}
