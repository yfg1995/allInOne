import { FC } from "react";
import { IconEdit } from "../../icons/IconEdit";
import { IconTrashCan } from "../../icons/IconTrashCan";

interface IUser {
  id: string;
  activeId: string;
  name: string;
  isOnlyItem: boolean;
  onClickHandler: (id: string) => void;
  onClickHandlerDelete: (id: string) => void;
}

export const User: FC<IUser> = ({
  id,
  activeId,
  name,
  isOnlyItem,
  onClickHandler,
  onClickHandlerDelete,
}) => {
  const onSetActive = () => {
    onClickHandler(id);
  };

  const onDeleteUser = () => {
    onClickHandlerDelete(id);
  };

  return (
    <li
      onClick={onSetActive}
      className={`flex justify-between py-2 px-5 cursor-pointer group ${
        activeId === id ? "bg-blue-100" : ""
      }`}
    >
      <p className="line-clamp-1 w-full">{name}</p>

      <div className="flex items-center">
        <button className="scale-0 opacity-0 transition group-hover:scale-100 group-hover:opacity-100">
          <IconEdit className="fill-[#00F] w-4 h-4 mr-4 hover:scale-125 transition" />
        </button>

        {isOnlyItem ? (
          <button
            onClick={onDeleteUser}
            className="scale-0 opacity-0 transition group-hover:scale-100 group-hover:opacity-100"
          >
            <IconTrashCan className="fill-[#AAA] hover:scale-125 w-4 h-4 transition" />
          </button>
        ) : null}
      </div>
    </li>
  );
};
