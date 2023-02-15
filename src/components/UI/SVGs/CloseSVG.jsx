import { useState } from "react";

function CloseSVG(props) {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const strokeCircle = isHovered ? "#659DBD" : "#EAEAEA";
  const fill = isActive ? "#659DBD" : "none";

  let strokeCross;

  if (!isHovered) {
    strokeCross = "#EAEAEA";
  } else if (isHovered && !isActive) {
    strokeCross = "#659DBD";
  } else {
    strokeCross = "#FFFFFF";
  }

  const crossStyle = { stroke: strokeCross };
  const circleStyle = { fill: fill, stroke: strokeCircle };

  function hoverHandler() {
    setIsHovered(true);
  }

  function outHandler() {
    setIsHovered(false);
    if (isActive) {
      setIsActive(false);
    }
  }

  function clickHandler() {
    setIsActive(true);
  }

  return (
    <svg
      onClick={props.onClick}
      onMouseDown={clickHandler}
      onMouseOver={hoverHandler}
      onMouseLeave={outHandler}
      className={props.className}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="20"
        cy="20"
        r="19.5"
        transform="rotate(90 20 20)"
        style={circleStyle}
      />
      <path
        d="M27 13L13 27M13 13L27 27"
        style={crossStyle}
        strokeLinecap="round"
      />
    </svg>
  );
}

export default CloseSVG;
