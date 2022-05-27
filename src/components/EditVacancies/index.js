import React from 'react';
import styles from './EditVacancies.module.scss'
import VacancyService from '../../services/VacancyService';

function EditVacancies() {
    const [vacancies, setVacancies] = React.useState([])
    React.useEffect(() => {
        VacancyService.getAllVacancies()
            .then(
                (responce) => {
                    console.log(responce.data)
                    setVacancies(responce.data)
                })
    }, [])

    const [name, addName] = React.useState('');
    const [schedule, addSchedule] = React.useState('');
    const [salary, addSalary] = React.useState('');

    const add = (e) => {
        e.preventDefault();

        const newVacancy = {
            name: name,
            schedule: schedule,
            salary: salary,
        };

        VacancyService.addVacancy(newVacancy);
        window.location.reload();
    };

    const deleteVacancy = (id) => {
        VacancyService.deleteVacancy(id);
        window.location.reload();
    };

    return (
        <div className={styles.card}>
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
                            <p>{obj.name}</p>
                        </div>
                        <div className={styles.shedule}>
                            <p>{obj.schedule}</p>
                        </div>
                        <div className={styles.salary}>
                            <p>{obj.salary}</p>
                        </div>
                        <div className={styles.delete}>
                            <button onClick={() => deleteVacancy(obj.id)}>
                                <img src='/img/delete.png' />
                            </button>
                        </div>
                    </div>
                ))}
                <h2>Добавление новой вакансии</h2>
                <div className={styles.element}>
                    <h3>Вакансия:</h3>
                    <input required
                        value={name}
                        onChange={(e) => addName(e.target.value)} />
                </div>
                <div className={styles.element}>
                    <h3>График работы:</h3>
                    <input required
                        value={schedule}
                        onChange={(e) => addSchedule(e.target.value)} />
                </div>
                <div className={styles.element}>
                    <h3>Зарплата:</h3>
                    <input required
                        value={salary}
                        onChange={(e) => addSalary(e.target.value)} />
                </div>
                <button onClick={add}>
                    <p>Добавить</p>
                </button>
            </div>
        </div>
    );
}

export default EditVacancies;