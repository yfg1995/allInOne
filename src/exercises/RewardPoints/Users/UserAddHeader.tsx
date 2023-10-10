import { FC } from "react";
import { InputEdit } from "../../../components/InputEdit";
import { userActions } from "./Users";
import { IconUserPlus } from "../../../icons/IconUserPlus";

interface IUserAddHeader {
  isActive: boolean;
  valueNewUser: string;
  onActiveToggleOff: () => void;
  onUserAction?: ({
    action,
    value,
    id,
  }: {
    action: keyof typeof userActions;
    value?: string | boolean;
    id?: string;
  }) => void;
  onChangeHandler: (value: string) => void;
}

export const UserAddHeader: FC<IUserAddHeader> = ({
  isActive,
  valueNewUser,
  onUserAction,
  onChangeHandler,
  onActiveToggleOff,
}) => {
  return isActive ? (
    <InputEdit
      onEditCancel={() => {
        onUserAction?.({
          action: userActions.onCancelNew,
          value: "",
        });
        onActiveToggleOff();
        onChangeHandler("");
      }}
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
        onClick={() => {
          onUserAction?.({
            action: userActions.onActiveToggle,
            value: true,
          });
        }}
        svgClassName="w-8 h-8 fill-[#00F] hover:scale-110"
      />
    </div>
  );
};
