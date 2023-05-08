const contentGame = document.querySelector(".content-game");
let player = "X";
let gameArr = ["", "", "", "", "", "", "", ""];
let flag = true;
let posComputer = -1;

// Functions

const getPosition = (e) => {
  let a = e.target.classList.contains("border-5");

  if (a) {
    if (flag) {
      gameArr[e.target.id] = player;
      paintPlayerHTML(e, player);
      if (validateFields()) return;
      flag = false;
      player = "O";
    }
    // Espera un segundo antes de que tire la maquina
    setTimeout(() => {
      turnComputer();
    }, 1000);
  }
};

// Turno de tirar a la computadora
function turnComputer() {
  // Realiza un ciclo por si la posicion que cae ya esta ocupada por el jugador
  while (posComputer === -1) {
    posComputer = generateNumberComputer();
    if (posComputer !== -1) {
      gameArr[posComputer] = player;
      console.log("poswhile", posComputer);
      const divCat = document.getElementById(JSON.stringify(posComputer));
      divCat.textContent = player;
      if (validateFields()) return;
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
      if (
        gameArr[0] === player &&
        gameArr[1] === player &&
        gameArr[2] === player
      ) {
        showAlertWinner();
        return true;
      } else if (
        gameArr[0] === player &&
        gameArr[3] === player &&
        gameArr[6] === player
      ) {
        showAlertWinner();
        return true;
      } else if (
        gameArr[0] === player &&
        gameArr[4] === player &&
        gameArr[8] === player
      ) {
        showAlertWinner();
        return true;
      } else if (
        gameArr[2] === player &&
        gameArr[5] === player &&
        gameArr[8] === player
      ) {
        showAlertWinner();
        return true;
      } else if (
        gameArr[2] === player &&
        gameArr[4] === player &&
        gameArr[6] === player
      ) {
        showAlertWinner();
        return true;
      }

      break;

    case false:
      if (
        gameArr[0] === player &&
        gameArr[1] === player &&
        gameArr[2] === player
      ) {
        showAlertWinner();
        return true;
      } else if (
        gameArr[0] === player &&
        gameArr[3] === player &&
        gameArr[6] === player
      ) {
        showAlertWinner();
        return true;
      } else if (
        gameArr[0] === player &&
        gameArr[4] === player &&
        gameArr[8] === player
      ) {
        showAlertWinner();
        return true;
      } else if (
        gameArr[2] === player &&
        gameArr[5] === player &&
        gameArr[8] === player
      ) {
        showAlertWinner();
        return true;
      } else if (
        gameArr[2] === player &&
        gameArr[4] === player &&
        gameArr[6] === player
      ) {
        showAlertWinner();
        return true;
      }
      break;

    default:
      break;
  }
};

const showAlertWinner = () => {
  contentGame.style.pointerEvents = 'none';
  contentGame.style.opacity = 0.4;
  if (player === "X") {
    iziToast.show({
      title: "Felicidades",
      message: "le ganaste a la maquina.",
      color: "blue",
    });
  } else {
    iziToast.show({
      title: "Lastima :(",
      message: "La maquina te gano suerte para la proxima.",
      color: "red",
    });
  }

  setTimeout(() => {
    location.reload();
  }, 5000);
};

const generateNumberComputer = () => {
  const validateArr = gameArr.filter((ele) => ele !== "");
  if (validateArr.length === 8) return;

  let posRandomComputer = Math.round(Math.random() * 7);
  if (gameArr[posRandomComputer].length === 0) {
    return posRandomComputer;
  } else {
    return -1;
  }
};

// Listeners
contentGame.addEventListener("click", getPosition);

document.addEventListener("DOMContentLoaded", (e) => {
  iziToast.show({
    title: "Holaa.!",
    message:
      "Bienvenido al clasíco juego del gato :)",
    color: "blue",
  });

  gameArr.filter((ele) => ele !== "");
});
