import { FC, PropsWithChildren } from "react";
import { classNames } from "../helpers/helpers";

export interface ISection extends PropsWithChildren {
  title: string;
  className?: string;
}

export const Section: FC<ISection> = ({ title, children, className }) => {
  return (
    <div
      className={classNames(
        "flex flex-col p-28 my-8 border border-slate-300 rounded-lg",
        className
      )}
    >
      <h2 className="flex justify-center text-3xl font-bold mb-20">{title}</h2>
      <div className="space-y-4">{children}</div>
    </div>
  );
};
