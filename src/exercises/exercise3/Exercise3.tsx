import { useState } from "react";
import { Checkbox } from "../../components/Checkbox";
import { Label } from "../../components/Label";
import { SelectDropdown } from "../../components/SelectDropdown";
import { numOfBeds, sizeOfBeds } from "../../dummyData";
import { SelectContainer } from "../../components/SelectContainer";
import { Button } from "../../components/Button";

type TItem = {
  [key: string]: string | boolean;
  numOfBeds: string;
  sizeOfBeds: string;
  checked: boolean;
};

export const Exercise3 = () => {
  const [currentItems, setCurrentItems] = useState<TItem>({
    numOfBeds: "",
    sizeOfBeds: "",
    checked: false,
  });
  const [newItems, setNewItems] = useState<
    { [key: string]: string | boolean }[]
  >([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleOnChange =
    (key: "numOfBeds" | "sizeOfBeds" | "checked") =>
    (value: string | boolean) => {
      setCurrentItems((prev) => {
        const newItemsOnChange = { ...prev, [key]: value };
        disableButton(newItems as TItem[], newItemsOnChange);
        return newItemsOnChange;
      });
    };

  const onHandleCheck = () => {
    setCurrentItems((prev) => {
      const updatedChecked = !prev.checked;
      const newItemsOnChange = { ...prev, checked: updatedChecked };
      handleOnChange("checked")(updatedChecked);
      disableButton(newItems as TItem[], newItemsOnChange);
      return newItemsOnChange;
    });
  };

  const areItemsEqual = (item1: TItem, item2: TItem): boolean => {
    if (
      item1.numOfBeds === item2.numOfBeds &&
      item1.sizeOfBeds === item2.sizeOfBeds &&
      item1.checked === item2.checked
    ) {
      return true;
    }
    return false;
  };

  const disableButton = (items: TItem[], curItems: TItem) => {
    if (items.length === 0) {
      // (!items.lenght)
      setIsButtonDisabled(false);
      return;
    }

    setIsButtonDisabled(
      items.some((item) => {
        return areItemsEqual(item as TItem, curItems as TItem);
      })
    );
  };

  const onHandleAdd = () => {
    const newItem = { ...currentItems };
    setNewItems((prev) => {
      const newItemsCopy = [...prev, newItem];
      disableButton(newItemsCopy as TItem[], currentItems);
      return newItemsCopy;
    });
  };

  const handleRemoveItem = (indexToRemove: number) => {
    setNewItems((prev) => {
      const newItemsCopy = prev.filter(
        (_, index) => index.toString() !== indexToRemove.toString()
      );
      disableButton(newItemsCopy as TItem[], currentItems);
      return newItemsCopy;
    });
  };

  return (
    <div className="flex items-start gap-x-8">
      <div>
        <div className="flex items-center">
          <Label title="# of beds">
            <SelectDropdown
              options={numOfBeds}
              className="w-28"
              isEmptyInit
              onSave={handleOnChange("numOfBeds")}
            />
          </Label>

          <Label title="Size of bed">
            <SelectDropdown
              options={sizeOfBeds}
              className="w-40"
              isEmptyInit
              onSave={handleOnChange("sizeOfBeds")}
            />
          </Label>

          <Checkbox
            label="Pull-out sofa"
            checked={!!currentItems.checked}
            className="flex items-center"
            onChange={onHandleCheck}
          />
        </div>

        <Button
          title="Add Bed Type"
          className="bg-blue-500 rounded-full mt-6"
          onClick={onHandleAdd}
          disabled={isButtonDisabled}
        />
      </div>

      {!!newItems.length && (
        <SelectContainer
          items={newItems}
          className="gap-4"
          onRemoveItem={handleRemoveItem}
        />
      )}
    </div>
  );
};
