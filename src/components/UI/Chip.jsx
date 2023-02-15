function Chip(props) {
    return (
        <button
          className={`${props.className} ${props.activeChip === props.name && "feedback__button--active"}`}
          onClick={() => props.onClick(props.name)}
        >
          {props.children}
        </button>
      );
}

export default Chip;