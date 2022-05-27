import React from 'react';
import styles from './Window.module.scss'
import CartService from '../../services/CartService';

function Window() {
    const [isAdded, setIsAdded] = React.useState();
    const [countWindows, setCountWindows] = React.useState(1);
    const name = 'Мытье окон';
    const price = 12;

    const plusWindow = () => {
        setCountWindows(countWindows === 20 ? countWindows : countWindows + 1);
    };

    const minusWindow = () => {
        setCountWindows(countWindows === 1 ? countWindows : countWindows - 1);
    };

    const addToCart = () => {
        const newElement = {
            userId: 1,
            name: name,
            price: price,
            unit: "шт",
            count: countWindows,
        };
        setIsAdded(true);
        CartService.addElementToCart(newElement);
    };

    return (
        <div className={styles.content}>
            <h1>Мытье окон</h1>
            <div className={styles.text}>
                <img src='/img/window.png' alt='Window' />
                <div>
                    <p>Услуга мытья окон включает в себя мытье стекл с обеих сторон, мытье оконной рамы с двух сторон. Также мы протираем подоконники и убираем разводы. 1 балкон считается как 2 стандартных окна.</p>
                    <div className={styles.time}>
                        <h2>Время уборки 15 минут / окно</h2>
                    </div>
                    <div className={styles.price}>
                        <h2>Фиксированная цена {price} BYN / окно</h2>
                    </div>
                </div>
            </div>
            <div className={styles.card}>
                <h4>ЗАКАЗАТЬ МЫТЬЕ ОКОН</h4>
                <div className={styles.counter}>
                    <div className={styles.buttonminus}>
                        <button onClick={minusWindow}>
                            <img src='/img/minus.png' alt='Minus' />
                        </button>
                    </div>
                    <h1>{countWindows}</h1>
                    <div className={styles.buttonplus}>
                        <button onClick={plusWindow}>
                            <img src='/img/plus.png' alt='Plus' />
                        </button>
                    </div>

                </div>
                <div className={styles.priceorder}>
                    <h2>{price * countWindows} BYN</h2>
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
        </div>
    );
}

export default Window;