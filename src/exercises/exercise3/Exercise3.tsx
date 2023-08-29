import { useState } from "react";
import Checkbox from "../../components/Checkbox";
import { Label } from "../../components/Label";
import { SelectDropdown } from "../../components/SelectDropdown";
import { numOfBeds } from "../../dummyData";
import { sizeOfBeds } from "../../dummyData";
import { SelectContainer } from "../../components/SelectContainer";
import { Button } from "../../components/Button";

export const Exercise3 = () => {
  const [checked, setChecked] = useState(false);
  const [currentState, setCurrentState] = useState<{ [key: string]: string }>({
    numOfBeds: "",
    sizeOfBeds: "",
  });

  const handleOnChange =
    (key: "numOfBeds" | "sizeOfBeds") => (value: string) => {
      setCurrentState((prev) => {
        const newState = prev;
        newState[key] = value;
        return newState;
      });
    };

  const onHandleCheck = () => {
    setChecked((prev) => !prev);
  };

  const onHandleAdd = () => {
    console.log({ currentState });
  };

  return (
    <div className="flex">
      <div>
        <div className="flex items-center">
          <Label title="# of beds">
            <SelectDropdown
              options={numOfBeds}
              className="w-28"
              onSave={handleOnChange("numOfBeds")}
            />
          </Label>

          <Label title="Size of bed">
            <SelectDropdown
              options={sizeOfBeds}
              className="w-40"
              onSave={handleOnChange("sizeOfBeds")}
            />
          </Label>

          <Checkbox
            label="Pull-out sofa"
            checked={checked}
            className="flex items-center"
            onChange={onHandleCheck}
          />
        </div>

        <Button
          title="Add Bed Type"
          className="bg-blue-500 rounded-full mt-6"
          onClick={onHandleAdd}
        />
      </div>

      <SelectContainer className="ml-40" />
    </div>
  );
};
