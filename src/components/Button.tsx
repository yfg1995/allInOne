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
      className={`${className} w-full p-3 my-4 bg-slate-300 flex justify-center font-medium text-lg cursor-pointer transition-all disabled:opacity-50 disabled:pointer-events-none border rounded-lg hover:bg-white hover:text-black hover:border`}
      onClick={onClick}
      {...props}
    >
      {title}
    </button>
  );
};
