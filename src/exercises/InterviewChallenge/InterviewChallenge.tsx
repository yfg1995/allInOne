import { FC, useEffect, useState } from "react";
import { Button } from "../../components/Button";

export const InterviewChallenge: FC = () => {
  const [itemsInPersonCart, setItemsInPersonCart] = useState(0);
  const [lines, setLines] = useState([[10, 5, 2], [1], [2], [3], [4]]);

  const addPersonToLine = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let leastItemsAmount = 1e9;
    let lineWithLeast: number[] | undefined = undefined;
    // debugger;

    for (let line of lines) {
      const totalInLine = line.reduce((sum, value) => sum + value, 0);

      if (totalInLine < leastItemsAmount) {
        leastItemsAmount = totalInLine;
        lineWithLeast = line;
      }
    }

    if (!lineWithLeast) return;

    setLines((prevLines) =>
      prevLines.map((line) =>
        line === lineWithLeast ? [...line, itemsInPersonCart] : line
      )
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setLines((prevLines) =>
        // reduce the first item by 1 in each line
        prevLines.map((line) =>
          [line[0] - 1, ...line.slice(1)].filter((value) => value > 0)
        )
      );
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex flex-col items-center">
      <form className="flex" onSubmit={addPersonToLine}>
        <input
          required
          type="number"
          value={itemsInPersonCart}
          className="border px-2 py-1"
          onChange={(e) => setItemsInPersonCart(e.target.valueAsNumber)}
        />
        <Button title="Checkout" className="text-black" />
      </form>

      <div className="flex mt-12">
        {lines.map((line, idx) => (
          <div key={idx} className="mx-4 border-2 w-24 h-min-[20px] text-lg">
            {line.map((numberOfItems, idx) => (
              <div key={idx}>{numberOfItems}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
