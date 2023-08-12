import { useState } from "react";
import { Section } from "./components/Section";
import { SelectDropdown } from "./components/SelectDropdown";
import { Input } from "./components/Input";
import { Label } from "./components/Label";

export const Info = () => {
  const items = [
    {
      id: "1",
      value: "Europe",
    },
    {
      id: "2",
      value: "North America",
    },
    {
      id: "3",
      value: "South America",
    },
    {
      id: "4",
      value: "Asia",
    },
    {
      id: "5",
      value: "Australia",
    },
    {
      id: "6",
      value: "Africa",
    },
  ];

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmitFirstName = (value: string) => {
    setFirstName(value);
  };

  const handleSubmitLastName = (value: string) => {
    setLastName(value);
  };

  const handleSubmitEmail = (value: string) => {
    setEmail(value);
  };

  const handleSubmitSelect = (value: string) => {
    setLocation(value);
  };

  const handleSubmit = () => {
    console.log(firstName, lastName, email, location);
  };

  return (
    <Section title="Your Info">
      <Label title="First name">
        <Input onSave={handleSubmitFirstName} />
      </Label>

      <Label title="Last name">
        <Input onSave={handleSubmitLastName} />
      </Label>

      <Label title="E-mail">
        <Input onSave={handleSubmitEmail} />
      </Label>

      <SelectDropdown
        onSave={handleSubmitSelect}
        options={items}
        name="Location"
      />

      <button onClick={handleSubmit}>Save</button>
    </Section>
  );
};
