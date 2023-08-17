import { FC, useState } from "react";

export interface IToggle {
  defaultToggled?: boolean;
  switched?: (bool: boolean) => void;
}

export const Toggle: FC<IToggle> = ({ defaultToggled, switched }) => {
  const [toggle, setToggle] = useState(defaultToggled || false);

  const handleToggle = () => {
    const newToggle = !toggle;
    setToggle(newToggle);
    switched?.(newToggle);
  };

  return (
    <div className="flex gap-1" onClick={handleToggle}>
      <input
        className={`${
          toggle ? "toggleActive" : ""
        } toggleInput appearance-none	min-w-[48px] min-h-[22px] relative rounded-3xl cursor-pointer transition-all select-none bg-slate-300`}
        type="checkbox"
      />
    </div>
  );
};
