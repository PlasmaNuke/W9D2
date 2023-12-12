import Game from "../ttt_node/game.js"

class View {
  constructor(game, el) {
    this.game = game;
    this.container = el;
    this.setupBoard();
    document.addEventListener("click", this.handleClick.bind(this));
    }
  
  setupBoard() {
    const grid = document.createElement("ul");

    for(let row = 0; row < 3; row++) {
      for(let col = 0; col < 3; col++) {
        let gridSquare = document.createElement("li");
        gridSquare.setAttribute("data-row", row);
        gridSquare.setAttribute("data-col", col);
        grid.appendChild(gridSquare);
      }
    }
    this.container.append(grid);
  }
  
  handleClick(e) {
    if (e.target.nodeName === "LI") {
      this.makeMove(e.target);
    }
  }

  makeMove(square) {
    let mark = this.game.currentPlayer;
    let pos = [square.getAttribute("data-row"), square.getAttribute("data-col")];

    if (this.game.board.isEmptyPos(pos)) {
      this.game.playMove(pos);
      square.classList.add("occupied")
      if (mark === "x") {
        square.classList.add("X")
      } else {
        square.classList.add("O")
      }
      square.innerText = mark;
    } else {
      alert('Invalid move');
    }

    if (this.game.board.isOver()) this.handleGameOver();
  }
  
  handleGameOver() {
    this.container.append(`Player ${this.game.winner()} wins!`);
  }
}

export default View;