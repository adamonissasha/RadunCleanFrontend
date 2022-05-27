import styles from './Reviews.module.scss'
import React from 'react';
import ReviewService from '../../services/ReviewService.js';


const Rewiews = () => {
    const [idx, setIdx] = React.useState(0)
    const [reviews, setReviews] = React.useState([])
    React.useEffect(() => {
        ReviewService.getAllReviews()
            .then(
                (responce) => {
                    console.log(responce.data)
                    setReviews(responce.data)
                })
    }, [])

    const [name, addName] = React.useState('');
    const [text, addText] = React.useState('');
    const [imgUrl1, addImgUrl1] = React.useState('');
    const [imgUrl2, addImgUrl2] = React.useState('');

    const add = (e) => {
        e.preventDefault();

        const newProduct = {
            name: name,
            review: text,
            imgUrl1: imgUrl1,
            imgUrl2: imgUrl2
        };

        ReviewService.addReview(newProduct);
        window.location.reload();
    };


    return (
        <div>
            <div className={styles.card}>
                <div className={styles.buttons}>
                    <button onClick={() => setIdx(idx === 0 ? reviews.length - 1 : idx - 1)}>
                        <img src='/img/left.png' alt='Left' />
                    </button>
                </div>
                {reviews.length && (reviews[idx].imgUrl1 != '' || reviews[idx].imgUrl2 != '')&& 
                <div className={styles.imgs}>
                    <img src={reviews.length && reviews[idx].imgUrl1} alt='Review' />
                    <img src={reviews.length && reviews[idx].imgUrl2} alt='Review' />
                </div>}

                <div className={styles.text}>
                    <h1>{reviews.length && reviews[idx].name}</h1>
                    <p>{reviews.length && reviews[idx].review}</p>
                </div>
                <div className={styles.buttons}>
                    <button onClick={() => setIdx(idx === reviews.length - 1 ? 0 : idx + 1)}>
                        <img src='/img/right.png' alt='Right' />
                    </button>
                </div>
            </div>
            <h1>Добавить отзыв</h1>
            <div className={styles.addCard}>
                <div className={styles.element1}>
                    <h2>Имя:</h2>
                    <input
                        required
                        value={name}
                        onChange={(e) => addName(e.target.value)} />
                </div>
                <div className={styles.element1}>
                    <h2>Отзыв:</h2>
                    <input
                        required
                        value={text}
                        onChange={(e) => addText(e.target.value)} />
                </div>
                <div className={styles.element2}>
                    <h2>Фото ДО:</h2>
                    <input
                        required
                        value={imgUrl1}
                        onChange={(e) => addImgUrl1(e.target.value)} />
                    <button>
                        <img src='/img/image.png' />
                    </button>
                </div>
                <div className={styles.element2}>
                    <h2>Фото ПОСЛЕ:</h2>
                    <input
                        required
                        value={imgUrl2}
                        onChange={(e) => addImgUrl2(e.target.value)} />
                    <button>
                        <img src='/img/image.png' />
                    </button>
                </div>
                <button onClick={add}>
                    <h2>Добавить отзыв</h2>
                </button>
            </div>
        </div>

    );
}

export default Rewiews;