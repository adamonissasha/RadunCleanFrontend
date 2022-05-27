import React from 'react';
import styles from './HouseCard.module.scss'

function HouseCard() {
    const [isAdded, setIsAdded] = React.useState();
    const [countRooms, setCountRooms] = React.useState(0);
    const [countBathrooms, setCountBathrooms] = React.useState(0);
  
    const plusRoom = () => {
        setCountRooms(countRooms === 5 ? countRooms : countRooms + 1);
    };

    const minusRoom = () => {
        setCountRooms(countRooms === 0 ? countRooms : countRooms - 1);
    };

    const plusBathroom = () => {
        setCountBathrooms(countBathrooms === 5 ? countBathrooms : countBathrooms + 1);
    };

    const minusBathroom = () => {
        setCountBathrooms(countBathrooms === 0 ? countBathrooms : countBathrooms - 1);
    };

    return (
        <div className={styles.card}>
            <h1>Частный дом</h1>
            <div className={styles.counters}>
                <div className={styles.rooms}>
                    <h4>КОМНАТЫ</h4>
                    <div className={styles.counter}>
                        <div className={styles.buttonminus}>
                            <button onClick={minusRoom}>
                                <img src='/img/minus.png' alt='Minus' />
                            </button>
                        </div>
                        <h1>{countRooms}</h1>
                        <div className={styles.buttonplus}>
                            <button onClick={plusRoom}>
                                <img src='/img/plus.png' alt='Plus' />
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles.rooms}>
                    <h4>САНУЗЛЫ</h4>
                    <div className={styles.counter}>
                        <div className={styles.buttonminus}>
                            <button  onClick={minusBathroom}>
                                <img src='/img/minus.png' alt='Minus' />
                            </button>
                        </div>
                        <h1>{countBathrooms}</h1>
                        <div className={styles.buttonplus}>
                            <button  onClick={plusBathroom}>
                                <img src='/img/plus.png' alt='Plus' />
                            </button>
                        </div>

                    </div>
                </div>
            </div>
            <h5>В стоимость включена разовая уборка указанного количества
                комнат и санузлов, кухни и коридора</h5>
            <div className={styles.priceorder}>
                <h2>99 BYN</h2>
                {isAdded ?
                    <div className={styles.buttonActive}>
                        <button>
                            <img src='/img/done.png' />
                        </button>
                    </div> :
                    <button onClick={() => setIsAdded(true)}>
                        <img src='/img/plus.png' />
                    </button>
                }
            </div>
        </div>
    );
}

export default HouseCard;