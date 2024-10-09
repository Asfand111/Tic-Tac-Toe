let boxes = document.querySelectorAll(".box")
let btn = document.querySelector(".btn")
let msgcon = document.querySelector(".msg-container")
let msg = document.querySelector(".msg")
let btn2 = document.querySelector(".btn2")

let isXTurn = true

const winpattern = [
    [0, 1, 2],
    [1, 4, 7],
    [0, 4, 8],
    [2, 5, 8],
    [0, 3, 6],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
  ];
  const resetGame = () => {
    isXTurn = true;
    enableBoxes();
    msgcon.classList.add("hide")
  }
  boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked")
        if (isXTurn) {
            box.innerText = "X";
            isXTurn = false;
          } else {
            box.innerText = "O";
            isXTurn = true;
          }
          box.disabled = true
          checkwinner();
          
        })
})
let showwinner = (winner) => {
  msg.innerText = `Congratulation The Winner is"${winner}"`
  msgcon.classList.remove("hide")
  disableBoxes();
}
const disableBoxes = () => {
  for(let box of boxes){
    box.disabled = true
  }
}
const enableBoxes = () => {
  for(let box of boxes){
    box.disabled = false
    box.innerText = "";
  }
}
checkwinner = () => {
  for (let pattern of winpattern){
    let posVal0 = boxes[pattern[0]].innerText
    let posVal1 = boxes[pattern[1]].innerText
    let posVal2 = boxes[pattern[2]].innerText
    if(posVal0 != "" && posVal1 != "" && posVal2 != ""){
      if(posVal0 === posVal1 && posVal1 === posVal2 ){
        // console.log("winner", posVal1)
        showwinner(posVal1);
      }
    }
    
  }
}
btn2.addEventListener("click", resetGame)
btn.addEventListener("click", resetGame)
