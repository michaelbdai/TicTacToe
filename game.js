





export const Game = () => {
  this.board =
    [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];

}

export const showGame = Game.prototype.showBoard = () => {
  console.log(this.board);
};



