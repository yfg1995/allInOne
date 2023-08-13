import { ButtonHTMLAttributes, FC } from "react";

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
      className={`w-full p-4 my-4 bg-red-400 flex justify-center font-bold cursor-pointer disabled:opacity-50 disabled:pointer-events-none rounded-lg ${className}`}
      onClick={onClick}
      {...props}
    >
      {title}
    </button>
  );
};
