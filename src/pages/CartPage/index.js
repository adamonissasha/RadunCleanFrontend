import React from 'react';
import styles from './Cart.module.scss'
import CartService from '../../services/CartService'

function Cart({ items = [] }) {
    const [sum, setSum] = React.useState(0);

    const [elements, setElements] = React.useState(items)
    React.useEffect(() => {
        CartService.getCart()
            .then(
                (responce) => {
                    console.log(responce.data)
                    setElements(responce.data)
                })

    }, [])

    const deleteCartElement = (id) => {
        CartService.deleteCartElement(id);
        window.location.reload();
    };

    return (
        <div className={styles.content}>
            <h1>Корзина</h1>
            <div className={styles.cards}>
                <div className={styles.head}>
                    <div className={styles.name}>
                        <h1>НАЗВАНИЕ</h1>
                    </div>
                    <div className={styles.price}>
                        <h1>ЦЕНА ЗА ЕД.</h1>
                    </div>
                    <div className={styles.count}>
                        <h1>КОЛИЧЕСТВО</h1>
                    </div>
                    <div className={styles.price}>
                        <h1>СТОИМОСТЬ</h1>
                    </div>
                    <div className={styles.delete}>
                        <h1>УДАЛИТЬ</h1>
                    </div>
                </div>
                {elements.map((obj) => (
                    <div className={styles.card}>
                        <div className={styles.name}>
                            <h1>{obj.name}</h1>
                        </div>
                        <div className={styles.price}>
                            <h2>{obj.price} BYN</h2>
                        </div>
                        <div className={styles.count}>
                            <h1>{obj.count} {obj.unit}</h1>
                        </div>
                        <div className={styles.price}>
                            <h2>{obj.price * obj.count} BYN</h2>
                        </div>
                        <div className={styles.delete}>
                            <button onClick={() => deleteCartElement(obj.id)}>
                                <img src='/img/delete.png' />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.total}>
                <ul>
                    <li>
                        <span>Итого:</span>
                        <div></div>
                        <b>{sum} BYN</b>
                    </li>
                </ul>
            </div>
            <button className={styles.orderbutton}>
                <h2>Оформить заказ</h2>
                <img src='/img/arrow.png' alt='Arrow' />
            </button>
        </div>
    );
}

export default Cart;