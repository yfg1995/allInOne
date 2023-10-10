import { FC } from "react";
import { useCounter } from "../../ZustandStore/useCounter";

export const Zustand: FC = () => {
  const { count = 0, increaseCount } = useCounter();
  // const count = useCounter((state) => state.count); for bigger projects
  return (
    <div>
      <p>Counter: {count}</p>
      <button type="button" onClick={() => increaseCount(1)}>
        Increase counter
      </button>
    </div>
  );
};
