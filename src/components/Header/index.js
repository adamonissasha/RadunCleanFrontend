import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

function Header(props) {
    return (
        <header className={styles.header}>
            <div className={styles.name}>
                <button onClick={props.onClickMenu}>
                    <img src="/img/menu.png" alt='Menu' />
                </button>
                <Link to="/" style={{ textDecoration: 'none' }} className={styles.menu}>
                    <img src="/img/logo.png" alt='Logo' />
                    <div className={styles.title}>
                        <h1>RADUN'CLEAN</h1>
                        <p>Клининговая компания №1 в Беларуси</p>
                    </div>
                </Link>
            </div>

            <a className={styles.location} href='https://www.google.com/maps/place/%D0%A0%D0%B0%D0%
            B4%D1%83%D0%BD%D1%8C/@54.0476484,24.9816999,14z/data=!3m1!4b1!4m5!3m4!1s0x46de6eeef0e2c
            ebd:0xa60fcd69263be210!8m2!3d54.0530041!4d24.9976876?hl=ru' target='_blank' style={{ textDecoration: 'none' }}>
                <img src="/img/location.png" alt='location' />
                <h3>г.п. Радунь</h3>
            </a>


            <div className={styles.phone}>
                <img src="/img/phone.png" alt='phone' />
                <h3>+375 (29) 362-13-43</h3>
            </div>

            <div className={styles.usercart}>
                {props.role === "admin" ? <Link to="/admin">
                    <button>
                        <img src="/img/edit.png" alt='Edit' />
                    </button>
                </Link> : <div></div>
                }

                {localStorage.getItem("auth")
                    ?
                    <button onClick={() => {
                        localStorage.clear();
                        window.location.reload();
                    }}>
                        <img src="/img/logout.png" alt='Logout' />
                    </button>
                    : <Link to='/user'>
                        <button>
                            <img src="/img/user.png" alt='User' />
                        </button>
                    </Link>
                }


                <Link to="/cart">
                    <button>
                        <img src="/img/cart.png" alt='Cart' />
                    </button>
                </Link>
            </div>
        </header >
    );
}

export default Header;