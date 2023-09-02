import { FC, useState } from "react";
import { IconUserPlus } from "../../icons/IconUserPlus";
import { IconTrashCan } from "../../icons/IconTrashCan";
import { IconEdit } from "../../icons/IconEdit";
// import { Input } from "../../components/Input";

export type TUser = {
  id: string;
  name: string;
  rewards?: { title: string; value: string }[];
};
interface IUsers {
  users: TUser[];
  activeId: string;
  onActiveChange: (id: string) => void;
}

export const Users: FC<IUsers> = ({ users, activeId, onActiveChange }) => {
  const onClickHandler = (id: string) => () => {
    onActiveChange(id);
  };

  return (
    <div className="w-2/5 px-10">
      <div className="flex justify-between items-center border rounded-lg bg-slate-50 rounded-b-none border-slate-200 py-2 px-5">
        <h2 className="font-bold select-none">Profile name</h2>

        <button>
          <IconUserPlus className="w-8 h-8 fill-[#00F]" />
        </button>
      </div>

      <ul className="divide-y-2 divide-dashed bg-slate-50">
        {users.map((user) => (
          <li
            key={user.id}
            onClick={onClickHandler(user.id)}
            className={`flex justify-between py-2 px-5 cursor-pointer group ${
              activeId === user.id ? "bg-blue-100" : ""
            }`}
          >
            <p>{user.name}</p>

            <div className="flex items-center">
              <button className="scale-0 opactiy-0 transition group-hover:scale-100 group-hover:opacity-100">
                <IconEdit className="fill-[#00F] w-4 h-4 mr-4 hover:scale-125 transition" />
              </button>

              <button className="scale-0 opactiy-0 transition group-hover:scale-100 group-hover:opacity-100">
                <IconTrashCan className="fill-[#AAA] hover:scale-125 w-4 h-4 transition" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
