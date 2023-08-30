import { useState, useEffect } from "react";
import { Checkbox } from "../../components/Checkbox";
import { Label } from "../../components/Label";
import { SelectDropdown } from "../../components/SelectDropdown";
import { numOfBeds } from "../../dummyData";
import { sizeOfBeds } from "../../dummyData";
import { SelectContainer } from "../../components/SelectContainer";
import { Button } from "../../components/Button";

export const Exercise3 = () => {
  const [checked, setChecked] = useState(false);
  const [currentItems, setCurrentItems] = useState<{
    [key: string]: string | boolean;
  }>({
    numOfBeds: "",
    sizeOfBeds: "",
    checked: false,
  });
  const [newItems, setNewItems] = useState<
    { [key: string]: string | boolean }[]
  >([]);
  const [sameItems, setSameItems] = useState(false);

  const handleOnChange =
    (key: "numOfBeds" | "sizeOfBeds" | "checked") =>
    (value: string | boolean) => {
      setCurrentItems((prev) => {
        const newState = { ...prev };
        newState[key] = value;
        return newState;
      });
    };

  const onHandleCheck = () => {
    const updatedChecked = !checked;
    setChecked(updatedChecked);
    handleOnChange("checked")(updatedChecked);
  };

  const firstItem = newItems[0];
  useEffect(() => {
    if (
      newItems.length > 0 &&
      Object.keys(currentItems).every(
        (key) => currentItems[key] === firstItem[key]
      )
    ) {
      setSameItems(true);
    } else {
      setSameItems(false);
    }
  }, [firstItem, currentItems, newItems.length]);

  const onHandleAdd = () => {
    const newItem = { ...currentItems };
    setNewItems((prevNesto) => [...prevNesto, newItem]);
  };

  const handleRemoveItem = (indexToRemove: number) => {
    const updatedNesto = newItems.filter(
      (_, index) => index.toString() !== indexToRemove.toString()
    );
    setNewItems(updatedNesto);
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
          disabled={sameItems}
        />
      </div>

      <SelectContainer
        className="ml-40"
        items={newItems}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
};
