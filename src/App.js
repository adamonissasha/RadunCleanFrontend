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


function App() {
  const [menuOpened, setMenuOpened] = React.useState(false);
  const [auth, setAuth] = React.useState(false);
  const [user, setUser] = React.useState({});

  React.useEffect(() => {
    localStorage.getItem("user") && setUser(JSON.parse(localStorage.getItem("user") || ""));
    console.log(user)
  }, [])

  return (
    <div className='wrapper'>
      <Header role={user.roles} onClickMenu={() => setMenuOpened(!menuOpened)} />
      {menuOpened ? <Menu onClickMenu={() => setMenuOpened(false)} /> : null}
      <Routes>
        <Route path="/" element={<MainPage userId={user.id}/>} />
        <Route path="/cart" element={<CartPage auth={auth} />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/office" element={<OfficePage userId={user.id}/>} />
        <Route path="/kitchen" element={<KitchenPage userId={user.id}/>} />
        <Route path="/dry-cleaning" element={<DryCleaningPage userId={user.id}/>} />
        <Route path="/window" element={<WindowPage userId={user.id}/>} />
        <Route path="/repair" element={<RepairPage userId={user.id}/>} />
        <Route path="/vacancy" element={<VacancyPage />} />
        <Route path="/sales" element={<SalesPage />} />
        <Route path="/flat-house" element={<FlatHousePage userId={user.id}/>} />
        <Route path="/reviews" element={<ReviewsPage userId={user.id}/>} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
      <Footer onClickMenu={() => setMenuOpened(false)} />
    </div>
  );
}

export default App;


