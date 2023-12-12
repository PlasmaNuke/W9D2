import Game from "../ttt_node/game.js";
import View from "./ttt-view.js";

document.addEventListener("DOMContentLoaded", () => {
  const game = new Game();
  const figure = document.querySelector(".ttt");
  new View(game, figure);
});