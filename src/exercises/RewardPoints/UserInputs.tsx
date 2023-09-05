import { FC } from "react";
import { Label } from "../../components/Label";
import { Input } from "../../components/Input";
import { TUser } from "./Users/Users";
import { inputs } from "../../dummyData";

interface IUserInputs {
  users: TUser[];
  activeId: string;
}

export const UserInputs: FC<IUserInputs> = ({ users, activeId }) => {
  const activeUser = users.find((user) => user.id === activeId);
  const rewards = activeUser?.rewards || [];

  return (
    <div className="flex flex-wrap w-1/2 gap-y-6 gap-x-8 px-10">
      {inputs.map(({ id, title }) => {
        const foundReward = rewards.find((reward) => reward.title === title);
        return (
          <Label key={`${activeId}-${id}`} title={title}>
            <Input value={foundReward?.value || ""} className="h-11" />
          </Label>
        );
      })}
    </div>
  );
};
