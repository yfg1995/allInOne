import { FC } from "react";

interface IIconCheckMark {
  className?: string;
}

export const IconCheckMark: FC<IIconCheckMark> = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M4 12.6111L8.92308 17.5L20 6.5"
        stroke="#00F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
