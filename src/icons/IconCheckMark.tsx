import { FC } from "react";

interface IIconCheckMark {
  className?: string;
}

export const IconCheckMark: FC<IIconCheckMark> = ({ className }) => {
  return (
    <svg className={className} width="10px" height="10px" viewBox="0 0 24 24">
      <path
        d="M4 12.6111L8.92308 17.5L20 6.5"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
