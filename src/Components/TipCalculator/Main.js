import styles from './Main.module.css';
import Input from './Input';
import Tip from './Tip';
import Calculator from './Calculator';
import { useState } from 'react';

const Main = () => {

    const [bill, setBill] = useState(0);
    const [tip, setTip] = useState(0);
    const [people, setPeople] = useState(0);
    let amountPerPerson = 0;
    let tipPerPerson = 0;

    const changeBill = (newBill) => {
        setBill(newBill);
    }

    const changeTip = (newTip) => {
        setTip(newTip);
    }

    const changePeopleAmount = (amount) => {
        setPeople(amount);
    }

    const calculateTip = () => {
        if (bill === 0 || people === 0) {
            return;
        }
        if (tip === 0) {
            tipPerPerson = 0;
        } else {
            tipPerPerson = bill * tip / 100 / people;
        }
        amountPerPerson = (bill + (bill * tip / 100)) / people;
    }

    calculateTip();

    const reset = () => {
        console.log('here');
        setBill(0);
        setPeople(0);
        setTip(0);
    }

    return (
        <div className={`${styles['main']}`}>
            <h1>Spli<br />tter</h1>
            <div className={`${styles.container}`}>
                <div className={`${styles['left-container']}`}>
                    <Input
                        onChangeHandler={changeBill}
                        value={bill}
                        id='bill'
                        label='Bill' />
                    <Tip
                        selectedTip={tip}
                        onChangeTip={changeTip} />
                    <Input
                        onChangeHandler={changePeopleAmount}
                        value={people}
                        id='number'
                        label='Number of People' />
                </div>
                <div className={`${styles['right-container']}`}>
                    <Calculator tip={tipPerPerson} total={amountPerPerson} reset={reset} />
                </div>
            </div>
        </div>
    )
}

export default Main;