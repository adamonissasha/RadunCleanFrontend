import styles from './Slider.module.scss'
import { useState } from 'react';

function Slider() {
    const [idx, setIdx] = useState(0)
    const imgArr = ['img/kitchen1.jpg', 'img/bedroom1.jpg', 'img/hallway1.jpg', 'img/bathroom1.jpg']
    
    return (
        <div >
            <div className={styles.buttons}>
                <button onClick={() => setIdx(0)}>
                    <h3>КУХНЯ</h3>
                </button>
                <button onClick={() => setIdx(1)}>
                    <h3>КОМНАТА</h3>
                </button>
                <button onClick={() => setIdx(2)}>
                    <h3>КОРИДОР</h3>
                </button>
                <button onClick={() => setIdx(3)}>
                    <h3>ВАННАЯ</h3>
                </button>
            </div>
            <img className={styles.img} src={imgArr[idx]} alt='Room'/>
        </div>
    );
}

export default Slider;