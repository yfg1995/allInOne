import { useState, FC, CSSProperties } from "react";
import { classNames } from "../helpers/helpers";

export type TSelectOption = {
  value: string;
  id: string;
};

export interface ISelect {
  options: TSelectOption[];
  name?: string;
  defaultSelectedId?: string;
  onSelect?: (id: string) => void;
  onSave?: (value: string) => void;
}

export const SelectDropdown: FC<ISelect> = ({
  options,
  defaultSelectedId,
  name,
  onSelect,
  onSave,
}) => {
  const [selectedId, setSelectedId] = useState(
    defaultSelectedId || options[0]?.id
  );
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  const handleSelect = (id: string) => () => {
    setSelectedId(id);
    onSelect?.(id);
    setToggle(false);
    onSave?.(options[parseInt(selectedId)].value);
  };

  const itemHeight = 50;

  return (
    <div className="relative mr-5 cursor-pointer">
      <div
        style={{ borderRadius: "10px 10px 0 0" }}
        className="relative flex justify-between items-center p-2.5 w-1/2 text-lg border border-slate-300"
        onClick={handleToggle}
      >
        {name && (
          <div className="absolute top-[-12px] left-2.5 font-bold text-xs text-red-600 bg-white py-0.5 px-1">
            {name}
          </div>
        )}
        {options.find((option) => option.id === selectedId)?.value}

        <svg
          viewBox="0 0 511.735 511.735"
          className={classNames(
            "transition-all h-3 w-3 mr-1.5",
            toggle ? "rotate-180" : ""
          )}
        >
          <g>
            <g>
              <path
                d="M508.788,371.087L263.455,125.753c-4.16-4.16-10.88-4.16-15.04,0L2.975,371.087c-4.053,4.267-3.947,10.987,0.213,15.04
			c4.16,3.947,10.667,3.947,14.827,0l237.867-237.76l237.76,237.76c4.267,4.053,10.987,3.947,15.04-0.213
			C512.734,381.753,512.734,375.247,508.788,371.087z"
              />
            </g>
          </g>
        </svg>
      </div>

      {toggle && (
        <div
          className="absolute top-full left-0 border border-slate-300 mt-[-1px] w-1/2 z-10 rounded-bl-xl overflow-x-auto max-h-[var(--item-height)] divide-y divide-y-slate-300"
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
