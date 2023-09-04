import { useState, FC, ChangeEvent } from "react";
import { classNames } from "../helpers/helpers";

interface IInput {
  placeholder?: string;
  value?: string;
  className?: string;
  inputClassName?: string;
  onChange?: (value: string) => void;
  onSave?: (value: string) => void;
}

export const Input: FC<IInput> = ({
  placeholder,
  value,
  className,
  inputClassName,
  onChange,
  onSave,
}) => {
  const [inputValue, setInputValue] = useState<string>(value || "");

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChange?.(newValue);
    onSave?.(newValue);
  };

  // const onInputSave = () => {
  //   onSave?.(inputValue);
  // }

  return (
    <div
      className={classNames(
        // "flex items-center gap-4 h-11 [&>*]:border [&>*]:rounded-lg [&>*]:h-full [&>*]:px-4",
        "flex items-center gap-4 h-11",
        className
      )}
    >
      <input
        type="text"
        className={classNames(
          "focus:outline-none w-full border-slate-400 px-4 h-full border rounded-lg",
          inputClassName
        )}
        value={inputValue}
        onChange={onInputChange}
        placeholder={placeholder}
      />
      {/* {!!onSave && <button onClick={onInputSave}>Save</button>} */}
    </div>
  );
};
