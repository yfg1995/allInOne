import { useState, FC } from "react";

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
    <div className="relative w-64 mr-5 cursor-pointer">
      <div
        style={{ borderRadius: "10px 10px 0 0" }}
        className="relative p-2.5 text-lg border border-slate-500"
        onClick={handleToggle}
      >
        {name && (
          <div className="absolute top-[-12px] left-2.5 font-bold text-xs text-red-600 bg-white py-0.5 px-1">
            {name}
          </div>
        )}
        {options.find((option) => option.id === selectedId)?.value}
      </div>

      {toggle && (
        <div
          className="absolute top-full left-0 border border-black mt-[-1px] w-full z-10 rounded-bl-xl"
          style={{ maxHeight: `${itemHeight * 4}px`, overflowY: "auto" }}
        >
          {options.map((option) => (
            <div
              className="item bg-white flex justify-center items-center cursor-pointer transition hover:bg-green-400"
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
