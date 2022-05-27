import React from 'react';
import styles from './DryCleaning.module.scss'
import DryCleaningCard from '../../components/DryCleaningCard';
import ProductService from '../../services/ProductService';
import CartService from '../../services/CartService';

function DryCleaning() {
    const [product, setProduct] = React.useState([])
    // const [isAdded, setIsAdded] = React.useState();

    React.useEffect(() => {
        ProductService.getAllProducts()
            .then(
                (responce) => {
                    setProduct(responce.data)
                })

    }, [])

    // const added = (name) => {
    //     CartService.getCart().then(
    //         (responce) => {
    //             console.log("hey")
    //             setIsAdded(responce.data.find(obj => obj.name === name) !== undefined ? true : false)
    //         })
    // };

    return (
        <div className={styles.content}>
            <h1>Химчистка</h1>
            <div className={styles.cards}>
                {product.map((obj) => (
                    < DryCleaningCard
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
