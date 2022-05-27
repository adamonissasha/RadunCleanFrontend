import React from 'react';
import styles from './Vacancy.module.scss'
import VacancyService from '../../services/VacancyService';

function Vacancy() {
    const [vacancies, setVacancies] = React.useState([])
    React.useEffect(() => {
        VacancyService.getAllVacancies()
            .then(
                (responce) => {
                    console.log(responce.data)
                    setVacancies(responce.data)
                })
    }, [])

    return (
        <div className={styles.content}>
            <h1>Работа в Radun'Clean</h1>
            <div className={styles.text}>
                <img src='/img/cleaner.jpg' alt='Cleaner' />
                <p>Мы находимся в постоянном поиске новых работников для нашей команды. Radun'Clean занимается уборкой квартир и частных домов, офисов, помещений после ремонта, является мастером своего дела в мойке окон и химчистке мебели. Присоединяйся к Radun'Clean!</p>
            </div>
            <h1>Что мы предлагаем клинерам?</h1>
            <div className={styles.circles}>
                <div className={styles.circle}>
                    <h3>Стабильный заработок с еженедельными выплатами</h3>
                </div>
                <div className={styles.circle}>
                    <h3>Вы сами выбираете удобное время и место работы</h3>
                </div>
                <div className={styles.circle}>
                    <h3>Вы работаете самостоятельно, у вас нет проверяющих</h3>
                </div>
                <div className={styles.circle}>
                    <h3>Вы сразу знаете, сколько заработаете на каждом заказе</h3>
                </div>
            </div>
            <div className={styles.circles}>
                <div className={styles.circle}>
                    <h3>У вас официальное оформление на работе и доход</h3>
                </div>
                <div className={styles.circle}>
                    <h3>Вы можете слушать подкасты и аудиокниги во время работы</h3>
                </div>
                <div className={styles.circle}>
                    <h3>Вы можете приезжать в офис только раз в неделю</h3>
                </div>
            </div>
            <h1>Вакансии</h1>
            <div className={styles.vacancies}>
                <div className={styles.head} >
                    <div className={styles.name}>
                        <h1>ВАКАНСИЯ</h1>
                    </div>
                    <div className={styles.shedule}>
                        <h1>ГРАФИК РАБОТЫ</h1>
                    </div>
                    <div className={styles.salary}>
                        <h1>ЗАРПЛАТА</h1>
                    </div>
                </div>
                {vacancies.map((obj) => (
                    <div className={styles.vacancy} >
                        <div className={styles.name}>
                            <h1>{obj.name}</h1>
                        </div>
                        <div className={styles.shedule}>
                            <h1>{obj.schedule}</h1>
                        </div>
                        <div className={styles.salary}>
                            <h1>{obj.salary}</h1>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.number}>
                <p>По вопросам работы в компании Radun'Clean звоните по номеру телефона +375 (29) 362-13-43.</p>
            </div>
        </div>
    );
}

export default Vacancy;