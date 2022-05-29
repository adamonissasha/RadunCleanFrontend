import React from 'react';
import styles from './DryCleaningCard.module.scss'
import CartService from '../../services/CartService'


function DryCleaningCard({ name, unit, imgUrl, price, user }) {
    const [isAdded, setIsAdded] = React.useState();
    const [count, setCount] = React.useState(1);

    React.useEffect(() => {
        localStorage.getItem("user") != null && CartService.getCart(user.id).then(
            (responce) => {
                setIsAdded(responce.data.find(obj => obj.name === name) !== undefined ? true : false)
                setCount(responce.data.find(obj => obj.name === name) !== undefined ? responce.data.find(obj => obj.name === name).count : 1)
            })
    }, [])


    const plus = () => {
        setCount(isAdded || count === 20 ? count : count + 1);
    };

    const minus = () => {
        setCount(isAdded || count === 1 ? count : count - 1);
    };

    const addToCart = (e) => {
        e.preventDefault();

        const newElement = {
            userId: user.id,
            name: name,
            price: price,
            unit: unit,
            count: count,
            count1: 0,
            count2: 0,
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
                {(localStorage.getItem("user") != null && user.active) && (isAdded ?
                    <div className={styles.buttonActive}>
                        <button>
                            <img src='/img/done.png' />
                        </button>
                    </div> :
                    <button onClick={addToCart}>
                        <img src='/img/plus.png' />
                    </button>)
                }
            </div>
        </div>
    );
}

export default DryCleaningCard;