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

function AppRoutes() {
  return (
    <Router>
      <LayoutProvider>
        <main className="flex-1 overflow-y-auto">
          <Routes>
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
          </Routes>
        </main>
      </LayoutProvider>
    </Router>
  )
}

export default AppRoutes
