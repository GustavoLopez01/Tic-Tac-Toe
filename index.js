const contentGame = document.querySelector(".content-game");
let player = "X";
let gameArr = ["", "", "", "", "", "", "", ""];
let flag = "player";
let posComputer = -1;

// Functions

const getPosition = (e) => {
  let existeClase = e.target.classList.contains("border-5");

  const tableroLleno = gameArr.filter((elemento) => elemento !== "");

  if (existeClase) {
    if (flag === "player") {
      gameArr[e.target.id] = player;
      paintPlayerHTML(e, player);
      if (validateFields()) return;
      flag = "computer";
      player = "O";
    }

    // Verifico la longitud de mi arreglo si ya esta lleno pero sigue entrando a la condicion anterior significa que fue empate
    if (tableroLleno.length < 8) {
      // Espera un segundo antes de que tire la maquina
      setTimeout(() => {
        turnComputer(e);
      }, 1000);
    } else {
      player = "";
      showAlertWinner();
      return;
    }
  }
};

// Turno de tirar a la computadora
function turnComputer(e) {
  // Realiza un ciclo por si la posicion que cae ya esta ocupada por el jugador
  while (posComputer === -1) {
    posComputer = generateNumberComputer();
    if (posComputer !== -1) {
      gameArr[posComputer] = player;
      const div = document.getElementById(JSON.stringify(posComputer));
      div.classList.add("selected");
      div.disabled = true;
      div.textContent = player;
      if (validateFields()) {
        return;
      }
      flag = "player";
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
    e.target.disabled = true;
  }
};

const validateFields = () => {
  switch (flag) {
    case "player":
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
      } else if (
        gameArr[1] === player &&
        gameArr[4] === player &&
        gameArr[7] === player
      ) {
        showAlertWinner();
        return true;
      } else if (
        gameArr[6] === player &&
        gameArr[7] === player &&
        gameArr[8] === player
      ) {
        showAlertWinner();
        return true;
      }

      break;

    case "computer":
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
      } else if (
        gameArr[1] === player &&
        gameArr[4] === player &&
        gameArr[7] === player
      ) {
        showAlertWinner();
        return true;
      } else if (
        gameArr[6] === player &&
        gameArr[7] === player &&
        gameArr[8] === player
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
  contentGame.style.pointerEvents = "none";
  contentGame.style.opacity = 0.4;
  if (player === "X") {
    iziToast.show({
      title: "Felicidades",
      message: "Tienes mas habilidad que una maquina.",
      color: "blue",
    });
  } else if (player === "O") {
    iziToast.show({
      title: "Lastima :(",
      message: "La maquina te gano suerte para la proxima.",
      color: "red",
    });
  } else {
    iziToast.show({
      title: "Empate.!",
      message: "Ninguno fue el ganador pero vuelve a intentarlo :)",
      color: "green",
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
    message: "Bienvenido al clasíco juego del gato :)",
    color: "blue",
  });

  gameArr.filter((ele) => ele !== "");
});
