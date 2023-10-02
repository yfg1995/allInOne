import { FC, useState } from "react";
import { Button } from "../../components/Button";

interface IEntry {
  name: string;
  children?: IEntry[];
}

interface IDepth {
  entry: IEntry;
  depth: number;
}

export const Entry: FC<IDepth> = ({ entry, depth }) => {
  const [isExpended, setIsExpended] = useState(false);

  return (
    <div>
      {entry.children ? (
        <Button
          title={
            entry.children
              ? `${isExpended ? "-" : "+"} ${entry.name}`
              : entry.name
          }
          className="text-black m-0 border-0 p-0"
          onClick={() => setIsExpended(!isExpended)}
        >
          {entry.name}
        </Button>
      ) : (
        <div className="mb-1">{entry.name}</div>
      )}

      {isExpended && (
        <div style={{ paddingLeft: `${depth * 10}px` }}>
          {entry.children?.map((entry, idx) => (
            <Entry key={idx} entry={entry} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
};
