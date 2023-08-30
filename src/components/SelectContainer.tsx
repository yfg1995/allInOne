import { FC } from "react";
import { classNames } from "../helpers/helpers";

interface ISelectContainer {
  items: { [key: string]: string | boolean }[];
  className?: string;
  onRemoveItem: (index: number) => void;
}
export const SelectContainer: FC<ISelectContainer> = ({
  items,
  className,
  onRemoveItem,
}) => {
  return (
    <div
      className={classNames(
        "flex flex-wrap flex-1 border border-slate-400 rounded-lg bg-slate-200 p-4 w-52",
        className
      )}
    >
      {items.map((item, index) => (
        <button
          key={index}
          className="flex items-center h-8 text-sm border border-slate-400 rounded-lg bg-white py-0.5 pl-1.5"
          onClick={() => onRemoveItem(index)}
        >
          {item.numOfBeds}
          {item.numOfBeds === "1"
            ? ` ${item.sizeOfBeds}`
            : ` ${item.sizeOfBeds}s`}
          {item.checked ? " + Sofa" : ""}
          <svg viewBox="0 0 24 24" className="w-6 h-6 mt-0.5">
            <path
              d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16"
              stroke="#000"
            />
          </svg>
        </button>
      ))}
    </div>
  );
};
