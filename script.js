let turn = "x";
let images = document.querySelectorAll("img");
let winMessage = document.querySelector("[win-message]");
let restartBtn = document.getElementById("restart");
let winContainer = document.querySelector(".win-message");
let boxes = [];
function game(id) {
  let img = document.querySelector(`#${id} img`);
  let element = document.getElementById(id);
  if (turn === "x" && !element.classList.contains("clicked")) {
    element.classList.add("clicked");
    element.classList.add("x");
    images.forEach((ele) => {
      if (!ele.parentElement.classList.contains("clicked")) {
        ele.src = "letter-o.png";
      }
    });
    img.src = "x-mark-64.png";

    turn = "o";
  } else if (turn === "o" && !element.classList.contains("clicked")) {
    element.classList.add("clicked");
    element.classList.add("o");
    images.forEach((ele) => {
      if (!ele.parentElement.classList.contains("clicked")) {
        ele.src = "x-mark-64.png";
      }
    });
    img.src = "letter-o.png";

    turn = "x";
  }
  winner();
}
function winner() {
  for (let i = 1; i < 10; i++) {
    boxes.push(document.querySelector(`#item${i}`));
  }
  if (
    boxes[0].classList[2] === boxes[1].classList[2] &&
    boxes[1].classList[2] === boxes[2].classList[2] &&
    boxes[1].classList.contains("clicked")
  ) {
    win(boxes[1].classList[2]);
  } else if (
    boxes[0].classList[2] === boxes[3].classList[2] &&
    boxes[3].classList[2] === boxes[6].classList[2] &&
    boxes[0].classList.contains("clicked")
  ) {
    win(boxes[0].classList[2]);
  } else if (
    boxes[3].classList[2] === boxes[4].classList[2] &&
    boxes[4].classList[2] === boxes[5].classList[2] &&
    boxes[3].classList.contains("clicked")
  ) {
    win(boxes[3].classList[2]);
  } else if (
    boxes[1].classList[2] === boxes[4].classList[2] &&
    boxes[4].classList[2] === boxes[7].classList[2] &&
    boxes[4].classList.contains("clicked")
  ) {
    win(boxes[4].classList[2]);
  } else if (
    boxes[2].classList[2] === boxes[5].classList[2] &&
    boxes[5].classList[2] === boxes[8].classList[2] &&
    boxes[2].classList.contains("clicked")
  ) {
    win(boxes[2].classList[2]);
  } else if (
    boxes[6].classList[2] === boxes[7].classList[2] &&
    boxes[7].classList[2] === boxes[8].classList[2] &&
    boxes[6].classList.contains("clicked")
  ) {
    win(boxes[6].classList[2]);
  } else if (
    boxes[0].classList[2] === boxes[4].classList[2] &&
    boxes[4].classList[2] === boxes[8].classList[2] &&
    boxes[8].classList.contains("clicked")
  ) {
    win(boxes[8].classList[2]);
  } else if (
    boxes[2].classList[2] === boxes[4].classList[2] &&
    boxes[4].classList[2] === boxes[6].classList[2] &&
    boxes[6].classList.contains("clicked")
  ) {
    win(boxes[6].classList[2]);
  } else {
    let index = 0;
    boxes.forEach((e) => {
      if (e.classList.contains("clicked")) {
        index++;
      }
    });
    if (index === 81) {
      winContainer.classList.add("show");
      winMessage.innerHTML = "OOPS NO ONE WINS!!";
    }
  }
}

function win(winner) {
  winContainer.classList.add("show");
  winMessage.innerHTML = `${winner.toUpperCase()} WINS!!`;
}
restartBtn.onclick = () => {
  window.location.reload();
};
// End :)
