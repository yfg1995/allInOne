import { FC } from "react";
import { useCounter } from "../../ZustandStore/useCounter";

export const Zustand: FC = () => {
  const { count, increaseCount } = useCounter();
  // const count = useCounter((state) => state.count); for bigger projects

  return (
    <div>
      <p>Counter: {count}</p>
      <button type="button" onClick={() => increaseCount(5)}>
        Increase counter
      </button>
    </div>
  );
};
