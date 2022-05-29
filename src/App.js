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
  const [auth, setAuth] = React.useState(localStorage.getItem("auth") !== null ? JSON.parse(localStorage.getItem('auth')) : false)
  const [user, setUser] = React.useState(localStorage.getItem("user") != null ? JSON.parse(localStorage.getItem("user")) : {});
 
  React.useEffect(() => {
    localStorage.getItem("user") != null && CartService.getCart(user.id).then((responce) => {
      localStorage.setItem("cart", JSON.stringify(responce.data))
    })
  }, [])

  return (
    <div className='wrapper'>
      <Header role={user.roles} onClickMenu={() => setMenuOpened(!menuOpened)} />
      {menuOpened ? <Menu onClickMenu={() => setMenuOpened(false)} /> : null}
      <Routes>
        <Route path="/" element={<MainPage user={user} />} />
        <Route path="/cart" element={<CartPage auth={auth} user={user} />} />
        <Route path="/user" element={<UserPage setUser={setUser} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/office" element={<OfficePage user={user} />} />
        <Route path="/kitchen" element={<KitchenPage user={user} />} />
        <Route path="/dry-cleaning" element={<DryCleaningPage user={user} />} />
        <Route path="/window" element={<WindowPage user={user} />} />
        <Route path="/repair" element={<RepairPage user={user} />} />
        <Route path="/vacancy" element={<VacancyPage />} />
        <Route path="/sales" element={<SalesPage />} />
        <Route path="/flat-house" element={<FlatHousePage user={user} />} />
        <Route path="/reviews" element={<ReviewsPage userId={user.id} />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
      <Footer onClickMenu={() => setMenuOpened(false)} />
    </div>
  );
}

export default App;


