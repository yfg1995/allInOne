import { ChangeEvent, FC } from "react";
import { classNames } from "../helpers/helpers";

interface ICheckbox {
  label: string;
  checked: boolean;
  className?: string;
  onChange: (checked: boolean) => void;
}

export const Checkbox: FC<ICheckbox> = ({
  label,
  checked,
  className,
  onChange,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.checked);
  };

  return (
    <label className={classNames("cursor-pointer", className)}>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        className="mr-2 cursor-pointer"
      />
      {label}
    </label>
  );
};
