import React from 'react';
import styles from './Cart.module.scss'
import CartService from '../../services/CartService'
import OrderService from '../../services/OrderService'

function Cart(props) {
    const [sum, setSum] = React.useState(0);
    const [elements, setElements] = React.useState(localStorage.getItem("cart") !== null ? JSON.parse(localStorage.getItem('cart')) : [])
    const [adress, setAdress] = React.useState("")
    const [comment, setComment] = React.useState("")
    const [date, setDate] = React.useState("")
    const [time, setTime] = React.useState("")

    React.useEffect(() => {
        localStorage.getItem("user") != null && CartService.getCart(props.user.id).then((responce) => {
            console.log(responce.data)
            localStorage.setItem("cart", JSON.stringify(responce.data))
            setElements(JSON.parse(localStorage.getItem('cart')))
            CartService.getCartSum(props.user.id).then((res) => setSum(res.data))
        })
    }, [])

    const remove = (id) => {
        CartService.deleteCartElement(id);
        window.location.reload()
    }

    const addOrder = () => {
        localStorage.removeItem("cart")
        CartService.clearCart(props.user.id)
        elements.map(obj => {
            const newOrder = {
                userId: props.user.id,
                name: obj.name,
                price: obj.price * obj.count,
                count: obj.count,
                userFIO: props.user.fio,
                userPhone: props.user.phone,
                userEmail: props.user.email,
                address: adress,
                date: date,
                time: time,
                comment: comment,
                orderCreationDate: new Date().toJSON().slice(0, 10)
            };
            OrderService.addOrder(newOrder);
        })
    }

    return (
        <div className={styles.content}>
            <h1>Корзина</h1>
            {props.user.active ? (localStorage.getItem("user") != null ? ((elements.length !== 0)
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
                            <div key={obj.id} className={styles.card}>
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
                                    <button onClick={() => remove(obj.id)}>
                                        <img src='/img/delete.png' alt="delete" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={styles.total}>
                        <h2>Итого:</h2>
                        <div></div>
                        <b>{sum} BYN</b>
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
            )
                : <div className={styles.notAuth}>
                    <img src='/img/log-in.png' alt="LogIn" />
                    <h2>Зарегистируйтесь или войдите в аккаунт,</h2>
                    <h2> чтобы сделать заказ!</h2>
                </div>
            ) : <div className={styles.notAuth}>
                <img src='/img/block-user.png' alt="BlockUser" />
                <h2>Ваш аккаунт заблокирован! Для получения подробной</h2>
                <h2>информации обратитесь номеру телефона +375 (29) 362-13-43</h2>
            </div>
            }
        </div>
    );
}

export default Cart;