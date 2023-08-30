import { useState, FC, CSSProperties } from "react";
import { classNames } from "../helpers/helpers";

export type TSelectOption = {
  value: string;
  id: string;
};

export interface ISelect {
  options: TSelectOption[];
  isEmptyInit?: boolean;
  defaultSelectedId?: string;
  className?: string;
  onSelect?: (id: string) => void;
  onSave?: (value: string) => void;
}

export const SelectDropdown: FC<ISelect> = ({
  options,
  defaultSelectedId,
  className,
  isEmptyInit,
  onSelect,
  onSave,
}) => {
  const [selectedId, setSelectedId] = useState(
    isEmptyInit ? null : defaultSelectedId || options[0]?.id
  );
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  const handleSelect = (id: string) => () => {
    setSelectedId(id);
    onSelect?.(id);
    setToggle(false);
    onSave?.(options.find((option) => option.id === id)?.value || "");
  };

  const itemHeight = 50;

  return (
    <div className="relative mr-5 cursor-pointer">
      <div
        style={{ borderRadius: "10px 10px 0 0" }}
        className={classNames(
          "relative flex justify-between items-center p-2.5 w-1/2 text-lg border border-slate-300",
          className
        )}
        onClick={handleToggle}
      >
        {options.find((option) => option.id === selectedId)?.value || ""}
        <svg
          viewBox="0 0 24 24"
          className={classNames(
            "transition-all h-5 w-5",
            toggle ? "rotate-180" : ""
          )}
        >
          <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" />
        </svg>
      </div>

      {toggle && (
        <div
          className={classNames(
            "absolute top-full left-0 border border-slate-300 mt-[-1px] w-1/2 z-10 rounded-bl-xl overflow-x-auto max-h-[var(--item-height)] divide-y divide-y-slate-300",
            className
          )}
          style={{ "--item-height": `${itemHeight * 4}px` } as CSSProperties}
        >
          {options.map((option) => (
            <div
              className="bg-white flex justify-center items-center cursor-pointer transition hover:bg-green-400"
              key={option.id}
              style={{
                color: selectedId === option.id ? "blue" : "black",
                height: `${itemHeight}px`,
              }}
              onClick={handleSelect(option.id)}
            >
              {option.value}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
