import { FC, useState } from "react";
import { IconUserPlus } from "../../icons/IconUserPlus";
import { IconTrashCan } from "../../icons/IconTrashCan";
import { IconEdit } from "../../icons/IconEdit";
// import { Input } from "../../components/Input";

type TUser = {
  id: string;
  name: string;
};
interface IUsers {
  users: TUser[];
  activeId: string;
}

export const Users: FC<IUsers> = ({ users, activeId }) => {
  // const [isHovered, setIsHovered] = useState<string | null>(null);

  // const handleMouseEnter = (userId: string) => {
  //   setIsHovered(userId);
  // };

  // const handleMouseLeave = () => {
  //   setIsHovered(null);
  // };

  return (
    <div className="w-2/5">
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
            // onMouseEnter={() => handleMouseEnter(user.id)}
            // onMouseLeave={handleMouseLeave}
            className="flex justify-between py-2 px-5 cursor-pointer group"
          >
            <p>{user.name}</p>

            <div className="opacity-0 transition group-hover:opacity-100">
              {/* <div className={`${isHovered !== user.id ? "hidden" : ""} flex`}> */}

              <button>
                <IconEdit className="text-r w-4 h-4 mr-4 hover:scale-110 transition" />
              </button>

              <button>
                <IconTrashCan className="hover:scale-110 w-4 h-4 transition" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

// id treba da je random | vidi na gpt
