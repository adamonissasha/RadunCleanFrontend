import React from 'react';
import styles from './Admin.module.scss'
import EditUsers from '../../components/EditUsers';
import EditServices from '../../components/EditServices';
import EditVacancies from '../../components/EditVacancies';

function Admin() {
    const [usersOpened, setUsersOpened] = React.useState(false);
    const [servicesOpened, setServicesOpened] = React.useState(false);
    const [vacanciesOpened, setVacanciesOpened] = React.useState(false);

    return (
        <div className={styles.content}>
            <h1>Администратор</h1>
            <button onClick={() => setUsersOpened(!usersOpened)}>
                <h3>Управление пользователями</h3>
            </button>
            {usersOpened ? <EditUsers /> : null}
            <button onClick={() => setServicesOpened(!servicesOpened)}>
                <h3>Управление услугами химчистки</h3>
            </button>
            {servicesOpened ? <EditServices /> : null}
            <button onClick={() => setVacanciesOpened(!vacanciesOpened)}>
                <h3>Управление вакансиями</h3>
            </button>
            {vacanciesOpened ? <EditVacancies /> : null}
        </div>
    );
}

export default Admin;