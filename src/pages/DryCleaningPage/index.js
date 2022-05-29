import React from 'react';
import styles from './DryCleaning.module.scss'
import DryCleaningCard from '../../components/DryCleaningCard';
import ProductService from '../../services/ProductService';

function DryCleaning(props) {
    const [product, setProduct] = React.useState([])

    React.useEffect(() => {
        ProductService.getAllProducts()
            .then(
                (responce) => {
                    setProduct(responce.data)
                })

    }, [])

    return (
        <div className={styles.content}>
            <h1>Химчистка</h1>
            <div className={styles.cards}>
                {product.map((obj) => (
                    < DryCleaningCard
                        key={obj.id}
                        user={props.user}
                        name={obj.name}
                        price={obj.price}
                        imgUrl={obj.imgUrl}
                        unit={obj.unit}
                    />
                ))}
            </div>

        </div>
    );
}

export default DryCleaning;
