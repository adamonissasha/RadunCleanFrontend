import React from 'react';
import styles from './DryCleaningCard.module.scss'
import CartService from '../../services/CartService'


function DryCleaningCard({ name, unit, imgUrl, price, userId}) {
    const [isAdded, setIsAdded] = React.useState();
    const [count, setcount] = React.useState(1);

    React.useEffect(() => {
        CartService.getCart(userId).then(
            (responce) => {
                setIsAdded(responce.data.find(obj => obj.name === name) !== undefined  ? true : false)
                setcount(responce.data.find(obj => obj.name === name).count)
            })
    }, [])
    

    const plus = () => {
        setcount(isAdded || count === 20 ? count : count + 1);
    };

    const minus = () => {
        setcount(isAdded || count === 1 ? count : count - 1);
    };

    const addToCart = (e) => {
        e.preventDefault();

        const newElement = {
            userId: userId,
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