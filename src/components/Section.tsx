import { FC, PropsWithChildren } from "react";

export interface ISection extends PropsWithChildren {
  title: string;
  className?: string;
}

export const Section: FC<ISection> = ({ title, children, className }) => {
  return (
    <div
      className={`flex flex-col p-28 my-8 border border-slate-400 rounded-lg ${className}`}
    >
      <h2 className="flex justify-center text-2xl font-bold mb-10">{title}</h2>
      <div className="space-y-4">{children}</div>
    </div>
  );
};
