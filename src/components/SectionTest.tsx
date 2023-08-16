import { useState } from "react";
import { Input } from "./Input";

export const SectionTest = () => {
  const [value, setValue] = useState("Zdravo");
  const updateValue = (val: string) => {
    setValue(val);
  };

  return (
    <div>
      <h2>Dobrodosli u nasu sekciju</h2>
      <Input value={value} onSave={updateValue} />
    </div>
  );
};
