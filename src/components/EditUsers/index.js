import React from 'react';
import styles from './EditUsers.module.scss'
import UserService from '../../services/UserService';

function EditUsers(props) {
    const [users, setUsers] = React.useState([])
    React.useEffect(() => {
        UserService.getAllUsers()
            .then(
                (responce) => {
                    console.log(responce.data)
                    setUsers(responce.data)
                })
    }, [])

    const changeActivity = (id) => {
        console.log(id)
        UserService.changeUserActivity(id);
        window.location.reload();
    };

    return (
        <div className={styles.card}>
            <div className={styles.head}>
                <div className={styles.fio}>
                    <h3>ФИО</h3>
                </div>
                <div className={styles.phone}>
                    <h3>ТЕЛЕФОН</h3>
                </div>
                <div className={styles.email}>
                    <h3>ПОЧТA</h3>
                </div>
                <div className={styles.active}>
                    <h3>АКТИВНОСТЬ</h3>
                </div>
            </div>
            {users.map((obj) => (
                <div className={styles.user}>
                    <div className={styles.fio}>
                        <p>{obj.fio}</p>
                    </div>

                    <div className={styles.phone}>
                        <p>{obj.phone}</p>
                    </div>
                    <div className={styles.email}>
                        <p>{obj.email}</p>
                    </div>
                    <div className={styles.active}>
                        {obj.active ? <p>Активен</p> : <p>Не активен</p>}
                    </div>
                    <div className={styles.delete}>
                        <button onClick={() => changeActivity(obj.id)}>
                            <img src='/img/ban.png' />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default EditUsers;