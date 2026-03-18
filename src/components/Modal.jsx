import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export function Modal({ children, open, onClose, }) {
  const dialog = useRef();
  useEffect(() => {
    const currentDialog = dialog.current;
    if (open) {
      currentDialog.showModal();
    }
    return () => {
      currentDialog.close();
    };
  }, [open]);

  return createPortal(
    <dialog ref={dialog} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal"),
  );
}
