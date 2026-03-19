import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

export function Modal({ children, open, onClose, className = "" }) {
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
    <dialog ref={dialog} className={`${className}`} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal"),
  );
}
