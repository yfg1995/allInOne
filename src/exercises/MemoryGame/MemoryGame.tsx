import { FC, useState } from "react";

type TCell = {
  row: number;
  col: number;
};

export const MemoryGame: FC<TCell> = () => {
  const [grid, setGrid] = useState([
    [0, 3, 5, 1],
    [1, 2, 2, 4],
    [4, 3, 5, 0],
  ]);

  const [revealedGrid, setRevealedGrid] = useState(
    new Array(grid.length)
      .fill("")
      .map(() => new Array(grid[0].length).fill(false))
  );

  const [previousClick, setPreviousClick] = useState<TCell | undefined>();

  const handleCardClicked = (rowIndex: number, colIndex: number) => {
    if (revealedGrid[rowIndex][colIndex]) return;

    const clickedNumber = grid[rowIndex][colIndex];
    const newRevealedGrid = [...revealedGrid];
    newRevealedGrid[rowIndex][colIndex] = true;
    setRevealedGrid(newRevealedGrid);

    if (previousClick) {
      const previousClickNumber = grid[previousClick.row][previousClick.col];

      if (previousClickNumber !== clickedNumber) {
        // if they don't match, hide them after 1 second
        setTimeout(() => {
          newRevealedGrid[rowIndex][colIndex] = false;

          // hide the first click
          newRevealedGrid[previousClick.row][previousClick.col] = false;
          setRevealedGrid([...newRevealedGrid]);
        }, 1000);
      } else {
        // check if everything has been revealed, then show an alert
        const hasWon = revealedGrid.flat().every((isRevealed) => isRevealed);

        if (hasWon) {
          setTimeout(() => {
            alert("You won!");
          });
        }
      }
      setPreviousClick(undefined);
    } else {
      setPreviousClick({ row: rowIndex, col: colIndex });
    }
  };

  return (
    <div className="flex flex-col gap-2.5">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-2.5">
          {row.map((number, colIndex) => (
            <div
              key={colIndex}
              onClick={() => handleCardClicked(rowIndex, colIndex)}
              className={`flex items-center justify-center bg-slate-500 text-white p-5 w-20 h-20 text-xl font-semibold select-none hover:bg-slate-700 hover:cursor-alias ${
                revealedGrid[rowIndex][colIndex]
                  ? "hover:bg-slate-500 hover:pointer-events-none"
                  : ""
              }`}
            >
              {revealedGrid[rowIndex][colIndex] ? number : ""}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
