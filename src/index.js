import "./styles.css";
const X_CLASS = "x";
const CIRCLE_CLASS = "circle";
(() => {
  let isCircleTurn = false;
  const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  const cells = document.querySelectorAll("[data-cell]");
  const board = document.getElementById("app");
  board.classList.add(isCircleTurn ? CIRCLE_CLASS : X_CLASS);
  console.log(cells, board, "cells");
  // cells.forEach(console.log);

  const playYourTurn = (e) => {
    console.log(e.target.dataset, "ella--");
    if (isCircleTurn) {
      e.target.classList.add(CIRCLE_CLASS);
    } else {
      e.target.classList.add(X_CLASS);
    }
  };
  const checkTheWinner = (e) => {
    const turnedChecks = [...cells]
      .filter((cell) =>
        cell.classList.contains(isCircleTurn ? CIRCLE_CLASS : X_CLASS)
      )
      .map((cell) => cell.dataset.cell);
    return WINNING_COMBINATIONS.some((combinations) => {
      return combinations.every((combination) =>
        turnedChecks.includes(String(combination))
      );
    });
  };
  const clickHandler = (e) => {
    if (e.target.dataset.hasOwnProperty("cell")) {
      playYourTurn(e);
      const winner = checkTheWinner();
      if (winner) {
        console.log(`${isCircleTurn ? "Circle" : "Cross"} win`);
      }
      isCircleTurn = !isCircleTurn;
      board.classList.add(isCircleTurn ? CIRCLE_CLASS : X_CLASS);
    }
  };

  board.addEventListener("click", clickHandler);
})();
