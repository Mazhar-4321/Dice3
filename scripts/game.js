
window.onload=function()
{
    firstPlayerName=localStorage["p1_name"];
    secondPlayerName=localStorage["p2_name"];
    totalScore=localStorage["total_score"];
    document
    .getElementById("player1")
    .getElementsByClassName("heading")[0].innerHTML = firstPlayerName;
  document
    .getElementById("player2")
    .getElementsByClassName("heading")[0].innerHTML = secondPlayerName;
    
}
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
document.getElementById("container").removeChild(document.getElementById("chch"));
// document.getElementById("bb").style.display="none";
// document.getElementById("bb1").style.display="none";

}
function resetgamewithothernames()
{
window.open("../index.html");
window.close();
}
function onSubmit(event) {
  event.preventDefault();
  const formData = document.getElementsByTagName("input");
  firstPlayerName = formData[0].value;
  secondPlayerName = formData[1].value;
  totalScore = formData[2].value;
  document.getElementById("form-container").style.display = "none";
  document.getElementById("board-container").style.display = "block";
  document
    .getElementById("player1")
    .getElementsByClassName("heading")[0].innerHTML = firstPlayerName;
  document
    .getElementById("player2")
    .getElementsByClassName("heading")[0].innerHTML = secondPlayerName;
    
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
      
       //document.getElementById("player2").style="visibility:hidden;";
      //  document.getElementById("bb").style.display="inline";
      //  document.getElementById("bb1").style.display="inline";
      //  console.log("inline");
      var div = document.createElement("div");
      div.id="chch";
      var button = document.createElement("BUTTON");
      button.innerHTML="Reset"
      button.id="bb";
      var button1 = document.createElement("BUTTON");
      button1.id="bb1";
      button1.innerHTML="Reset With Name"
      button.onclick=resetgame;
      button1.onclick=resetgamewithothernames;
      div.appendChild(button)
      div.appendChild(button1)
// div.style.width = "100px";
// div.style.height = "100px";
// div.style.background = "red";
// div.style.color = "white";
// div.innerHTML = "Hello";
      document.getElementById("container").appendChild(div);
  }
  if (secondPlayerScore >= totalScore) {
    document.getElementById(
      "player2"
    ).innerHTML += `<div class="winner"></div>`;
    document
      .getElementById("player1")
      .getElementsByTagName("input")[0]
      .setAttribute("disabled", true);
     // document.getElementById("player1").style="visibility:hidden;";
      // document.getElementById("bb").style.display="inline";
      // document.getElementById("bb1").style.display="inline";
      // console.log("inline");
      var div = document.createElement("div");
      div.id="chch";
      var button = document.createElement("BUTTON");
      button.innerHTML="Reset"
      button.id="bb";
      var button1 = document.createElement("BUTTON");
      button1.id="bb1";
      button1.innerHTML="Reset With Name"
      button.onclick=resetgame;
      button1.onclick=resetgamewithothernames;
      div.appendChild(button)
      div.appendChild(button1)
// div.style.width = "100px";
// div.style.height = "100px";
// div.style.background = "red";
// div.style.color = "white";
// div.innerHTML = "Hello";
      document.getElementById("container").appendChild(div);
    }
}
