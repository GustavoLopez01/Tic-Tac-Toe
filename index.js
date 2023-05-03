
const contentGame = document.querySelector('.content-game');
const player = 'X', computer = 'O';
let gameArr = [];
let flag = true;
// Functions

const getPosition = (e) => {

    //console.log(Math.floor(Math.random() * 9));

    if(flag){
        gameArr[e.target.id] = player;      
        paintPlayerHTML(e, player); 
        flag = false;
    }else{
        
        gameArr[e.target.id] = computer;
        paintPlayerHTML(e, computer);  
        flag = true;
    }

}

const paintPlayerHTML = (e, playerOrComputer) => {

    const divHTML = e.target.textContent;
    console.log(gameArr);
    console.log(e.target);
    divHTML.textContent = playerOrComputer;
}






// Listeners

contentGame.addEventListener('click', getPosition);