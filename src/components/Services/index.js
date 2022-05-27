import {Link} from 'react-router-dom'
import styles from './Services.module.scss'

function Services(props) {
    return (
        <Link to={props.page}  style={{textDecoration: 'none'}} className={styles.card}>
            <img src={props.imgUrl} alt="Service" />
            <h1>{props.name}</h1>
        </Link>
    );
}

export default Services;