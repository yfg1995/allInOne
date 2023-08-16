import { ChangeEvent, FC, useState } from "react";
import { Button } from "../../components/Button";
import { classNames } from "../../helpers/helpers";

interface ITextArea {
  title: string;
  className?: string;
  onSave?: (value: string) => void;
  onChange?: (value: string) => void;
}

export const TextArea: FC<ITextArea> = ({
  title,
  className,
  onSave,
  onChange,
}) => {
  const [textValue, setTextValue] = useState("");

  const onTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setTextValue(newValue);
    onChange?.(newValue);
  };

  const onInputSave = () => {
    onSave?.(textValue);
  };

  return (
    <div
      className={classNames(
        "border-t-0 px-8 py-6 border border-black",
        className
      )}
    >
      <h4 className="mb-2">{title}</h4>
      <textarea
        onChange={onTextAreaChange}
        className="w-full border focus:outline-none h-30 p-2 resize-none"
      ></textarea>

      <Button title="Save" onClick={onInputSave} />
    </div>
  );
};
