// import { games } from "./store";
import { gameManager, GameManager } from "./store";
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

setInterval(() => {
  gameManager.addGame(Math.random().toString());
}, 1000);
