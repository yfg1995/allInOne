import { FC } from "react";
import { IconCheckMark } from "../icons/IconCheckMark";
import { IconClose } from "../icons/IconClose";
import { Input } from "./Input";
import { classNames } from "../helpers/helpers";

interface IEditInput {
  className?: string;
  classNameCheckMark?: string;
  valueNewUser: string;
  onChangeHandler?: (value: string) => void;
  onClickHandlerAdd?: (bool: boolean) => () => void;
  onClickHandlerCancel?: (bool: boolean) => () => void;
}

export const EditInput: FC<IEditInput> = ({
  className,
  valueNewUser,
  onChangeHandler,
  onClickHandlerAdd,
  onClickHandlerCancel,
}) => {
  return (
    <div className="flex items-center relative">
      <Input
        onChange={onChangeHandler}
        value={valueNewUser}
        className="w-full"
        inputClassName={classNames(
          "pr-[70px] rounded-b-none border-slate-200 py-6",
          className
        )}
      />

      <div className="flex items-center absolute right-3">
        {valueNewUser && (
          <IconCheckMark
            onClick={onClickHandlerAdd?.(true)}
            svgClassName="w-6 h-6 mr-2"
          />
        )}

        <IconClose
          onClick={onClickHandlerCancel?.(true)}
          svgClassName="w-5 h-5 fill-[#00F]"
        />
      </div>
    </div>
  );
};
