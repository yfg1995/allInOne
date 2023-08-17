import { FC, PropsWithChildren, useState } from "react";
import { Toggle } from "../../components/Toggle";
import { classNames } from "../../helpers/helpers";

interface TSwitcher extends PropsWithChildren {
  title: string;
  active?: boolean;
  className?: string;
  checkedClass?: string;
  unCheckedClass?: string;
}

export const Switcher: FC<TSwitcher> = ({
  children,
  title,
  active,
  className,
  checkedClass,
  unCheckedClass,
}) => {
  const [isActive, setIsActive] = useState(active || false);
  const activeToggle = (bool: boolean) => {
    setIsActive(bool);
  };

  return (
    <div className={classNames("w-1/2", className)}>
      <div className="flex justify-between items-center border border-black p-8">
        <div>{title}</div>
        <Toggle switched={activeToggle} />
      </div>

      <div
        className={classNames(
          "flex items-center w-full overflow-y-auto justify-center transition-all overflow-hidden",
          isActive ? checkedClass : unCheckedClass
        )}
      >
        <div className="-mt-[4px] w-full">{children}</div>
      </div>
    </div>
  );
};
