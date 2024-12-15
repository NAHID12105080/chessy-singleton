//don't create a new instance of GameManager every time. as it will create a new instance of GameManager every time and the games array will be empty

import { gameManager } from "./store";

// const gameManager = new GameManager();
export function startLogger() {
  setInterval(() => {
    console.log(gameManager.log());
  }, 5000);
}
