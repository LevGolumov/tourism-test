import Button from "../UI/Button";
import demo_text from "../demo_text/demo_text";
import Modal from "../UI/Modal";
import { useState } from "react";
import Feedback from "../Feedback/Feedback";

function Description() {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  function openModalHandler() {
    setModalIsOpen(true);
    document.body.style.overflow = "hidden";
  }

  function closeModalHandler() {
    setModalIsOpen(false);
    document.body.style.overflow = "unset";
  }

  return (
    <div className="description container">
      {modalIsOpen && (
        <Modal onClick={closeModalHandler}>
          {" "}
          <Feedback onClick={closeModalHandler} />{" "}
        </Modal>
      )}
      <div className="description__head">
        <h1 className="description__header">Walking in Old Tallinn</h1>
        <Button
          type="main-button"
          className="button--main description__button"
          onClick={openModalHandler}
        >
          Feedback
        </Button>
      </div>
      <div className="description__textblock">
      {demo_text.map((item, i) => (
        <p key={i} className="description__text">
          {item}
        </p>
      ))}
      </div>
      <div className="description__carousel">Pics Buttons</div>
    </div>
  );
}

export default Description;
