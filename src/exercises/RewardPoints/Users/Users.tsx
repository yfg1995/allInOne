import { FC, useState } from "react";
import { User } from "./User";
import { UserAddHeader } from "./UserAddHeader";

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
  onCancelNew: "onCancelNew",
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
      onEditUser(id as string, value as string);
    }

    if (action === userActions.onCancelNew) {
      onEditUser(id as string, (value = valueNewUser));
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
      <UserAddHeader
        onActiveToggleOff={() => {
          setAddIsActive(false);
        }}
        onUserAction={onUserAction}
        isActive={addIsActive}
        valueNewUser={valueNewUser}
        onChangeHandler={onChangeHandler}
      />

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
            onEditUser={onEditUser}
          />
        ))}
      </ul>
    </div>
  );
};
