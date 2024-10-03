import React from "react";
import { useGlobalContext } from "./context";
import { FaTimes } from "react-icons/fa";

const Modal = () => {
  // ir buscar valores ao context
  return (
    <>
      <div
        className={
          "PUT-SOMTEHING BOOLEAN" ? "modal-overlay show-modal" : "modal-overlay"
        }
      >
        <div className="modal-container">
          <h3>Modal Content</h3>
          <button className="close-modal-btn">
            <FaTimes />
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
