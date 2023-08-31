import { FC } from "react";
// import { Input } from "../../components/Input";
import { FaTrashAlt, FaEdit, FaUserPlus } from "react-icons/fa";

export const Users: FC = () => {
  return (
    <div className="w-2/5">
      <div className="flex justify-between items-center border rounded-lg border-slate-400 py-2 px-5">
        <h2 className="font-bold text-lg select-none">Profile name</h2>

        <button>
          <FaUserPlus className="w-8 h-8 fill-[#00F]" />
        </button>
      </div>

      <div>
        <div className="flex justify-between py-2 px-5 cursor-pointer">
          <p className="text-lg font-normal">Kristin Watson</p>

          <div className="flex">
            <button>
              <FaEdit className="fill-[#00F] mr-4" />
            </button>

            <button>
              <FaTrashAlt className="fill-[#AAA]" />
            </button>
          </div>
        </div>
        {/* <Input /> */}
      </div>
    </div>
  );
};
