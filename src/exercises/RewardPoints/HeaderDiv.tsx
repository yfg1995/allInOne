// import { FC } from "react";
// import { IconUserPlus } from "../../icons/IconUserPlus";
// import { classNames } from "../../helpers/helpers";
// import { InputEdit } from "../../components/InputEdit";

// interface IHeaderDiv {
//   className?: string;
//   addIsActive: boolean;
//   valueNewUser: string;
//   onChangeHandler: () => void;
//   onClickHandlerAdd: (bool: boolean) => () => void;
//   onClickHandlerCancel: (bool: boolean) => () => void;
//   onEditClickHandler: (bool: boolean) => () => void;
// }

// export const HeaderDiv: FC<IHeaderDiv> = ({
//   className,
//   valueNewUser,
//   addIsActive,
//   onChangeHandler,
//   onClickHandlerCancel,
//   onClickHandlerAdd,
//   onEditClickHandler,
// }) => {
//   return (
//     addIsActive ? (
//       <InputEdit
//         className="h-8 -mt-[3px]"
//         valueNewUser={valueNewUser}
//         onChangeHandler={onChangeHandler}
//         onClickHandlerAdd={onClickHandlerAdd}
//         onClickHandlerCancel={onClickHandlerCancel}
//       />
//     ) : (
//       <div className="flex items-center -mt-[3px] justify-between border rounded-lg bg-slate-50 rounded-b-none border-slate-200 py-2 px-5">
//         <h2 className="font-bold select-none">Profile name</h2>

//         <IconUserPlus
//           onClick={onEditClickHandler}
//           svgClassName="w-8 h-8 fill-[#00F] hover:scale-110"
//         />
//       </div>
//     )
//   );
// };

export const HeaderDiv = () => {
  return <div>HeaderDiv</div>;
};
