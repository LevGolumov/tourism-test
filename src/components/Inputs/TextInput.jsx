

function TextInput(props) {
    return <div>
        <label htmlFor={props.for} >{props.label}</label>
        <input type={props.type} placeholder="Placeholder" />
    </div>
}

export default TextInput;