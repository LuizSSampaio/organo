import "./style.css";

const DropDown = (props) => {
    const changeValue = (event) => {
        props.onChange(event.target.value);
    }

    return (
        <div className="dropdown">
            <label>{props.label}</label>
            <select value={props.value} onChange={changeValue} required={props.required}>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    );
}

export default DropDown;