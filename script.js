const squares = document.getElementsByClassName("squares");
const xGamer = document.getElementsByClassName("xCoins")[0];
const yGamer = document.getElementsByClassName("yCoins")[0];
const btn = document.getElementsByClassName("restart")[0];
let count = 0;
let Xcoins = [];
let Ocoins = [];

let coresX= 0;
let coresY = 0;


const winningCombinations = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // Rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // Columns
  [1, 5, 9], [3, 5, 7]             // Diagonals
];

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', function create() {
    if (count % 2 === 0 && squares[i].childElementCount === 0) {
      let crestik = document.createElement("div");
      crestik.setAttribute("class", "crestik");
      crestik.style.display="block";
      squares[i].append(crestik);
      count++;
      Xcoins.push(+squares[i].id);
      checkWinner(Xcoins, "X");
      Tie();
     
    } else if (count % 2 === 1 && squares[i].childElementCount === 0) {
      let nolik = document.createElement("div");
      nolik.setAttribute("class", "nolik");
      nolik.style.display="block";
      squares[i].append(nolik);
      count--;
      Ocoins.push(+squares[i].id);
      checkWinner(Ocoins, "O");
      Tie();
    
    }
  });
}

function checkWinner(coins, player) {
 
  for (const combination of winningCombinations) {

    if (combination.every((num) => coins.includes(num))) {
      alert(`${player} is the winner!`);
      resetGame();
      if(player=="X"){
        coresX+=1;
        xGamer.innerHTML= coresX;
      }else {
        coresY+=1;
        yGamer.innerHTML= coresY;
      }

    }
  }

}
function resetGame() {
  Xcoins = [];
  Ocoins = [];
  count = 0;

  for (let i = 0; i < squares.length; i++) {
    squares[i].innerHTML = "";
  } 
}
function Tie(){
  let some = 0;
  for(let i=0; i<squares.length; i++){
      some+=squares[i].childElementCount;
      if(some===9){
          alert("Your game is TIE!");
          resetGame();
      }
  }
}


btn.addEventListener('click', ()=>{
  resetGame();
  coresX=0;
  xGamer.innerHTML= coresX;
  coresY=0;
  yGamer.innerHTML= coresY;
})