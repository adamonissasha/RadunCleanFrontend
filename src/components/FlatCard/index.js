import React from 'react';
import styles from './FlatCard.module.scss'
import CartService from '../../services/CartService';

function FlatCard(props) {
    const [isAdded, setIsAdded] = React.useState(false);

    React.useEffect(() => {
        CartService.getCart(props.userId).then(
            (responce) => {
                setIsAdded(responce.data.find(obj => obj.name === (props.type + " квартира")) !== undefined ? true : false)
            })
    }, [])

    const addToCart = () => {
        const newElement = {
            userId: props.userId,
            name: props.type + " квартира",
            price: props.price,
            unit: 'шт',
            count: 1,
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
                {isAdded
                    ? <div className={styles.buttonActive}>
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

export default FlatCard;