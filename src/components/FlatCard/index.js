import React from 'react';
import styles from './FlatCard.module.scss'

function FlatCard(props) {
    const [isAdded, setIsAdded] = React.useState(false);

    return (
        <div className={styles.card}>
            <h1>{props.type}</h1>
            <img width={285} src={props.imgUrl} alt="Flat" />
            <h5>{props.text}</h5>
            <div className={styles.priceorder}>
                <h2>{props.price} BYN</h2>
                {isAdded ?
                    <div className={styles.buttonActive}>
                        <button>
                            <img src='/img/done.png' />
                        </button>
                    </div> :
                    <button onClick={() => setIsAdded(true)}>
                        <img src='/img/plus.png' />
                    </button>
                }
            </div>
        </div>
    );
}

export default FlatCard;