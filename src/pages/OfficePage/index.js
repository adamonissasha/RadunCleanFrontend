import React from 'react';
import styles from './Office.module.scss'

function Office() {
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
            <button className={styles.orderbutton}>
                <h2>Заказать</h2>
            </button>
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

            <button className={styles.orderbutton}>
                <h2>Заказать</h2>
            </button>
        </div>
    );
}

export default Office;