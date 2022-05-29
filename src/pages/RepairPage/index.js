import React from 'react';
import styles from './Repair.module.scss'
import CartService from '../../services/CartService';

function Repair(props) {
    const price = 3;
    const unit = 'м2';
    const name = 'Уборка после ремонта';
    const [isAdded, setIsAdded] = React.useState();
    const [countRoom, setCountRoom] = React.useState(20);

    React.useEffect(() => {
        localStorage.getItem("user") != null && CartService.getCart(props.user.id).then(
            (responce) => {
                setIsAdded(responce.data.find(obj => obj.name === "Уборка после ремонта") !== undefined ? true : false)
                setCountRoom(responce.data.find(obj => obj.name === "Уборка после ремонта") !== undefined ? responce.data.find(obj => obj.name === "Уборка после ремонта").count : 1)
            })
    }, [])

    const plusRoom = () => {
        setCountRoom(countRoom === 200 || isAdded ? countRoom : countRoom + 1);
    };

    const minusRoom = () => {
        setCountRoom(countRoom === 20 || isAdded ? countRoom : countRoom - 1);
    };

    const addToCart = () => {
        const newElement = {
            userId: props.user.id,
            name: name,
            price: price,
            unit: unit,
            count: countRoom,
        };
        setIsAdded(true);
        CartService.addElementToCart(newElement);
    };

    return (
        <div className={styles.content}>
            <h1>Уборка помещений после ремонта</h1>
            <div className={styles.text}>
                <img src='/img/repair.jpg' alt='Office' />
                <div>
                    <p>Radun'Clean закончит ваш ремонт отличной уборкой! В услугу уборки после ремонта
                        входит мытье полов, плинтусов, подоконников, батарей, шкафов, техники,
                        очищение всех поверхностей от строительной пыли, вынос негабаритного мусора,
                        удаление пятен от краски и клея, чистка зеркал.
                    </p>
                    <div className={styles.time}>
                        <h2>Время уборки от 4 часов</h2>
                    </div>
                    <div className={styles.price}>
                        <h2>Цена {price} BYN / {unit}</h2>
                    </div>
                </div>
            </div>
            <div className={styles.coutercard}>
                <div className={styles.counters}>
                    <div className={styles.title}>
                        <h4>ПОМЕЩЕНИЕ, м2</h4>
                        <div className={styles.counter}>
                            <div className={styles.buttonminus}>
                                <button onClick={minusRoom}>
                                    <img src='/img/minus.png' alt='Minus' />
                                </button>
                            </div>
                            <h1>{countRoom}</h1>
                            <div className={styles.buttonplus}>
                                <button onClick={plusRoom}>
                                    <img src='/img/plus.png' alt='Plus' />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.priceorder}>
                    <h2>{price * countRoom} BYN</h2>
                    {(localStorage.getItem("user") != null && props.user.active) && (isAdded ?
                        <div className={styles.buttonActive}>
                            <button>
                                <img src='/img/done.png' />
                            </button>
                        </div> :
                        <button onClick={addToCart}>
                            <img src='/img/plus.png' />
                        </button>
                    )}
                </div>
            </div>
            <div className={styles.sale}>
                <img src='/img/renovation.png' alt='Renovation' />
                <div>
                    <h1>Скидки для новоселов!</h1>
                    <p>Закажи уборку после ремонта в свою новую квартиру и получи скидку 20%
                        на следующий заказ в Radun'Clean. Акция действует с 01.03.2022г. по 30.10.2022г.</p>
                </div>
            </div>
        </div>
    );
}

export default Repair;