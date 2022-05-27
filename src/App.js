import { Routes, Route, Link } from 'react-router-dom'
import React from 'react';

import MainPage from './pages/MainPage';
import CartPage from './pages/CartPage';
import UserPage from './pages/UserPage';
import AboutPage from './pages/AboutPage';
import OfficePage from './pages/OfficePage';
import KitchenPage from './pages/KitchenPage';
import DryCleaningPage from './pages/DryCleaningPage';
import WindowPage from './pages/WindowPage';
import RepairPage from './pages/RepairPage';
import VacancyPage from './pages/VacancyPage';
import SalesPage from './pages/SalesPage';
import FlatHousePage from './pages/FlatHousePage';
import ReviewsPage from './pages/ReviewsPage';
import AdminPage from './pages/AdminPage';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import CartService from './services/CartService';


function App() {
  const [menuOpened, setMenuOpened] = React.useState(false);
  const [auth, setAuth] = React.useState(false);

  return (
    <div className='wrapper'>
      <Header onClickMenu={() => setMenuOpened(!menuOpened)} />
      {menuOpened ? <Menu onClickMenu={() => setMenuOpened(false)} /> : null}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/office" element={<OfficePage />} />
        <Route path="/kitchen" element={<KitchenPage />} />
        <Route path="/dry-cleaning" element={<DryCleaningPage />} />
        <Route path="/window" element={<WindowPage/>} />
        <Route path="/repair" element={<RepairPage />} />
        <Route path="/vacancy" element={<VacancyPage />} />
        <Route path="/sales" element={<SalesPage />} />
        <Route path="/flat-house" element={<FlatHousePage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
      <Footer onClickMenu={() => setMenuOpened(false)} />
    </div>
  );
}

export default App;


