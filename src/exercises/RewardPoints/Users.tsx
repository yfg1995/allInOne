import { FC, useState } from "react";
import { IconUserPlus } from "../../icons/IconUserPlus";
import { Input } from "../../components/Input";
import { IconCheckMark } from "../../icons/IconCheckMark";
import { IconClose } from "../../icons/IconClose";
import { User } from "./User";

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
}

export const Users: FC<IUsers> = ({
  users,
  activeId,
  onDeleteUser,
  onActiveChange,
  onAddNewUser,
}) => {
  const [addIsActive, setAddIsActive] = useState(false);
  const [valueNewUser, setValueNewUser] = useState("");

  const onClickHandlerAdd = () => {
    setAddIsActive(false);
    onAddNewUser(valueNewUser);
  };

  const onClickHandlerCancel = () => {
    setAddIsActive(false);
  };

  const onClickHandlerEdit = () => {
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

  return (
    <div className="w-2/5 px-10">
      {addIsActive ? (
        <div className="flex items-center relative">
          <Input
            onChange={onChangeHandler}
            value={valueNewUser}
            className="w-full"
            inputClassName="pr-20 rounded-b-none"
          />

          <div className="flex items-center absolute right-3">
            <button onClick={onClickHandlerAdd}>
              <IconCheckMark className="w-6 h-6 mr-2" />
            </button>

            <button onClick={onClickHandlerCancel}>
              <IconClose className="w-5 h-5 fill-[#00F]" />
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between border rounded-lg bg-slate-50 rounded-b-none border-slate-200 py-2 px-5">
          <h2 className="font-bold select-none">Profile name</h2>

          <button onClick={onClickHandlerEdit}>
            <IconUserPlus className="w-8 h-8 fill-[#00F]" />
          </button>
        </div>
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
          />
        ))}
      </ul>
    </div>
  );
};
