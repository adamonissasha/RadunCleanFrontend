import React from 'react';
import styles from './User.module.scss'
import LoginCard from '../../components/LoginCard';
import RegistrCard from '../../components/RegistrCard';


function User() {
    const [loginCardOpened, setLoginCardOpened] = React.useState(true);
    const [registerCardOpened, setRegisterCardOpened] = React.useState(false);

    const openLogin = () => {
        setLoginCardOpened(true);
        setRegisterCardOpened(false);
    };

    const openRegister = () => {
        setLoginCardOpened(false);
        setRegisterCardOpened(true);
    };

    return (
        <div className={styles.content}>
            <h1>Личный кабинет</h1>
            <div className={styles.buttons}>
                <button onClick={openLogin}>
                    <h2>ВОЙТИ</h2>

                </button>
                <button onClick={openRegister}>
                    <h2>ЗАРЕГИСТРИРОВАТЬСЯ</h2>
                </button>
            </div>
            {loginCardOpened ? <LoginCard /> : null}
            {registerCardOpened ? <RegistrCard /> : null}
        </div>
    );
}

export default User;
