import React from 'react';
import styles from './EditServices.module.scss'
import ProductService from '../../services/ProductService';

function EditServices() {
    const [services, setServices] = React.useState([])
    React.useEffect(() => {
        ProductService.getAllProducts()
            .then(
                (responce) => {
                    console.log(responce.data)
                    setServices(responce.data)
                })
    }, [])

    const [name, addName] = React.useState('');
    const [price, addPrice] = React.useState('');
    const [imgUrl, addImgUrl] = React.useState('');
    const [unit, addUnit] = React.useState('');

    const add = (e) => {
        e.preventDefault();

        const newService = {
            name: name,
            price: price,
            imgUrl: imgUrl,
            unit: unit,
        };

        ProductService.addProduct(newService);
        window.location.reload();
    };

    const deleteService = (id) => {
        ProductService.deleteProduct(id);
        window.location.reload();
    };

    return (
        <div className={styles.card}>
            <div className={styles.head}>
                <div className={styles.image}>
                    <h3>ФОТО</h3>
                </div>
                <div className={styles.name}>
                    <h3>НАЗВАНИЕ</h3>
                </div>
                <div className={styles.price}>
                    <h3>ЦЕНА</h3>
                </div>
            </div>
            {services.map((obj) => (
                <div className={styles.service}>
                    <div className={styles.image}>
                        <img src={obj.imgUrl} alt='Service' />
                    </div>
                    <div className={styles.name}>
                        <p>{obj.name}</p>
                    </div>
                    <div className={styles.price}>
                        <p>{obj.price} BYN / {obj.unit}</p>
                    </div>
                    <div className={styles.delete}>
                        <button onClick={() => deleteService(obj.id)}>
                            <img src='/img/delete.png' />
                        </button>
                    </div>
                </div>
            ))}
            <h2>Добавление новой услуги</h2>
            <div className={styles.element}>
                <h2>Название услуги:</h2>
                <input required
                    value={name}
                    onChange={(e) => addName(e.target.value)} />
            </div>
            <div className={styles.element}>
                <h2>Стоимость услуги:</h2>
                <input required
                    value={price}
                    onChange={(e) => addPrice(e.target.value)} />
            </div>
            <div className={styles.element}>
                <h2>Адрес картинки:</h2>
                <input required
                    value={imgUrl}
                    onChange={(e) => addImgUrl(e.target.value)} />
            </div>
            <div className={styles.element}>
                <h2>Ед. измерения:</h2>
                <input required
                    value={unit}
                    onChange={(e) => addUnit(e.target.value)} />
            </div>
            <button onClick={add}>
                <p>Добавить</p>
            </button>
        </div>
    );
}

export default EditServices;