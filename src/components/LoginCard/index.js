import React from 'react';
import styles from './LoginCard.module.scss'
import { useNavigate } from 'react-router-dom';
import AuthService from '../../services/AuthService';

function LoginCard() {
    const [email, addEmail] = React.useState();
    const [password, addPassword] = React.useState();
    
    const navigator = useNavigate();

    const postCustomerData = () => {
        // e.preventDefault();
    
        const Customer = {
            email: email,
          password: password,
        };
    
        AuthService.login(Customer).then(
          (res) => {
              console.log(res.data)
            localStorage.setItem("user", JSON.stringify(res));
            localStorage.setItem("auth", JSON.stringify(true));
            navigator("/");
            // setErrorMessage("");
            window.location.reload();
          },
          (error) => {
            // setErrorMessage(error.response.data.message);
          }
        );
      };

    return (
        <div className={styles.card}>
            <div className={styles.element}>
                <h2>E-mail:</h2>
                <input
                    required
                    value={email}
                    onChange={(e) => addEmail(e.target.value)} />
            </div>
            <div className={styles.element}>
                <h2>Пароль:</h2>
                <input required
                    value={password}
                    onChange={(e) => addPassword(e.target.value)} />
            </div>
            <button onClick={postCustomerData}>
                <h2>Войти</h2>
            </button>
        </div>
    );
}

export default LoginCard;