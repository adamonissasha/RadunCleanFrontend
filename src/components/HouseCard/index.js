import React from 'react';
import styles from './HouseCard.module.scss'
import CartService from '../../services/CartService'

function HouseCard() {
    const name = "Уборка дома";
    const unit = 'шт';
    const count = 1;
    const startPrice = 32;
    const priceRoom = 20;
    const priceBathroom = 7;
    const [isAdded, setIsAdded] = React.useState();
    const [countRooms, setCountRooms] = React.useState(1);
    const [countBathrooms, setCountBathrooms] = React.useState(1);

    React.useEffect(() => {
        CartService.getCart().then(
            (responce) => {
                console.log(responce.data)
                setIsAdded(responce.data.find(obj => obj.name === name) !== undefined ? true : false)
                setCountBathrooms(responce.data.find(obj => obj.name === name).count2)
                setCountRooms(responce.data.find(obj => obj.name === name).count1)
            })
    }, [])

    const addToCart = () => {
        const newElement = {
            userId: 1,
            name: name,
            price: startPrice + countRooms * priceRoom + countBathrooms * priceBathroom,
            unit: unit,
            count: count,
            count1: countRooms, 
            count2 : countBathrooms
        };
        // localStorage.setItem("CountRooms", countRooms);
        // localStorage.setItem("CountBathrooms", countBathrooms);
        setIsAdded(true);
        CartService.addElementToCart(newElement);
    };

    const plusRoom = () => {
        setCountRooms(countRooms === 10 ? countRooms : countRooms + 1);
    };

    const minusRoom = () => {
        setCountRooms(countRooms === 1 ? countRooms : countRooms - 1);
    };

    const plusBathroom = () => {
        setCountBathrooms(countBathrooms === 5 ? countBathrooms : countBathrooms + 1);
    };

    const minusBathroom = () => {
        setCountBathrooms(countBathrooms === 1 ? countBathrooms : countBathrooms - 1);
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
                            <button onClick={minusBathroom}>
                                <img src='/img/minus.png' alt='Minus' />
                            </button>
                        </div>
                        <h1>{countBathrooms}</h1>
                        <div className={styles.buttonplus}>
                            <button onClick={plusBathroom}>
                                <img src='/img/plus.png' alt='Plus' />
                            </button>
                        </div>

                    </div>
                </div>
            </div>
            <h5>В стоимость включена разовая уборка указанного количества
                комнат и санузлов, кухни и коридора</h5>
            <div className={styles.priceorder}>
                <h2>{startPrice + countRooms * priceRoom + countBathrooms * priceBathroom} BYN</h2>
                {isAdded ?
                    <div className={styles.buttonActive}>
                        <button>
                            <img src='/img/done.png' />
                        </button>
                    </div> :
                    <button onClick={addToCart}>
                        <img src='/img/plus.png' />
                    </button>
                }
            </div>
        </div>
    );
}

export default HouseCard;