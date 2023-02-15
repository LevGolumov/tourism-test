import { Fragment } from "react";

function TextArea(props) {
    return <Fragment>
        <label htmlFor={props.for} >{props.label}</label>
        <textarea type={props.type} placeholder="Placeholder" />
    </Fragment>
}

export default TextArea;