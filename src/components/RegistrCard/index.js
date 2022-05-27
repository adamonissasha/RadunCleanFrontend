import React from 'react';
import styles from './RegistrCard.module.scss'
import UserService from '../../services/UserService.js'

function RegistrCard() {
    const [name, addName] = React.useState('');
    const [phone, addPhone] = React.useState('');
    const [email, addEmail] = React.useState('');
    const [password, addPassword] = React.useState('');

    const registration = (e) => {
        e.preventDefault();

        const newUser = {
            fio: name,
            phone: phone,
            email: email,
            password: password,
            active: true
        };

        UserService.addUser(newUser);
        window.location.reload();
    };

    return (
        <div className={styles.card}>
            <div className={styles.element}>
                <h2>ФИО:</h2>
                <input required
                    value={name}
                    onChange={(e) => addName(e.target.value)} />
            </div>
            <div className={styles.element}>
                <h2>Номер:</h2>
                <input required
                    value={phone}
                    onChange={(e) => addPhone(e.target.value)} />
            </div>
            <div className={styles.element}>
                <h2>E-mail:</h2>
                <input required
                    value={email}
                    onChange={(e) => addEmail(e.target.value)} />
            </div>
            <div className={styles.element}>
                <h2>Пароль:</h2>
                <input required
                    value={password}
                    onChange={(e) => addPassword(e.target.value)} />
            </div>
            <button onClick={registration}>
                <h2>Зарегистрироваться</h2>
            </button>
        </div>
    );
}

export default RegistrCard;