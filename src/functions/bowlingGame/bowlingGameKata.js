//https://kata-log.rocks/bowling-game-kata

import { Game } from "./game.js";

const newGame = new Game();

//test 1
newGame.roll(10);
newGame.roll(10);
newGame.roll(10);
newGame.roll(10);
newGame.roll(1);
newGame.roll(9);
newGame.roll(1);
newGame.roll(2);
newGame.roll(5);
newGame.roll(5);
newGame.roll(2);
newGame.roll(5);
newGame.roll(1);
newGame.roll(5);
newGame.roll(10);
newGame.roll(10);
newGame.roll(5);
console.log(newGame.score())