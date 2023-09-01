import { FC } from "react";

interface IEdit {
  className?: string;
}

export const IconEdit: FC<IEdit> = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path d="M15.586 3a2 2 0 0 1 2.828 0L21 5.586a2 2 0 0 1 0 2.828L19.414 10 14 4.586 15.586 3zm-3 3-9 9A2 2 0 0 0 3 16.414V19a2 2 0 0 0 2 2h2.586A2 2 0 0 0 9 20.414l9-9L12.586 6z" />
    </svg>
  );
};
