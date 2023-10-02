import { FC } from "react";
import { Entry } from "./Depth";

const files = {
  children: [
    {
      name: "node_modules",
      children: [
        {
          name: "joi", // validation library you can use in JS
          children: [
            {
              name: "node_modules",
            },
            {
              name: "package.json",
            },
          ],
        },
      ],
    },
    {
      name: "package.json",
    },
    {
      name: "vite.config.ts",
    },
  ],
};

export const IntermediateReactInterviewChallenge: FC = () => {
  return (
    <div>
      {files.children.map((entry, idx) => (
        <Entry key={idx} entry={entry} depth={1} />
      ))}
    </div>
  );
};
