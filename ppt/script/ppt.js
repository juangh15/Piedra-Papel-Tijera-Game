class Game {
    constructor() {
        this.scoreAI = 0;
        this.scorePlayer = 0;
        this.choosedAI = 0;
        this.choosedPlayer = 0;
        this.result = "";
        this.moves = {
            0: "piedra",
            1: "papel",
            2: "tijera"
        }
        this.images = {
            0: "./img/piedra.png",
            1: "./img/papel.png",
            2: "./img/tijera.png",
        }
        this.reset();

    }

    reset() {
        let button1 = document.getElementsByClassName("option");
        for (let item of button1) {
            item.hidden = false;
            if (item.innerHTML === "Nuevo Juego") {
                item.innerHTML = "Reiniciar";
            }
        }

        let cards = document.getElementsByClassName("cardgame");
        for (let card of cards) {
            card.hidden = false;
        }

        document.getElementById("elige").innerHTML = "Elige una: "



        document.getElementById("playerimage").src = "";

        document.getElementById("machineimage").src = "";
        document.getElementById("scoreAI").innerHTML = "Puntos PC: " + this.scoreAI;
        document.getElementById("scorePlayer").innerHTML = "Puntos jugador: " + this.scorePlayer;
        document.getElementById("choosedAI").innerHTML = "";
        document.getElementById("choosedPlayer").innerHTML = "";

        document.getElementById("result").innerHTML = "";


    }

    update() {

        document.getElementById("playerimage").src = this.images[this.choosedPlayer];

        document.getElementById("machineimage").src = this.images[this.choosedAI];
        document.getElementById("scoreAI").innerHTML = "Puntos PC: " + this.scoreAI;
        document.getElementById("scorePlayer").innerHTML = "Puntos jugador: " + this.scorePlayer;
        document.getElementById("choosedAI").innerHTML = "PC elige: " + this.moves[this.choosedAI];
        document.getElementById("choosedPlayer").innerHTML = "Tu eliges: " + this.moves[this.choosedPlayer];

        document.getElementById("result").innerHTML = "Resultado: " + this.result;
    }

    choose() {
        let choose = Math.round(Math.random() * 2);
        return choose;
    }

    round(choosedPlayer) {

        this.choosedPlayer = choosedPlayer;
        this.choosedAI = this.choose();

        console.log("player: " + this.moves[choosedPlayer]);
        console.log("AI: " + this.moves[this.choosedAI]);

        this.result = this.check(this.choosedAI, choosedPlayer);
        this.update();

    }

    check(choosedAI, choosedPlayer) {
        if (choosedAI === choosedPlayer) {
            return "Empate!";
        } else if ((choosedPlayer === 0) && (choosedAI === 2)) {
            this.pointPlayer();
            return "Ganaste";
        } else if ((choosedPlayer === 1) && (choosedAI === 0)) {
            this.pointPlayer();
            return "Ganaste";
        } else if ((choosedPlayer === 2) && (choosedAI === 1)) {
            this.pointPlayer();
            return "Ganaste";
        } else {
            this.pointAI();
            return "Perdiste";
        }
    }

    pointPlayer() {
        this.scorePlayer += 1;
        this.update();
    }

    pointAI() {
        this.scoreAI += 1;
        this.update();
    }


};
var gameActual;
function restart() {
    gameActual = new Game();
}
