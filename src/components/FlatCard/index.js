import React from 'react';
import styles from './FlatCard.module.scss'
import CartService from '../../services/CartService';

function FlatCard(props) {
    const [isAdded, setIsAdded] = React.useState(false);

    React.useEffect(() => {
        localStorage.getItem("user") != null && CartService.getCart(props.user.id).then(
            (responce) => {
                setIsAdded(responce.data.find(obj => obj.name === (props.type + " квартира")) !== undefined ? true : false)
            })
    }, [])

    const addToCart = () => {
        const newElement = {
            userId: props.user.id,
            name: props.type + " квартира",
            price: props.price,
            unit: 'шт',
            count: 1,
            count1: 0,
            count2: 2,
        };
        setIsAdded(true);
        CartService.addElementToCart(newElement);
    };

    return (
        <div className={styles.card}>
            <h1>{props.type}</h1>
            <img width={285} src={props.imgUrl} alt="Flat" />
            <h5>{props.text}</h5>
            <div className={styles.priceorder}>
                <h2>{props.price} BYN</h2>
                {(localStorage.getItem("user") != null && props.user.active) && (isAdded
                    ? <div className={styles.buttonActive}>
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
    );
}

export default FlatCard;