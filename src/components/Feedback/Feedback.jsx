import { useState } from "react";
import CheckboxInput from "../Inputs/CheckboxInput";
import DropdownInput from "../Inputs/DropDownInput";
import TextArea from "../Inputs/TextArea";
import TextInput from "../Inputs/TextInput";
import Button from "../UI/Button";
import CloseSVG from "../UI/SVGs/CloseSVG";
import Chip from "../UI/Chip";

function Feedback(props) {
  const [activeChip, setActiveChip] = useState("reviews");
  const [isChecked, setIsChecked] = useState(false)

  function chipClickHandler(name) {
    setActiveChip(name);
  }

  return (
    <div className="feedback">
      <h1 className="feedback__title">Feedback</h1>
      <CloseSVG className="feedback__close" onClick={props.onClick} />
      <div className="feedback__inputs">
        <TextInput for="name" label="Your Name" />
        <TextInput type="email" for="email" label="Email address" />
        <TextInput type="tel" for="phone" label="Your phone" />
        <DropdownInput />
      </div>
      <div className="feedback__buttons">
        <Chip
          activeChip={activeChip}
          onClick={chipClickHandler}
          className="button--main feedback__button"
          name="reviews"
        >
          Reviews and suggestions
        </Chip>
        <Chip
          activeChip={activeChip}
          onClick={chipClickHandler}
          className="button--main feedback__button"
          name="content-question"
        >
          Question about content
        </Chip>
        <Chip
          activeChip={activeChip}
          onClick={chipClickHandler}
          className="button--main feedback__button"
          name="complaints"
        >
          Complaints
        </Chip>
        <Chip
          activeChip={activeChip}
          onClick={chipClickHandler}
          className="button--main feedback__button"
          name="other"
        >
          Other
        </Chip>
      </div>
      <div className="feedback__question">
        <TextArea for="question" type="text" label="Describe your question" />
      </div>
      <div className="feedback__send">
        <CheckboxInput
          className="feedback__checkbox"
          for="permission"
          label="Даю согласие на обработку"
          isChecked={isChecked}
          setIsChecked={setIsChecked}
        />
        <Button className="button--main">
          Send
        </Button>
      </div>
    </div>
  );
}

export default Feedback;
