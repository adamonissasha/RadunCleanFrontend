import React from 'react';
import styles from './Kitchen.module.scss'
import CartService from '../../services/CartService';

function Kitchen() {
    const name = 'Уборка кухни';
    const price = 85;
    const [isAdded, setIsAdded] = React.useState(false);

    React.useEffect(() => {
        CartService.getCart().then(
            (responce) => {
                console.log(responce.data)
                setIsAdded(responce.data.find(obj => obj.name === name) !== undefined ? true : false)
            })
    }, [])

    const addToCart = () => {
        const newElement = {
            userId: 1,
            name: name,
            price: price,
            unit: "шт",
            count: 1,
        };

        setIsAdded(true);
        CartService.addElementToCart(newElement);
    };

    return (
        <div className={styles.content}>
            <h1>{name}</h1>
            <div className={styles.text}>
                <img src='/img/kitchen2.jpg' alt='Cleaner' />
                <div>
                    <p>Уборка всей кухни — это полноценная часовая уборка всей техники и мебели, которые есть в кухне. Помоем всю технику внутри и снаружи, протрем всю мебель, помоем пол, наведем порядок, выкинем мусор и заменим мусорные мешки.</p>
                    <div className={styles.time}>
                        <h2>Время уборки 5-6 часов</h2>
                    </div>
                    <div className={styles.price}>
                        <h2>Фиксированная цена {price} BYN</h2>
                    </div>
                </div>
            </div>
            <h1>Что вкючено в уборку?</h1>
            <div className={styles.element}>
                <img src='/img/kitchen-el1.png' alt='KithenElements' />
            </div>
            <div className={styles.element}>
                <img src='/img/kitchen-el2.png' alt='KithenElements' />
            </div>
            <div className={styles.element3}>
                <img src='/img/kitchen-el3.png' alt='KithenElements' />
            </div>
            {isAdded ?
                <div className={styles.buttonActive}>
                    <button>
                        <h2>В корзине</h2>
                    </button>
                </div> :
                <button className={styles.orderbutton} onClick={addToCart}>
                    <h2>Заказать {price} BYN</h2>
                </button>
            }
        </div>

    );
}

export default Kitchen;
