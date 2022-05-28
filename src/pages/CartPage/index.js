import React from 'react';
import styles from './Cart.module.scss'
import CartService from '../../services/CartService'
import OrderService from '../../services/OrderService'

function Cart(props) {
    const [sum, setSum] = React.useState(0);
    const [elements, setElements] = React.useState([])
    const [adress, setAdress] = React.useState("")
    const [comment, setComment] = React.useState("")
    const [date, setDate] = React.useState("")
    const [time, setTime] = React.useState("")
    const user = JSON.parse(localStorage.getItem('user'))

    React.useEffect(() => {
        props.auth && CartService.getCart(user.id).then((responce) => {
            localStorage.setItem("cart", JSON.stringify(responce.data))
            console.log(responce.data)
            setElements(responce.data)
            CartService.getCartSum(user.id).then((res) => setSum(res.data))
        })
    }, [])

    const deleteCartElement = (id) => {
        CartService.deleteCartElement(id);
        window.location.reload();
    };

    const addOrder = () => {
        localStorage.removeItem("cart")
        CartService.clearCart(user.id)
        elements.map(obj => {
            const newOrder = {
                userId: user.id,
                name: obj.name,
                price: obj.price * obj.count,
                count: obj.count,
                userFIO : user.fio,
                userPhone : user.phone,
                userEmail: user.email,
                address: adress,
                date: date,
                time: time,
                comment: comment,
                orderCreationDate: new Date().toJSON().slice(0,10)
            };
            OrderService.addOrder(newOrder);
        })
    }

    return (
        <div className={styles.content}>
            <h1>Корзина</h1>
            {elements.length !== 0
                ?
                <div>
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
                                        <img src='/img/delete.png' alt="delete" />
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
                    <form onSubmit={addOrder}>
                        <div className={styles.info}>
                            <div className={styles.element}>
                                <h2>Адрес:</h2>
                                <input required
                                    value={adress}
                                    onChange={(e) => setAdress(e.target.value)} />
                            </div>
                            <div className={styles.element}>
                                <h2>Дата:</h2>
                                <input
                                    required
                                    type="date"
                                    max="2022-07-30"
                                    min="2022-06-03"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)} />
                            </div>
                            <div className={styles.element}>
                                <h2>Время:</h2>
                                <input
                                    required
                                    type="time"
                                    max='20:00'
                                    min='09:00'
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                />
                            </div>
                            <div className={styles.element}>
                                <h2>Комментарий:</h2>
                                <input
                                    required
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)} />
                            </div>
                        </div>
                        <div className={styles.orderbutton}>
                            <button>
                                <h2>Оформить заказ</h2>
                            </button>
                        </div>
                    </form>

                </div>
                : <div className={styles.emptyCart}>
                    <div>
                        <div className={styles.image}><img src='/img/emptyCart.png' alt='Empty Cart' /></div>
                        <h2>Ваша корзина пуста!</h2>
                    </div>
                </div>
            }
        </div>
    );
}

export default Cart;