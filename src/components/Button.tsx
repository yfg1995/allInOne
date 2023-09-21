import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "../helpers/helpers";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export const Button: FC<IButton> = ({
  title,
  onClick,
  className,
  ...props
}) => {
  return (
    <button
      className={classNames(
        "px-4 py-2 text-white flex items-center justify-center font-medium cursor-pointer transition-all disabled:opacity-50 disabled:pointer-events-none border hover:bg-white hover:text-black",
        className
        // props.disabled && "opacity-50"
      )}
      onClick={onClick}
      {...props}
    >
      {title}
    </button>
  );
};
