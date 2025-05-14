import ReactDOM from "react-dom";
import React from "react";
import "../../styles/components/modal.scss"; 
import type { ModalProps } from "../../models/imodalprops";
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-wrapper">
      <div className="overlay" onClick={onClose}></div>
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>×</button>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root") as HTMLElement
  );
};

export default Modal;