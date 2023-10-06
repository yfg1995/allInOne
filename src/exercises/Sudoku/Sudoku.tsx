import { stringify } from "querystring";
import { FC, useState } from "react";

// ne radi server

export const Sudoku: FC = () => {
  const [grid, setGrid] = useState<number[][]>([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  const setGridValue = (rowIndex: number, colIndex: number, value: number) => {
    const newGrid = [...grid];
    newGrid[rowIndex][colIndex] = value;
    setGrid(newGrid);
  };

  const solveSudoku = () => {
    // curl -H 'Content-Type: application/json' -X POST -d '{"sudoku":["9715..842..69...1....8.2..95.....79...76.83...28.....57..1.5....4...91..819..7254"]}' http://127.0.0.1:5000
    // HOST=localhost PORT=5000 npx cors-proxy-server
    fetch("http://0.0.0.0:9090/http://127.0.0.1:5000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sudoku: [
          "9715..842..69...1....8.2..95.....79...76.83...28.....57..1.5....4...91..819..7254",
        ],
      }),
    });
  };

  return (
    <>
      <div className="grid grid-cols-9 w-96">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="row  ">
            {row.map((number, colIndex) => (
              <div key={colIndex} className="w-10">
                <input
                  className="w-10 border border-black"
                  type="number"
                  value={number}
                  onChange={(e) =>
                    setGridValue(rowIndex, colIndex, parseInt(e.target.value))
                  }
                />
              </div>
            ))}
          </div>
        ))}
      </div>
      <button onClick={solveSudoku}>Solve</button>
    </>
  );
};
