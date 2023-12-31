import { ReactNode, useState, FC } from "react";
import { classNames } from "../helpers/helpers";

type TTab = {
  id: string;
  title: string;
  content: ReactNode;
  onClick?: () => void;
};

interface ITabs {
  tabs: TTab[];
  activeTabId?: string;
  className?: string;
  navClassName?: string;
  contentClassName?: string;
}

export const Tabs: FC<ITabs> = ({
  tabs,
  activeTabId,
  className,
  navClassName,
  contentClassName,
}) => {
  const [activeId, setActiveId] = useState(activeTabId || tabs[0].id);

  const onTabChange = (id: string) => () => {
    setActiveId(id);
  };

  return (
    <div className={classNames("flex gap-4 flex-col", className)}>
      {/* <div className={`flex gap-4 flex-col ${className}`}> */}
      <div className={classNames("flex space-x-4", navClassName)}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className="p-4 rounded-lg cursor-pointer hover:bg-blue-100 transition"
            onClick={onTabChange(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className={contentClassName}>
        {tabs.find((tab) => tab.id === activeId)?.content}
      </div>
    </div>
  );
};
