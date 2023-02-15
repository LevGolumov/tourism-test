import { Fragment } from "react";
import ReactDOM from "react-dom";

function Backdrop(props) {
  return <div className="modal__backdrop" onClick={props.onClick}></div>;
}

function ModalOverlay(props) {
  return (
    <div className="modal">
      <div className="modal__content">{props.children}</div>
    </div>
  );
}

const PORTAL_ELEMENT = document.getElementById("overlays");

function Modal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClick={props.onClick}/>, PORTAL_ELEMENT)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        PORTAL_ELEMENT
      )}
    </Fragment>
  );
}

export default Modal;
