function loadBigFoot() {
  const game = document.querySelector(".game");
  const bigfoot = document.querySelector(".bigfoot");
  const scoreElement = document.querySelector(".points");
  const timeLeft = document.querySelector("#timer");
  let score = 0;
  game.style.visibility = "visible";
  startGame.style.display = "none";
  let currentTime = timeLeft.textContent;

  bigfoot.src = "/images/bigfoot.png";
  moveBigFoot();
  bigfoot.addEventListener("click", updateScore);

  console.log(timeLeft);

  //to move big foot
  function moveBigFoot() {
    let x = Math.floor(Math.random() * 300);
    let y = Math.floor(Math.random() * 500);
    bigfoot.setAttribute("style", `margin: ${y}px 0px 0px ${y}px`);
  }

  // bigfoot.setAttribute("style", `margin-top: ${y}px`);
  console.log("inside loop");

  //to update position and score
  function updateScore() {
    score++;
    moveBigFoot();
    scoreElement.innerHTML = score;
  }

  //for countdown
  function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;
    if (currentTime === 0) {
      clearInterval(timeId);
      checkWinner();
    }
  }
  function checkWinner() {
    console.log(score);
    if (score >= 5) {
      alert(`You win! Your final score is ${score}`);
    } else {
      alert("Better luck next time");
    }
  }

  let timeId = setInterval(countDown, 1000);
}

const startGame = document.querySelector(".start-game");
const start = document.querySelector(".start");
start.addEventListener("click", loadBigFoot);
