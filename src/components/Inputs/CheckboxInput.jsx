import { useState } from "react";
import TickSVG from "../UI/SVGs/TickSVG";

function CheckboxInput({isChecked, setIsChecked, ...props}) {
  const [tickStatus, setTickStatus] = useState("invisible");

  function mouseOverHandler() {
    if (!isChecked){
      setTickStatus("hover");
    }
  }

  function outHandler() {
    if (!isChecked){

      setTickStatus("invisible");
    }
  }

  function inputChangeHandler(){
    if (!isChecked){
      setTickStatus("active")
    } else {
      setTickStatus("hover")
    }
    setIsChecked((state) => !state)
  }

  return (
    <label className={props.className} htmlFor={props.for}>
      <input
        onMouseOver={mouseOverHandler}
        onMouseLeave={outHandler}
        onChange={inputChangeHandler}
        type="checkbox"
      />
      <span>
        {" "}
        <TickSVG
          status={tickStatus}
          className={`${props.className}--tick`}
        />{" "}
      </span>
      <p>{props.label}</p>
    </label>
  );
}

export default CheckboxInput;
