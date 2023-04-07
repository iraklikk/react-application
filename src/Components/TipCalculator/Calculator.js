import styles from './Calculator.module.css';

const Calculator = props => {

    console.log(props);

    let tip = Math.floor(props.tip * 100) / 100;
    let total = Math.floor(props.total * 100) / 100;

    return (
        <div className={`${styles.container}`}>
            <div>
                <p>Tip Amount person</p>
                <p>{tip}</p>
            </div>
            <div>
                <p>Total person</p>
                <p>{props.total}</p>
            </div>
            <button onClick={props.reset}>reset</button>
        </div>
    )
}

export default Calculator;