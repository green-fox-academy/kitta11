import { Player } from "./player";
import { Game } from "./game";

console.log('                                                  ');
console.log('*** DARTS GAME OF THE FAMOUS DISNEY PRINCESSES ***');
let myFirstGame: Game = new Game();
myFirstGame.startGame()
console.log('                                                  ');
console.log('*** BASIC GAME INFO ***');
myFirstGame.getGameInfo()
console.log('*** LETS PICK RANDOMLY THE PLAYERS ***');
myFirstGame.getPlayersCard()
console.log('                                                  ');
console.log('*** GAME TIME ***');
myFirstGame.play();
console.log('*** THE WINNER ***');
console.log(myFirstGame.getWinner());


