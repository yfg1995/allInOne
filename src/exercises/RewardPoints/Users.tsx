import { FC, useState } from "react";
import { User } from "./User";
import { HeaderInput } from "./HeaderInput";
import { HeaderDiv } from "./HeaderDiv";

export type TUser = {
  id: string;
  name: string;
  rewards?: { title: string; value: string }[];
};
interface IUsers {
  users: TUser[];
  activeId: string;
  onDeleteUser: (id: string) => void;
  onActiveChange: (id: string) => void;
  onAddNewUser: (name: string) => void;
  onEditUser: (id: string) => void;
}

export const Users: FC<IUsers> = ({
  users,
  activeId,
  onDeleteUser,
  onActiveChange,
  onAddNewUser,
  onEditUser,
}) => {
  const [addIsActive, setAddIsActive] = useState(false);
  const [valueNewUser, setValueNewUser] = useState("");

  const onClickHandlerAdd = () => () => {
    setAddIsActive(false);
    onAddNewUser(valueNewUser);
    setValueNewUser("");
  };

  const onClickHandlerCancel = () => () => {
    setAddIsActive(false);
    setValueNewUser("");
  };

  const onEditClickHandler = () => () => {
    setAddIsActive(true);
  };

  const onClickHandler = (id: string) => () => {
    onActiveChange(id);
  };

  const onChangeHandler = (value: string) => {
    setValueNewUser(value);
  };

  const onClickHandlerDelete = (id: string) => () => {
    onDeleteUser(id);
  };

  const onClickHandlerEdit = (id: string) => () => {
    onEditUser(id);
  };

  return (
    <div className="w-2/5 px-10">
      {addIsActive ? (
        <HeaderInput
          valueNewUser={valueNewUser}
          onChangeHandler={onChangeHandler}
          onClickHandlerAdd={onClickHandlerAdd}
          onClickHandlerCancel={onClickHandlerCancel}
        />
      ) : (
        <HeaderDiv onEditClickHandler={onEditClickHandler} />
      )}

      <ul className="divide-y-2 divide-dashed bg-slate-50">
        {users.map((user) => (
          <User
            key={user.id}
            id={user.id}
            activeId={activeId}
            name={user.name}
            isOnlyItem={users.length > 1}
            onClickHandler={onClickHandler(user.id)}
            onClickHandlerDelete={onClickHandlerDelete(user.id)}
            onClickHandlerEdit={onClickHandlerEdit(user.id)}
          />
        ))}
      </ul>
    </div>
  );
};
