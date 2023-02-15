function TickSVG(props) {
  let tickStyle;

  switch (props.status) {
    case "invisible":
      tickStyle = { transition: "all 0.2s ease-in-out", opacity: 0 };
      break;
    case "hover":
      tickStyle = {
        transition: "all 0.2s ease-in-out",
        stroke: "#659DBD",
        opacity: 1,
      };
      break;
    case "active":
      tickStyle = { transition: "all 0.2s ease-in-out", stroke: "#FFFFFF" };
      break;
    default:
      tickStyle = { opacity: 0, transition: "all 0.2s ease-in-out" };
      break;
  }

  return (
    <svg
      className={props.className}
      width="18"
      height="14"
      viewBox="0 0 18 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 6.33333L6.81818 13L17 1"
        style={tickStyle}
        strokeLinecap="round"
      />
    </svg>
  );
}

export default TickSVG;
