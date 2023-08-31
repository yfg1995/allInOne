import { FC } from "react";
import { Label } from "../../components/Label";
import { Input } from "../../components/Input";

export const UserInputs: FC = () => {
  return (
    <div className="flex flex-wrap w-1/2 gap-y-6 gap-x-8">
      <Label title="Best Western Rewards">
        <Input />
      </Label>

      <Label title="Caesars Rewards">
        <Input />
      </Label>

      <Label title="Choice Privileges">
        <Input />
      </Label>

      <Label title="Drury Gold Key Club">
        <Input />
      </Label>

      <Label title="Fairmont Presidents Club">
        <Input />
      </Label>

      <Label title="Hilton Honors">
        <Input />
      </Label>

      <Label title="Hyatt Gold Passport">
        <Input />
      </Label>

      <Label title="IHG Rewards">
        <Input />
      </Label>

      <Label title="Kimpton Karma">
        <Input />
      </Label>

      <Label title="La Quinta Returns">
        <Input />
      </Label>

      <Label title="Le Club Accor">
        <Input />
      </Label>

      <Label title="Loews You First">
        <Input />
      </Label>

      <Label title="M Life Rewards">
        <Input />
      </Label>

      <Label title="Marriot Bonvoy">
        <Input />
      </Label>

      <Label title="Omni Select">
        <Input />
      </Label>

      <Label title="Radisson Rewards">
        <Input />
      </Label>
    </div>
  );
};
