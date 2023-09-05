import { FC } from "react";
import { IconEdit } from "../../../icons/IconEdit";
import { IconTrashCan } from "../../../icons/IconTrashCan";

interface IUserEdit {
  name: string;
  isOnlyItem: boolean;
  onEditUser: () => void;
  onDeleteUser: () => void;
}

export const UserEdit: FC<IUserEdit> = ({
  name,
  isOnlyItem,
  onEditUser,
  onDeleteUser,
}) => {
  return (
    <>
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
    </>
  );
};
