import { useState } from "react";
import { UserInputs } from "./UserInputs";
import { Users } from "./Users";

export const RewardPoints = () => {
  const [userNames, setUserNames] = useState([
    {
      id: "1",
      name: "Kristin Watson",
    },
    {
      id: "2",
      name: "Ralph Edwards",
    },
    {
      id: "3",
      name: "Devon McKinney",
    },
  ]);
  const [activeId, setActiveId] = useState("2");

  return (
    <div className="flex justify-between px-20">
      <Users users={userNames} activeId={activeId} />
      <UserInputs />
    </div>
  );
};
