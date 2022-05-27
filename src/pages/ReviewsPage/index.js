import React from 'react';
import styles from './Reviews.module.scss'
import Review from '../../components/Reviews';

function Reviews() {
    return (
        <div className={styles.content}>
            <h1>Отзывы наших клиентов</h1>
            <div className={styles.reviews}><Review /></div>
        </div>
    );
}

export default Reviews;
