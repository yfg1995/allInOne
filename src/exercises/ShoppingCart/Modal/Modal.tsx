import { FC } from "react";
import { useModal } from "./useModal";

export const Modal: FC = () => {
  const { open, onOpen, onClose } = useModal();

  return (
    <div>
      {open ? <div>open</div> : <div>close</div>}
      <button
        onClick={() => {
          if (open) {
            onClose();
          }
          if (!open) {
            onOpen();
          }
        }}
      >
        click
      </button>
    </div>
  );
};
