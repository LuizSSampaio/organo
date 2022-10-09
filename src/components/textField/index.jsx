import "./style.css"

const TextField = (props) => {
    const changeValue = (event) => {
        props.onChange(event.target.value)
    }

    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input value={props.value} onChange={changeValue} placeholder={props.placeholder} required={props.required}/>
        </div>
    );
}

export default TextField;