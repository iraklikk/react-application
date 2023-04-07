import classes from './Slider.module.css';
import image1 from './image-1.jpeg';
import image2 from './image-2.jpeg';
import image3 from './image-3.jpeg';
import image4 from './image-4.jpeg';
import { useState } from 'react';

const Slider = () => {

    const images = [image1, image2, image3, image4];
    const [wrapperPos, setWrapperPos] = useState(0);

    const changeSliderPosition = (dir, index) => {
        if (dir === 'right') {
            const index = wrapperPos / -100;
            if (index === images.length - 1) {
                setWrapperPos(0);
            } else {
                setWrapperPos(wrapperPos - 100);
            }
        } else if (dir === 'left') {
            if (wrapperPos == 0) {
                setWrapperPos(-100 * (images.length - 1));
            } else {
                setWrapperPos(wrapperPos + 100);
            }
        } else {
            setWrapperPos(index * -100);
        }
    }

    return (
        <div className={classes['image-container']}>
            <div style={{ left: `${wrapperPos}%` }} className={classes['image-wrapper']}>
                {images.map((image, index) =>
                    <img style={{ left: `${index * 100}%` }} key={'image' + index} src={image} />)}
            </div>
            <div onClick={() => changeSliderPosition('left')} className={`${classes.arrow} ${classes['left-arrow']}`}>{'<'}</div>
            <div onClick={() => changeSliderPosition('right')} className={`${classes.arrow} ${classes['right-arrow']}`}>{'>'}</div>
            <div className={classes["dot-container"]}>

                {images.map((image, index) =>
                    <div
                        onClick={() => changeSliderPosition('dot', index)}
                        key={'dot' + index}
                        className={`${classes["dot"]} ${wrapperPos / -100 === index && classes.select}`}></div>)}
            </div>
        </div>
    )
}

export default Slider;