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
        "w-full p-3 mt-4 bg-gray-500 text-white flex justify-center font-medium text-lg cursor-pointer transition-all disabled:opacity-50 disabled:pointer-events-none border rounded-lg hover:bg-white hover:text-black hover:border",
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
