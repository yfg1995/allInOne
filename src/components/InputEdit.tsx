import { FC, useState } from "react";
import { IconCheckMark } from "../icons/IconCheckMark";
import { IconClose } from "../icons/IconClose";
import { Input } from "./Input";
import { classNames } from "../helpers/helpers";
import { userActions } from "../exercises/RewardPoints/Users/Users";

interface IInputEdit {
  className?: string;
  classNameCheckMark?: string;
  valueNewUser: string;
  isHeader?: boolean;
  id?: string;
  onUserAction?: ({
    action,
    value,
    id,
  }: {
    action: keyof typeof userActions;
    value?: string | boolean;
    id?: string;
  }) => void;
  onChangeHandler?: (value: string) => void;
  onEditCancel: () => void;
  onSetEditOff?: () => void;
}

export const InputEdit: FC<IInputEdit> = ({
  className,
  valueNewUser,
  id,
  isHeader = false,
  onChangeHandler,
  onUserAction,
  onEditCancel,
  onSetEditOff,
}) => {
  const [value, setValue] = useState(valueNewUser);
  const onInputChange = (val: string) => {
    setValue(val);
    onChangeHandler?.(val);
  };

  return (
    <div className="flex items-center relative">
      <Input
        onChange={onInputChange}
        value={value}
        className="w-full"
        inputClassName={classNames(
          "pr-[70px] rounded-b-none border-slate-200 py-6",
          className
        )}
      />

      <div className="flex items-center absolute right-3">
        <IconCheckMark
          onClick={() => {
            if (isHeader) {
              onUserAction?.({ action: userActions.onAdd, value: true });
            } else {
              onUserAction?.({ action: userActions.onEdit, value: value, id });
              onSetEditOff?.();
            }
          }}
          svgClassName="w-6 h-6 mr-2"
          className={classNames(
            value === "" ? "opacity-70 pointer-events-none" : ""
          )}
        />

        <IconClose onClick={onEditCancel} svgClassName="w-5 h-5 fill-[#00F]" />
      </div>
    </div>
  );
};
