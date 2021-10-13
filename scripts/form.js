let firstPlayerName = "";
let secondPlayerName = "";
let firstPlayerScore = 0;
let secondPlayerScore = 0;
let totalScore = 10;
function resetgame()
{


document
        .getElementById("player1")
        .getElementsByTagName("input")[0]
        .removeAttribute("disabled");
        var playerNodes = document.getElementById(`player1`);
       
        if (firstPlayerScore >= totalScore) {
        
        document.getElementById("container").removeChild(document.getElementById("container").lastChild);
        document.getElementById("player1").removeChild(document.getElementById("player1").lastChild);
        }else
        {
          document.getElementById("container").removeChild(document.getElementById("container").lastChild);
          document.getElementById("player2").removeChild(document.getElementById("player2").lastChild);
      }
        firstPlayerScore=0;
secondPlayerScore=0;
playerNodes.getElementsByClassName("score")[0].innerHTML =
firstPlayerScore;
playerNodes = document.getElementById(`player2`);
playerNodes.getElementsByClassName("score")[0].innerHTML =
secondPlayerScore;
}
function resetgamewithothernames()
{

}
function onSubmit(event) {
  event.preventDefault();
  const formData = document.getElementsByTagName("input");
  firstPlayerName = formData[0].value;
  secondPlayerName = formData[1].value;
  totalScore = formData[2].value;
  window.open("html/game.html");
  
  localStorage["p1_name"]=firstPlayerName;
  localStorage["p2_name"]=secondPlayerName;
  localStorage["total_score"]=totalScore;
  window.close();
//   document.getElementById("form-container").style.display = "none";
//   document.getElementById("board-container").style.display = "block";
//   document
//     .getElementById("player1")
//     .getElementsByClassName("heading")[0].innerHTML = firstPlayerName;
//   document
//     .getElementById("player2")
//     .getElementsByClassName("heading")[0].innerHTML = secondPlayerName;
    
}

function rollDice(playerIndex) {
  const randomNumber = getRandom();
  const playerNodes = document.getElementById(`player${playerIndex}`);
  playerNodes
    .querySelector(".dice img")
    .setAttribute("src", `../images/dice${randomNumber}.png`);
  switch (playerIndex) {
    case 1:
      firstPlayerScore += randomNumber;
      playerNodes.getElementsByClassName("score")[0].innerHTML =
        firstPlayerScore;
      playerNodes
        .getElementsByTagName("input")[0]
        .setAttribute("disabled", true);
      document
        .getElementById("player2")
        .getElementsByTagName("input")[0]
        .removeAttribute("disabled");
      break;
    case 2:
      secondPlayerScore += randomNumber;
      playerNodes.getElementsByClassName("score")[0].innerHTML =
        secondPlayerScore;
      playerNodes
        .getElementsByTagName("input")[0]
        .setAttribute("disabled", true);
      document
        .getElementById("player1")
        .getElementsByTagName("input")[0]
        .removeAttribute("disabled");
      break;
    default:
      break;
  }
  checkIfWinnerExists();
}

function getRandom() {
  return Math.floor(Math.random() * 6) + 1;
}

function checkIfWinnerExists() {
  console.log(firstPlayerScore);
  if (firstPlayerScore >= totalScore) {
    document.getElementById(
      "player1"
    ).innerHTML += `<div class="winner"></div>`;
    document
      .getElementById("player2")
      .getElementsByTagName("input")[0]
      .setAttribute("disabled", true);
      document
      .getElementById("container").innerHTML+="<div style='display: flex;margin:20px;margin-top:250px; text-align: center;width:100%;flex-direction: column;'><button onclick='resetgame()' style='width:50%;padding:20px;height:50px; color: #ffffff;background: #ff4b2b;border-radius: 5px;padding: 0;cursor: pointer;transition: all 0.4s ease;'>Reset Game</button><br><button onclick='resetgame()' style='width:50%;padding:20px;height:50px; color: #ffffff;background: #ff4b2b;border-radius: 5px;padding: 0;cursor: pointer;transition: all 0.4s ease;'>Reset Game wiTH naMES</button></div>"
       document.getElementById("player2").style="visibility:hidden;";

  }
  if (secondPlayerScore >= totalScore) {
    document.getElementById(
      "player2"
    ).innerHTML += `<div class="winner"></div>`;
    document
      .getElementById("player1")
      .getElementsByTagName("input")[0]
      .setAttribute("disabled", true);
      document
      .getElementById("player1").innerHTML+="<button onclick='resetgame()' style='width:50%;padding:20px;margin:20px;height:50px;color: #ffffff;background: #ff4b2b;border-radius: 5px;padding: 0;cursor: pointer;transition: all 0.4s ease;'>Reset Game</button>"
      document.getElementById("player1").style="visibility:hidden;";
    }
}
