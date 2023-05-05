const contentGame = document.querySelector(".content-game");
let player = "X";
let gameArr = ["", "", "", "", "", "", "", ""];
let flag = true;
let posComputer = -1;


// Functions

const getPosition = (e) => {
  if (flag) {
    gameArr[e.target.id] = player;
    paintPlayerHTML(e, player);
    validateFields();
    flag = false;
    player = "O";
  }

  // Espera un segundo antes de que tire la maquina
  setTimeout(() => {
    turnComputer();
  }, 1000);

};

// Turno de tirar a la computadora
function turnComputer() {

  // Realiza un ciclo por si la posicion que cae ya esta ocupada por el jugador
  while (posComputer === -1) {
    posComputer = generateNumberComputer();
    if (posComputer !== -1) {
      gameArr[posComputer] = player;
      const divCat = document.getElementById(JSON.stringify(posComputer));
      divCat.textContent = player;
      validateFields();
      flag = true;
      player = "X";
      posComputer = -1;
      break;
    }
  }
}

// Pinta X y O en la vista 
const paintPlayerHTML = (e, playerOrComputer) => {
  if (!e.target.classList.contains("selected")) {
    e.target.textContent = playerOrComputer;
    e.target.classList.add("selected");
  }
};

const validateFields = () => {
  switch (flag) {
    case true:
      console.log('true');
      if (
        gameArr[0] === player &&
        gameArr[1] === player &&
        gameArr[2] === player
      ) {
        alert(`Ganaste ${player}`);
      } else if (
        gameArr[0] === player &&
        gameArr[3] === player &&
        gameArr[6] === player
      ) {
        alert(`Ganaste ${player}`);
      } else if (
        gameArr[0] === player &&
        gameArr[4] === player &&
        gameArr[8] === player
      ) {
        alert(`Ganaste ${player}`);
      } else if (
        gameArr[2] === player &&
        gameArr[5] === player &&
        gameArr[8] === player
      ) {
        alert(`Ganaste ${player}`);
      } else if (
        gameArr[2] === player &&
        gameArr[4] === player &&
        gameArr[6] === player
      ) {
        alert(`Ganaste ${player}`);
      }

      break;

    case false:
      console.log('false');

      if (
        gameArr[0] === player &&
        gameArr[1] === player &&
        gameArr[2] === player
      ) {
        alert(`Ganaste ${player}`);
      } else if (
        gameArr[0] === player &&
        gameArr[3] === player &&
        gameArr[6] === player
      ) {
        alert(`Ganaste ${player}`);
      } else if (
        gameArr[0] === player &&
        gameArr[4] === player &&
        gameArr[8] === player
      ) {
        alert(`Ganaste ${player}`);
      } else if (
        gameArr[2] === player &&
        gameArr[5] === player &&
        gameArr[8] === player
      ) {
        alert(`Ganaste ${player}`);
      } else if (
        gameArr[2] === player &&
        gameArr[4] === player &&
        gameArr[6] === player
      ) {
        alert(`Ganaste ${player}`);
      }
      break;

    default:
      break;
  }
};

const generateNumberComputer = () => {
  let posRandomComputer = Math.round(Math.random() * 7);
  if (gameArr[posRandomComputer].length === 0) {
    return posRandomComputer;
  } else {
    return -1;
  }
};


// Listeners
contentGame.addEventListener("click", getPosition);
