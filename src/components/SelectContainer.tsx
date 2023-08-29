import { FC } from "react";
import { classNames } from "../helpers/helpers";

interface ISelectContainer {
  nums?: { [key: string]: string }[];
  className?: string;
}
export const SelectContainer: FC<ISelectContainer> = ({ nums, className }) => {
  console.log(nums);
  return (
    <div
      className={classNames(
        "border border-slate-400 rounded-lg bg-slate-200 p-1 w-52 h-40",
        className
      )}
    >
      <button className="flex items-center border border-slate-400 rounded-lg bg-white py-0.5 pl-1.5 m-1.5">
        nesto
        <svg viewBox="0 0 24 24" className="w-6 h-6 mt-0.5">
          <path
            d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16"
            stroke="#000"
          />
        </svg>
      </button>
    </div>
  );
};
