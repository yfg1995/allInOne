import { FC, useState } from "react";
import { UserEdit } from "./UserEdit";
import { EditInput } from "../../../components/EditInput";

interface IUser {
  id: string;
  activeId: string;
  name: string;
  isOnlyItem: boolean;
  onClickHandler: (id: string) => void;
  onClickHandlerDelete: (id: string) => void;
  onClickHandlerEdit: (id: string) => void;
}

export const User: FC<IUser> = ({
  id,
  activeId,
  name,
  isOnlyItem,
  onClickHandler,
  onClickHandlerDelete,
  onClickHandlerEdit,
}) => {
  const [editIsActive, setEditIsActive] = useState(false);

  const onSetActive = () => {
    onClickHandler(id);
  };

  const onDeleteUser = () => {
    onClickHandlerDelete(id);
  };

  const onEditUser = () => {
    onClickHandlerEdit(id);
    setEditIsActive(true);
  };

  return (
    <li
      onClick={onSetActive}
      className={`group hover:bg-blue-100 ${
        activeId === id ? "bg-blue-100" : ""
      } ${editIsActive ? "cursor-default" : "flex py-2 px-5 cursor-pointer"}`}
    >
      {editIsActive ? (
        <EditInput
          valueNewUser={name}
          className="border-none rounded-none bg-blue-100 py-2.5 pl-5 pr-20"
        />
      ) : (
        <UserEdit
          name={name}
          isOnlyItem={isOnlyItem}
          onEditUser={onEditUser}
          onDeleteUser={onDeleteUser}
        />
      )}
    </li>
  );
};
