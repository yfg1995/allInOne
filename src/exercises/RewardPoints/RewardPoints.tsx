import { useState } from "react";
import { UserInputs } from "./UserInputs";
import { Users } from "./Users";
import { generateRandomUniqueId } from "../../helpers/helpers";

export const RewardPoints = () => {
  const [userNames, setUserNames] = useState([
    {
      id: generateRandomUniqueId(),
      name: "Kristin Watson",
      rewards: [
        {
          title: "Best Western Rewards",
          value: "1234",
        },
        {
          title: "Caesars Rewards",
          value: "djole",
        },
      ],
    },
    {
      id: generateRandomUniqueId(),
      name: "Ralph Edwards",
      rewards: [],
    },
    {
      id: generateRandomUniqueId(),
      name: "Devon McKinney",
      rewards: [],
    },
  ]);
  const [activeId, setActiveId] = useState(userNames[0].id);

  const onActiveChange = (id: string) => {
    setActiveId(id);
  };

  return (
    <div className="flex justify-between px-20">
      <Users
        users={userNames}
        activeId={activeId}
        onActiveChange={onActiveChange}
      />
      <UserInputs users={userNames} activeId={activeId} />
    </div>
  );
};
