import { FC, PropsWithChildren } from "react";

export interface ISection extends PropsWithChildren {
  title: string;
}

export const Section: FC<ISection> = ({ title, children }) => {
  return (
    <div className="h-screen py-8 px-28 my-8 border border-black">
      <h2 className="flex justify-center text-2xl font-bold">{title}</h2>
      <div className="mt-4">{children}</div>
    </div>
  );
};
