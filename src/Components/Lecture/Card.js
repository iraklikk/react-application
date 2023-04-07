import { useState } from 'react';
import './Card.css';

const Card = (props) => {

    const [header, setHeader] = useState(props.data.header);

    const clickHandler = () => {
        setHeader(header === props.data.changedHeader ? props.data.header : props.data.changedHeader);
    }

    return (
        <div className="card">
            <h2>{header}</h2>
            <p>{props.data.p}</p>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default Card;