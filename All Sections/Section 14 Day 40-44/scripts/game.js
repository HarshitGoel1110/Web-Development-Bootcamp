function startNewGame(){
  if(!players[0].name || !players[1].name){
    alert("Please provide name for both the Players");
    return;
  }
  gameAreaElement.style.display = 'block';
  activePlayerNameElement.textContent = players[activePlayer].name;
}

function switchPlayer(){
  activePlayer = (activePlayer+1)%2;
  activePlayerNameElement.textContent = players[activePlayer].name;
}

function selectGameField(event){
  if(event.target.classList.contains("disabled")){
    alert("This box is already filled");
    return;
  }
  event.target.textContent = players[activePlayer].symbol;
  event.target.classList.add("disabled");

  const row = Math.floor((+event.target.dataset.fieldid)/3);
  const col = (+event.target.dataset.fieldid)%3;
  gameData[row][col] = activePlayer+1;

  let winnerId = checkForGameOver();
  // console.log(winnerId);
  if(winnerId !== 0)
    endGame(winnerId);

  currentRound++;
  switchPlayer();
}

function checkForGameOver(){

  for(let i = 0;i<3;i++){
    if(gameData[i][0]>0 && gameData[i][0] === gameData[i][1] && gameData[i][1] === gameData[i][2])
      return gameData[i][0];
  }

  for(let j=0;j<3;j++){
    if(gameData[0][j]>0 && gameData[0][j] === gameData[1][j] && gameData[1][j] === gameData[2][j])
      return gameData[0][j];
  }

  if(gameData[0][0]>0 && gameData[0][0] === gameData[1][1] && gameData[1][1] === gameData[2][2])
    return gameData[0][0];

  if(gameData[0][2]>0 && gameData[0][2] === gameData[1][1] && gameData[1][1] === gameData[2][0])
    return gameData[0][2];

  if(currentRound == 9)
    return -1;

  return 0;

}

function endGame(winnerId){
  gameOverElement.style.display = 'block';
  if(winnerId>0){
    const winnerName = players[winnerId].name;
    gameOverElement.firstElementChild.firstElementChild.textContent = winnerName;
  }
  else{
    gameAreaElement.firstElementChild.textContent = "It's a draw";
  }
}