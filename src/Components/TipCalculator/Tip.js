import styles from './Tip.module.css';

const Tip = props => {

    const changeTip = (tip) => {
        props.onChangeTip(tip);
    }

    const tips = [5, 10, 15, 25, 50];

    return (
        <div>
            <h2>Select tip %</h2>
            <div className={`${styles['tip-container']}`}>
                {tips.map((tip, index) => <span
                    className={`${tip === props.selectedTip ? styles['selected-tip'] : ''}`}
                    onClick={() => changeTip(tip)}
                    key={index}>{tip}%</span>)}
            </div>
        </div>
    )
}

export default Tip;