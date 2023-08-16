import { FC, PropsWithChildren } from "react";
import { classNames } from "../helpers/helpers";

export interface ILabel extends PropsWithChildren {
  title: string;
  className?: string;
}

export const Label: FC<ILabel> = ({ title, children, className }) => {
  return (
    <div className={classNames("relative", className)}>
      <span className="absolute top-[-10px] left-[10px] px-2 text-slate-500 bg-white text-sm">
        {title}
      </span>
      {children}
    </div>
  );
};
