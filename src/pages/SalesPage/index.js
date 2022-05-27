import React from 'react';
import styles from './Sales.module.scss'

function Sales() {
    return (
        <div className={styles.content}>
            <h1>Акции</h1>
            <div className={styles.sale}>
                <img src='/img/start.png' alt='Start' />
                <div>
                    <h1>Сделай первый заказ!</h1>
                    <p>Промокод START! Закажи первую уборку в Radun'Clean и получи скидку 10%.
                        Акция действует с 01.01.2022г. по 31.12.2022г.</p>
                </div>
            </div>
            <div className={styles.sale}>
                <img src='/img/student.png' alt='Student' />
                <div>
                    <h1>Скидка для студентов!</h1>
                    <p>Закажи уборку в Radun'Clean в период сессии с 01.05.2022г. по 05.07.2020г.,
                        покажи клинерам свой студенческий билет и получи скидку 20%.</p>
                </div>
            </div>
            <div className={styles.sale}>
                <img src='/img/renovation.png' alt='Renovation' />
                <div>
                    <h1>Скидки для новоселов!</h1>
                    <p>Закажи уборку после ремонта в свою новую квартиру и получи скидку 20%
                        на следующий заказ в Radun'Clean. Акция действует с 01.03.2022г. по 30.10.2022г.</p>
                </div>
            </div>
        </div>
    );
}

export default Sales;