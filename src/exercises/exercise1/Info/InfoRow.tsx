import { useState, FC } from "react";
import { Label } from "../../../components/Label";
import { Input } from "../../../components/Input";

interface IInfoRow {
  rowTitle: string;
  className?: string;
  onChange: (value: string) => void;
}

export const InfoRow: FC<IInfoRow> = ({ rowTitle, className, onChange }) => {
  const [error, setError] = useState(false);

  const handleOnChange = (value: string) => {
    if (value.length < 8) {
      setError(true);
    } else {
      setError(false);
    }
    onChange(value);
  };

  return (
    <div className={className}>
      <Label title={rowTitle}>
        <Input onSave={handleOnChange} />
      </Label>
      {error && (
        <div className="text-red-400 text-sm">
          {rowTitle} needs to be more than 8 characters.
        </div>
      )}
    </div>
  );
};
