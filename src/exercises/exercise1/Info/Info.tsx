import { useState, FC } from "react";
import { Section } from "../../../components/Section";
import { SelectDropdown } from "../../../components/SelectDropdown";
import { Button } from "../../../components/Button";
import { infoTabsItems } from "../dummyData";
import { InfoRow } from "./InfoRow";

export const Info: FC = () => {
  const [currentState, setCurrentState] = useState<{ [key: string]: string }>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
  });

  const handleOnChange =
    (key: "firstName" | "lastName" | "email" | "phone" | "location") =>
    (value: string) => {
      setCurrentState((prev) => {
        const newState = prev;
        newState[key] = value;
        return newState;
      });
    };

  const handleSubmit = () => {
    console.log(currentState);
  };

  return (
    <Section className="mb-4" title="Your Info">
      <div className="flex gap-4">
        <InfoRow
          className="w-1/2"
          rowTitle="First name"
          onChange={handleOnChange("firstName")}
        />

        <InfoRow
          className="w-1/2"
          rowTitle="Last name"
          onChange={handleOnChange("lastName")}
        />
      </div>

      <InfoRow rowTitle="E-mail" onChange={handleOnChange("email")} />

      <InfoRow rowTitle="Phone" onChange={handleOnChange("phone")} />

      <SelectDropdown
        onSave={handleOnChange("location")}
        options={infoTabsItems}
        name="Location"
      />

      <Button title="Save" onClick={handleSubmit} />
    </Section>
  );
};
