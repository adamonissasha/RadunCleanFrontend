import { Link } from 'react-router-dom'
import React from 'react';
import FlatCard from '../../components/FlatCard';
import HouseCard from '../../components/HouseCard';
import Services from '../../components/Services';
import Slider from '../../components/Slider';
import Reviews from '../../components/Reviews';


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

const services = [
  { name: 'Офис', imgUrl: '/img/services/office.jpg', page: '/office' },
  { name: 'Ремонт', imgUrl: '/img/services/repair.jpg', page: 'repair' },
  { name: 'Химчистка', imgUrl: '/img/services/sofa.jpg', page: 'dry-cleaning' },
  { name: 'Кухня', imgUrl: '/img/services/kitchen.jpg', page: 'kitchen' },
  { name: 'Окна', imgUrl: '/img/services/window.jpg', page: 'window' },
];

function Main() {
  return (
    <div className="content">
      <h1>Хотите заказать уборку квартиры/дома?</h1>
      <div className="flats">
        {typesOfFlats.map((obj) => (
          <FlatCard
            type={obj.type}
            price={obj.price}
            text={obj.text}
            imgUrl={obj.imgUrl}
          />
        ))}
      </div>
      <div className="house">
        <HouseCard />
      </div>

      <h1>Уборку каких видов мы выполняем?</h1>
      <div className='services'>
        {services.map((obj) => (
          <Services
            name={obj.name}
            imgUrl={obj.imgUrl}
            page={obj.page}
          />
        ))}
      </div>

      <h1>Что входит в уборку квартиры/дома?</h1>
      <div className='slider'>
        <Slider />
      </div>


      <h1>Отзывы наших клиентов</h1>
      <div className="reviews">
        <Reviews />
      </div>
    </div>
  );
}

export default Main;