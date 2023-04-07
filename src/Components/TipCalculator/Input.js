
const Input = props => {

    const inputChangeHandler = (event) => {
        props.onChangeHandler(+event.target.value);
    }

    return (
        <>
            <label htmlFor={props.id}>
                {props.label}
            </label>
            <input value={props.value} onChange={inputChangeHandler} type="number" id={props.id} />
        </>
    )
}

export default Input;