const accepter = document.getElementById("accepter");
const ignorer = document.getElementById("ignorer");
var diceGameText;
var diceGame;

accepter.onclick = () => {
    accepter.remove();
    ignorer.remove();
    diceGameText = document.createElement("p");
    diceGameText.innerHTML = "Vous devez avoir un nombre + grand que 3 pour gagner! :D";
    diceGameText.style.fontSize = "2rem";
    diceGameText.style.fontFamily = "Arial";
    diceGameText.style.color = "white";
    diceGameText.style.textShadow = "1px 1px 1px cyan, 1px 1px 5px black";

    diceGame = document.createElement("button");
    diceGame.innerHTML = "GAMBLE!!!";
    diceGame.style.marginBottom = "120px";
    diceGame.style.padding = "20px";
    diceGame.style.borderRadius = "10px";
    diceGame.style.transition = "all .5s";
    diceGame.onmouseover = () => {
        diceGame.style.color = "red";
        diceGame.style.boxShadow = "1px 1px 1px red, 1px 1px 5px red";
        diceGame.style.transform = "scale(1.5)";
        diceGame.style.backgroundColor = "black";
        diceGame.style.fontSize = "2rem";
        diceGame.style.letterSpacing = "10px";
    }
    diceGame.onmouseleave = () => {
        diceGame.style.color = "black";
        diceGame.style.transform = "scale(1)";
        diceGame.style.backgroundColor = "white";
        diceGame.style.boxShadow = "";
         diceGame.style.fontSize = "1rem";
        diceGame.style.letterSpacing = "";

    }

    diceGame.onclick = () => {
        var randomNumber = parseInt(Math.random() * 6) + 1;
        alert("Vous avez eu un " + randomNumber);
        if (randomNumber < 4) {
            alert("Vous avez perdu vos vêtements!! :((");
            window.location.href = "jeu-truque.html";
        }
        else {
            alert("Vous perdez QUAND MÊME vos vêtemens!! LE COCHON EST INJUSTE!    >:(");
            window.location.href = "jeu-truque.html";
        }
    }
    document.body.append(diceGameText, diceGame);
}


