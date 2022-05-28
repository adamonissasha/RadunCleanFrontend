import React from 'react';
import styles from './Office.module.scss';
import CartService from '../../services/CartService';

function Office(props) {
    const name1 = "Разовая уборка офиса";
    const name2 = "Регулярная уборка офиса";
    const unit1 = 'шт';
    const unit2 = "месяц";
    const count = 1;
    const price1 = 60;
    const price2 = 500;
    const [isAdded1, setIsAdded1] = React.useState();
    const [isAdded2, setIsAdded2] = React.useState();

    React.useEffect(() => {
        CartService.getCart(props.userId).then(
            (responce) => {
                setIsAdded1(responce.data.find(obj => obj.name === "Разовая уборка офиса") !== undefined ? true : false)
                setIsAdded2(responce.data.find(obj => obj.name === "Регулярная уборка офиса") !== undefined ? true : false)
            })
    }, [])

    const addToCart1 = () => {
        const newElement = {
            userId: props.userId,
            name: name1,
            price: price1,
            unit: unit1,
            count: count,
        };
        setIsAdded1(true);
        CartService.addElementToCart(newElement);
    };

    const addToCart2 = () => {
        const newElement = {
            userId: props.userId,
            name: name2,
            price: price2,
            unit: unit2,
            count: count,
        };
        setIsAdded2(true);
        CartService.addElementToCart(newElement);
    };

    return (
        <div className={styles.content}>
            <h1>Уборка офиса</h1>
            <div className={styles.text}>
                <img src='/img/office2.jpeg' alt='Office' />
                <div>
                    <h1>Разовая уборка</h1>
                    <p>Разовая уборка включает в себя мытье полов, санузла, вытирание пыли,
                        выброс мусора, мытье посуды, замену туалетной бумаги.</p>
                    <div className={styles.time1}>
                        <h2>Время уборки 1.5-2 часа</h2>
                    </div>
                    <div className={styles.price1}>
                        <h2>Цена 60 BYN</h2>
                    </div>
                </div>
            </div>
            {isAdded1 ?
                <div className={styles.buttonActive}>
                    <button>
                        <h2>В корзине</h2>
                    </button>
                </div> :
                <button className={styles.orderbutton} onClick={addToCart1}>
                    <h2>Заказать {price1} BYN</h2>
                </button>
            }
            <div className={styles.text}>
                <img src='/img/office.jpg' alt='Office' />
                <div>
                    <h1>Регулярная уборка</h1>
                    <p>В течение одного месяца каждый день к приходу сотрудников клинер вымоет полы и санузел,
                        вытрет пыль, выбросит мусор и помоет посуду, заменит туалетную
                        бумагу, наведет порядок на кухне.</p>
                    <div className={styles.time2}>
                        <h2>Время уборки 1.5-2 часа в день</h2>
                    </div>
                    <div className={styles.price2}>
                        <h2>Цена 500 BYN за месяц</h2>
                    </div>
                </div>
            </div>
            {isAdded2 ?
                <div className={styles.buttonActive}>
                    <button>
                        <h2>В корзине</h2>
                    </button>
                </div> :
                <button className={styles.orderbutton} onClick={addToCart2}>
                    <h2>Заказать {price2} BYN</h2>
                </button>
            }
        </div>
    );
}

export default Office;