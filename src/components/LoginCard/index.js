import React from 'react';
import styles from './LoginCard.module.scss'
import { useNavigate } from 'react-router-dom';
import AuthService from '../../services/AuthService';


function LoginCard(props) {
  const [email, addEmail] = React.useState();
  const [password, addPassword] = React.useState();

  const navigator = useNavigate();

  const pass = () => {
    var a = document.getElementById("password-input");
    var b = document.getElementById("eye");
    if (a.type == "password") {
      a.type = "text";
      b.src = "/img/hidden.png";
    } else {
      a.type = "password";
      b.src = "/img/eye.png";
    }
  }

  const postCustomerData = () => {
    const Customer = {
      email: email,
      password: password,
    };

    AuthService.login(Customer).then(
      (res) => {
        localStorage.setItem("user", JSON.stringify(res));
        localStorage.setItem("auth", JSON.stringify(true));
        // props.setUser(JSON.parse(localStorage.getItem('user').id))
        navigator("/");
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
      <div className={styles.pass}>
        <h2>Пароль:</h2>
        <input
          required
          type='password'
          id='password-input'
          name='password'
          value={password}
          onChange={(e) => addPassword(e.target.value)}>
        </input>
        <button onClick={pass}><img src='/img/eye.png' id='eye' /></button>

      </div>
      <button onClick={postCustomerData}>
        <h2>Войти</h2>
      </button>
    </div>
  );
}

export default LoginCard;