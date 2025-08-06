import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import LayoutProvider from './components/layout/LayoutProvider'
import Shop from './pages/Shop'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import Account from './pages/Account'
import Addressess from './components/accounts/Addressess'
import Order from './components/accounts/Order'
import Profile from './components/accounts/Profile'
import Register from './pages/Register'
import Login from './pages/Login'

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<LayoutProvider />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/mycart" element={<Cart />} />
          <Route path="/myaccount" element={<Account />}>
            <Route path="addressess" element={<Addressess />} />
            <Route path="orders" element={<Order />} />
            {/* <Route path="settings" element={<Settings />} /> */}
            <Route path="profile" element={<Profile />} />
          </Route>
          {/* Add more routes as needed */}
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes
