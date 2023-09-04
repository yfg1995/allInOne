import { FC } from "react";
import { Input } from "../../components/Input";
import { IconCheckMark } from "../../icons/IconCheckMark";
import { IconClose } from "../../icons/IconClose";

interface IHeaderInput {
  valueNewUser: string;
  onChangeHandler: (value: string) => void;
  onClickHandlerAdd: (bool: boolean) => () => void;
  onClickHandlerCancel: (bool: boolean) => () => void;
}

export const HeaderInput: FC<IHeaderInput> = ({
  valueNewUser,
  onChangeHandler,
  onClickHandlerAdd,
  onClickHandlerCancel,
}) => {
  return (
    <div className="flex items-center relative my-[3px]">
      <Input
        onChange={onChangeHandler}
        value={valueNewUser}
        className="w-full"
        inputClassName="pr-[70px] rounded-b-none border-slate-200 py-6"
      />

      <div className="flex items-center absolute right-3">
        {valueNewUser && (
          <IconCheckMark
            onClick={onClickHandlerAdd(true)}
            svgClassName="w-6 h-6 mr-2"
          />
        )}

        <IconClose
          onClick={onClickHandlerCancel(true)}
          svgClassName="w-5 h-5 fill-[#00F]"
        />
      </div>
    </div>
  );
};
