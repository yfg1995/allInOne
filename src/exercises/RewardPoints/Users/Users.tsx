import { FC, useState } from "react";
import { User } from "./User";
import { InputEdit } from "../../../components/InputEdit";
import { IconUserPlus } from "../../../icons/IconUserPlus";

export type TUser = {
  id: string;
  name: string;
  rewards?: { title: string; value: string }[];
};

export const userActions = {
  onAdd: "onAdd",
  onEdit: "onEdit",
  onDelete: "onDelete",
  onActiveToggle: "onActiveToggle",
  onCancel: "onCancel",
} as const;

interface IUsers {
  users: TUser[];
  activeId: string;
  onDeleteUser: (id: string) => void;
  onActiveChange: (id: string) => void;
  onAddNewUser: (name: string) => void;
  onEditUser: (id: string, value: string) => void;
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
  const onUserAction = ({
    action,
    value,
    id,
  }: {
    action: keyof typeof userActions;
    value?: string | boolean;
    id?: string;
  }) => {
    if (action === userActions.onAdd) {
      setAddIsActive(false);
      onAddNewUser(valueNewUser);
      setValueNewUser("");
    }
    if (action === userActions.onEdit) {
      onEditUser(id as string, value as string);
    }
    if (action === userActions.onDelete && !!value) {
      onDeleteUser(value as string);
    }
    if (action === userActions.onActiveToggle && !!value) {
      onActiveChange(value as string);
      setAddIsActive(true);
    }
    if (action === userActions.onCancel) {
      setValueNewUser("");
    }
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
        <InputEdit
          isHeader={true}
          onUserAction={onUserAction}
          className="h-8 -mt-[3px]"
          valueNewUser={valueNewUser}
          onChangeHandler={onChangeHandler}
        />
      ) : (
        <div className="flex items-center -mt-[3px] justify-between border rounded-lg bg-slate-50 rounded-b-none border-slate-200 py-2 px-5">
          <h2 className="font-bold select-none">Profile name</h2>

          <IconUserPlus
            onClick={() =>
              onUserAction?.({
                action: userActions.onActiveToggle,
                value: true,
              })
            }
            svgClassName="w-8 h-8 fill-[#00F] hover:scale-110"
          />
        </div>
      )}

      <ul className="divide-y-2 divide-dashed bg-slate-50">
        {users.map((user) => (
          <User
            onUserAction={onUserAction}
            key={user.id}
            id={user.id}
            activeId={activeId}
            name={user.name}
            isOnlyItem={users.length > 1}
            onClickHandler={onClickHandler(user.id)}
            onClickHandlerDelete={onClickHandlerDelete(user.id)}
            onEditUser={(id, value) => console.log(id, value)}
          />
        ))}
      </ul>
    </div>
  );
};
