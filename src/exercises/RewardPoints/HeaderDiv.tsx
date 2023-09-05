import { FC } from "react";
import { IconUserPlus } from "../../icons/IconUserPlus";
import { classNames } from "../../helpers/helpers";

interface IHeaderDiv {
  className?: string;
  onEditClickHandler: (bool: boolean) => () => void;
}

export const HeaderDiv: FC<IHeaderDiv> = ({
  className,
  onEditClickHandler,
}) => {
  return (
    <div
      className={classNames(
        "flex items-center justify-between border rounded-lg bg-slate-50 rounded-b-none border-slate-200 py-2 px-5",
        className
      )}
    >
      <h2 className="font-bold select-none">Profile name</h2>

      <IconUserPlus
        onClick={onEditClickHandler(true)}
        svgClassName="w-8 h-8 fill-[#00F] hover:scale-110"
      />
    </div>
  );
};
