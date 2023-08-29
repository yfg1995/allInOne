import { classNames } from "../helpers/helpers";

interface ICheckbox {
  label: string;
  checked: boolean;
  className?: string;
  onChange: (checked: boolean) => void;
}

const Checkbox: React.FC<ICheckbox> = ({
  label,
  checked,
  className,
  onChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.checked);
  };

  return (
    <label className={classNames("cursor-pointer", className)}>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        className="mr-2"
      />
      {label}
    </label>
  );
};

export default Checkbox;
