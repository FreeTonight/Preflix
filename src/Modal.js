import React from "react";
import "./Modal.css";

const Modal = (props) => {
  return (
    <div
      className={`modal ${props.show ? "show" : ""}`}
      onClick={props.onClose}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-btn" onClick={props.onClose}>
          {" "}
          Close{" "}
        </button>
        <div className="modal-title">
          <h3>{props.tilte}</h3>
        </div>

        <div className="modal-body">{props.children}</div>
      </div>
    </div>

  );
};

export default Modal;
