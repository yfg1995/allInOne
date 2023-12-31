import { FC, PropsWithChildren } from "react";
import { classNames } from "../helpers/helpers";

export interface ILabel extends PropsWithChildren {
  title: string;
  className?: string;
}

export const Label: FC<ILabel> = ({ title, children, className }) => {
  return (
    <label htmlFor="input" className={classNames("relative", className)}>
      <span className="absolute top-[-10px] left-[10px] px-2 text-slate-500 bg-white z-10 text-sm select-none">
        {title}
      </span>
      {children}
    </label>
  );
};
