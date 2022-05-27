import { Link } from 'react-router-dom'
import styles from './Footer.module.scss'

function Footer(props) {
    return (
        <footer className={styles.footer}>
            <div className={styles.title}>
                <h1>RADUN'CLEAN</h1>
                <h3>Клининговая компания №1 в Беларуси</h3>
                <p>© 2016-2021, Radun'Clean</p>
            </div>
            <div className={styles.links}>
                <Link onClick={props.onClickMenu} to='/' style={{textDecoration: 'none'}}><h3>Главная</h3></Link>
                <Link onClick={props.onClickMenu} to='/about' style={{textDecoration: 'none'}}><h3>О нас</h3></Link>
                <Link onClick={props.onClickMenu} to='/vacancy' style={{textDecoration: 'none'}}><h3>Вакансии</h3></Link>
                <Link onClick={props.onClickMenu} to='/reviews' style={{textDecoration: 'none'}}><h3>Отзывы</h3></Link>
                <Link onClick={props.onClickMenu} to='/sales' style={{textDecoration: 'none'}}><h3>Акции</h3></Link>
            </div>
            <div className={styles.links}>
                <Link onClick={props.onClickMenu} to='/flat-house' style={{textDecoration: 'none'}}><h3>Уборка квартиры/дома</h3></Link>
                <Link onClick={props.onClickMenu} to='/office' style={{textDecoration: 'none'}}><h3>Уборка офиса</h3></Link>
                <Link onClick={props.onClickMenu} to='/kitchen' style={{textDecoration: 'none'}}><h3>Уборка кухни</h3></Link>
                <Link onClick={props.onClickMenu} to='/repair' style={{textDecoration: 'none'}}><h3>Уборка после ремонта</h3></Link>
                <Link onClick={props.onClickMenu} to='/window' style={{textDecoration: 'none'}}><h3>Мытье окон</h3></Link>
                <Link onClick={props.onClickMenu} to='/dry-cleaning' style={{textDecoration: 'none'}}><h3>Химчистка мебели</h3></Link>
            </div>
            <div className={styles.info}>
                <div className={styles.phone}>
                    <img src="/img/phone.png" alt='Phone' />
                    <h3>+375 (29) 362-13-43</h3>
                </div>
                <div className={styles.email}>
                    <img src="/img/letter.png" alt='Letter' />
                    <h3>info@radunclean.by</h3>
                </div>
                <div className={styles.networks}>
                    <a href='https://vk.com/adamonissasha' target="_blank"><img src="/img/vkontakte.png" alt='Vkontakte' /></a>
                    <a href='https://instagram.com/adamonis_sasha' target="_blank"><img src="/img/instagram.png" alt='Instagram' /></a>
                    <a href='https://t.me/adamonis_sasha' target="_blank"><img src="/img/telegram.png" alt='Telegram' /></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;