interface Game {
  id: string;
  whitePlayerName: string;
  blackPlayerName: string;
  moves: string[];
}

// export const games: Game[] = [];

export class GameManager {
  games: Game[] = [];
  constructor() {
    this.games = [];
  }
  addMove(gameId: string, move: string) {
    const game = this.games.find((game) => game.id === gameId);
    if (game) {
      game.moves.push(move);
    }
  }
  addGame(gameId: string) {
    const game = {
      id: Math.random().toString(),
      whitePlayerName: "Alice",
      blackPlayerName: "Bob",
      moves: [],
    };
    this.games.push(game);
  }
  log() {
    console.log(this.games);
  }
}
