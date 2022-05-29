import React from 'react';
import styles from './FlatHouse.module.scss'
import FlatCard from '../../components/FlatCard';
import HouseCard from '../../components/HouseCard';
import Slider from '../../components/Slider';

const typesOfFlats = [
    {
        type: 'Однокомнатная',
        price: 49,
        text: 'В стоимость включена разовая уборка одной комнаты, кухни, коридора и одного санузла',
        imgUrl: '/img/1flat.jpg'
    },
    {
        type: 'Двухкомнатная',
        price: 69,
        text: 'В стоимость включена разовая уборка двух комнат, кухни, коридора и одного санузла',
        imgUrl: '/img/2flat.jpg'
    },
    {
        type: 'Трехкомнатная',
        price: 89,
        text: 'В стоимость включена разовая уборка трех комнат, кухни, коридора и одного санузла',
        imgUrl: '/img/3flat.jpg'
    },
];

function FlatHouse(props) {
    return (
        <div className={styles.content}>
            <h1>Уборка квартиры</h1>
            <div className="flats">
                {typesOfFlats.map((obj) => (
                    <FlatCard
                        key={obj.price}
                        user={props.user}
                        type={obj.type}
                        price={obj.price}
                        text={obj.text}
                        imgUrl={obj.imgUrl}
                    />
                ))}
            </div>
            <div className={styles.house}>
                <h1>Уборка дома</h1>
            </div>
            <div className="house">
                <HouseCard user={props.user} />
            </div>
            <h1>Что вкючено в уборку?</h1>
            <div className='slider'>
                <Slider />
            </div>
        </div>
    );
}

export default FlatHouse;
