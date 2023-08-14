import { useState, FC, ChangeEvent } from "react";

interface IInput {
  placeholder?: string;
  value?: string;
  className?: string;
  onChange?: (value: string) => void;
  onSave?: (value: string) => void;
}

export const Input: FC<IInput> = ({
  placeholder,
  value,
  className,
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
      className={`${className} flex items-center gap-4 h-10 [&>*]:border [&>*]:rounded-lg [&>*]:h-full [&>*]:px-4 w-full`}
    >
      <input
        type="text"
        className="focus:outline-none w-full"
        value={inputValue}
        onChange={onInputChange}
        placeholder={placeholder}
      />
      {/* {!!onSave && <button onClick={onInputSave}>Save</button>} */}
    </div>
  );
};
