import { FC } from "react";
import { IconEdit } from "../../icons/IconEdit";
import { IconTrashCan } from "../../icons/IconTrashCan";
// import { Input } from "../../components/Input";

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
  const onSetActive = () => {
    onClickHandler(id);
  };

  const onDeleteUser = () => {
    onClickHandlerDelete(id);
  };

  const onEditUser = () => {
    onClickHandlerEdit(id);
  };

  return (
    <li
      onClick={onSetActive}
      className={`flex justify-between py-2 px-5 cursor-pointer group hover:bg-blue-100 ${
        activeId === id ? "bg-blue-100" : ""
      }`}
    >
      <p className="line-clamp-1 w-full">{name}</p>

      <div className="flex items-center">
        <IconEdit
          onClick={onEditUser}
          className="scale-0 opacity-0 transition group-hover:scale-100 group-hover:opacity-100"
          svgClassName="fill-[#00F] w-4 h-4 mr-4 hover:scale-125"
        />

        {isOnlyItem ? (
          <IconTrashCan
            onClick={onDeleteUser}
            className="scale-0 opacity-0 transition group-hover:scale-100 group-hover:opacity-100"
            svgClassName="fill-[#6b6969] hover:scale-125 w-4 h-4"
          />
        ) : null}
      </div>
    </li>
  );
};
