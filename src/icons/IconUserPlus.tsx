import { FC } from "react";

interface IIconUserPlus {
  className?: string;
}

export const IconUserPlus: FC<IIconUserPlus> = ({ className }) => {
  return (
    <svg viewBox="0 0 64 64" className={className}>
      <path
        d="M27.865 31.758C33.5972 31.758 38.244 27.1112 38.244 21.379C38.244 15.6468 33.5972 11 27.865 11C22.1328 11 17.486 15.6468 17.486 21.379C17.486 27.1112 22.1328 31.758 27.865 31.758Z"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M40 36.346C37.0313 33.3973 33.0142 31.7466 28.83 31.756H26.9C22.6831 31.756 18.6388 33.4312 15.657 36.413C12.6752 39.3948 11 43.4391 11 47.656V52.516H44.73V51.756"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M48.621 38.146V46.123"
        strokeWidth="4"
        stroke="#00F"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M52.609 42.134H44.632"
        strokeWidth="4"
        stroke="#00F"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
