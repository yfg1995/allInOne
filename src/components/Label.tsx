import { FC, PropsWithChildren } from "react";

export interface ILabel extends PropsWithChildren {
  title: string;
  className?: string;
}

export const Label: FC<ILabel> = ({ title, children, className }) => {
  return (
    <div className={`relative ${className}`}>
      <span className="absolute top-[-10px] left-[10px] px-2 text-slate-500 bg-white text-sm">
        {title}
      </span>
      {children}
    </div>
  );
};
