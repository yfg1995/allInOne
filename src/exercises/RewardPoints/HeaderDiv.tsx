import { FC } from "react";
import { IconUserPlus } from "../../icons/IconUserPlus";

interface IHeaderDiv {
  onEditClickHandler: (bool: boolean) => () => void;
}

export const HeaderDiv: FC<IHeaderDiv> = ({ onEditClickHandler }) => {
  return (
    <div className="flex items-center justify-between border rounded-lg bg-slate-50 rounded-b-none border-slate-200 py-2 px-5">
      <h2 className="font-bold select-none">Profile name</h2>

      <IconUserPlus
        onClick={onEditClickHandler(true)}
        svgClassName="w-8 h-8 fill-[#00F] hover:scale-110"
      />
    </div>
  );
};
