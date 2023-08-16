import { FC, PropsWithChildren, useState } from "react";
import { Toggle } from "../../components/Toggle";
import { classNames } from "../../helpers/helpers";

interface TSwitcher extends PropsWithChildren {
  title: string;
  active?: boolean;
  className?: string;
}

export const Switcher: FC<TSwitcher> = ({
  title,
  children,
  active,
  className,
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
          "flex items-center w-full overflow-y-auto justify-center h-72 transition-all overflow-hidden",
          isActive ? "h-72" : "h-0"
        )}
      >
        <div className="h-72 w-full">{children}</div>
      </div>
    </div>
  );
};
