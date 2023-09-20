import { useState } from "react";
import { UserInputs } from "./UserInputs";
import { Users } from "./Users/Users";
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

  const onAddNewUser = (name: string) => {
    setUserNames((prev) => {
      const newUserId = generateRandomUniqueId();
      const newUser = { id: newUserId, name, rewards: [] };
      onActiveChange(newUserId);
      return [newUser, ...prev];
    });
  };

  const onDeleteUser = (id: string) => {
    setUserNames((prev) => {
      const newItems = prev.filter((user) => user.id !== id);
      return newItems;
    });
  };

  const onEditUser = (id: string, value: string) => {
    const updatedUser = userNames.map((user) =>
      user.id === id ? { ...user, name: value } : user
    );
    setUserNames(updatedUser);
  };

  return (
    <div className="flex justify-between">
      <Users
        users={userNames}
        activeId={activeId}
        onActiveChange={onActiveChange}
        onAddNewUser={onAddNewUser}
        onDeleteUser={onDeleteUser}
        onEditUser={onEditUser}
      />
      <UserInputs users={userNames} activeId={activeId} />
    </div>
  );
};
