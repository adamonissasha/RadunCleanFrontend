import React from 'react';
import styles from './DryCleaningCard.module.scss'
import CartService from '../../services/CartService'


function DryCleaningCard({ name, unit, imgUrl, price}) {
    const [isAdded, setIsAdded] = React.useState(false);
    const [count, setcount] = React.useState(1);

    const plus = () => {
        setcount(count === 20 ? count : count + 1);
    };

    const minus = () => {
        setcount(count === 1 ? count : count - 1);
    };

    const addToCart = (e) => {
        e.preventDefault();

        const newElement = {
            userId: 1,
            name: name,
            price: price,
            unit: unit,
            count: count,
        };
        setIsAdded(true);
        CartService.addElementToCart(newElement);
    };

    return (
        <div className={styles.card}>
            <h1>{name}</h1>
            <img src={imgUrl} alt="Service" />
            <div className={styles.counter}>
                <div className={styles.buttonminus}>
                    <button onClick={minus}>
                        <img src='/img/minus.png' alt='Minus' />
                    </button>
                </div>
                <h1>{count}</h1>
                <div className={styles.buttonplus}>
                    <button onClick={plus}>
                        <img src='/img/plus.png' alt='Plus' />
                    </button>
                </div>
            </div>
            <div className={styles.priceorder}>
                <h2>{price * count} BYN / {unit}</h2>
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

export default DryCleaningCard;