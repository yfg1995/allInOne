import { FC } from "react";
import { classNames } from "../helpers/helpers";

interface IIconCheckMark {
  className?: string;
  svgClassName?: string;
  onClick?: () => void;
}

export const IconCheckMark: FC<IIconCheckMark> = ({
  className,
  svgClassName,
  onClick,
}) => {
  return (
    <button onClick={onClick} className={classNames(className)}>
      <svg
        className={classNames("transition", svgClassName)}
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M4 12.6111L8.92308 17.5L20 6.5"
          stroke="#00F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};
