import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import LayoutProvider from './components/layout/LayoutProvider'
import Shop from './pages/Shop'

function AppRoutes() {
  return (
    <Router>
      <LayoutProvider>
        <main className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            {/* Add more routes as needed */}
          </Routes>
        </main>
      </LayoutProvider>
    </Router>
  )
}

export default AppRoutes
