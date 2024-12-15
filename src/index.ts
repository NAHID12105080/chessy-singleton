// import { games } from "./store";
import { GameManager } from "./store";
import { startLogger } from "./logger";

startLogger();

// setInterval(() => {
//   games.push({
//     id: Math.random().toString(),
//     whitePlayerName: "Alice",
//     blackPlayerName: "Bob",
//     moves: [],
//   });
// }, 1000);
export const gameManager = new GameManager();

setInterval(() => {
  gameManager.addGame(Math.random().toString());
}, 1000);
