import { Link } from 'react-router-dom'
import styles from './Menu.module.scss'

function Menu(props) {
    return (
        <div className={styles.menu}>
            <div className={styles.links}>
                <div>
                    <h2>Информация</h2>
                    <div className={styles.info}>
                        <div>
                            <Link onClick={props.onClickMenu} to='/' style={{ textDecoration: 'none' }}><h3>Главная</h3></Link>
                            <Link onClick={props.onClickMenu} to='/about' style={{ textDecoration: 'none' }}><h3>О нас</h3></Link>
                            <Link onClick={props.onClickMenu} to='/vacancy' style={{ textDecoration: 'none' }}><h3>Вакансии</h3></Link>
                        </div>
                        <div>
                            <Link onClick={props.onClickMenu} to='/reviews' style={{ textDecoration: 'none' }}><h3>Отзывы</h3></Link>
                            <Link onClick={props.onClickMenu} to='/sales' style={{ textDecoration: 'none' }}><h3>Акции</h3></Link>
                        </div>
                    </div>
                </div>
                <div>
                    <h2>Уборка</h2>
                    <div className={styles.info}>
                        <div>
                            <Link onClick={props.onClickMenu} to='/flat-house' style={{ textDecoration: 'none' }}><h3>Уборка квартиры/дома</h3></Link>
                            <Link onClick={props.onClickMenu} to='/office' style={{ textDecoration: 'none' }}><h3>Уборка офиса</h3></Link>
                            <Link onClick={props.onClickMenu} to='/kitchen' style={{ textDecoration: 'none' }}><h3>Уборка кухни</h3></Link>
                        </div>
                        <div>
                            <Link onClick={props.onClickMenu} to='/repair' style={{ textDecoration: 'none' }}><h3>Уборка после ремонта</h3></Link>
                            <Link onClick={props.onClickMenu} to='/window' style={{ textDecoration: 'none' }}><h3>Мытье окон</h3></Link>
                            <Link onClick={props.onClickMenu} to='/dry-cleaning' style={{ textDecoration: 'none' }}><h3>Химчистка мебели</h3></Link>
                        </div>
                    </div>
                </div>
            </div>
            <button>
                <h2>Сделайте первый заказ!</h2>
                <div className={styles.sale}>
                    <img src='/img/start.png' alt='Start'/>
                    <p>Скидка 10% для новых клиентов по промокоду START!</p>
                </div>
            </button>
        </div>
    )
}

export default Menu;