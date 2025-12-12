import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'

// Components
import Navigation from './components/Navigation'

// Pages - Level 0
import HomePage from './pages/HomePage'

// Pages - Level 1
import ServicesPage from './pages/ServicesPage'
import ProductsPage from './pages/ProductsPage'
import BlogPage from './pages/BlogPage'
import AboutPage from './pages/AboutPage'

// Pages - Level 2 (Services)
import WebDevPage from './pages/services/WebDevPage'
import MobileDevPage from './pages/services/MobileDevPage'
import SEOPage from './pages/services/SEOPage'

// Pages - Level 2 (Products)
import ProductAPage from './pages/products/ProductAPage'
import ProductBPage from './pages/products/ProductBPage'

// Pages - Level 2 (Blog)
import BlogPost1Page from './pages/blog/BlogPost1Page'
import BlogPost2Page from './pages/blog/BlogPost2Page'

// Pages - Level 3 (WebDev)
import FrontendPage from './pages/services/webdev/FrontendPage'
import BackendPage from './pages/services/webdev/BackendPage'
import FullstackPage from './pages/services/webdev/FullstackPage'

// Pages - Level 4 (Frontend)
import ReactDetailPage from './pages/services/webdev/frontend/ReactDetailPage'
import VueDetailPage from './pages/services/webdev/frontend/VueDetailPage'
import AngularDetailPage from './pages/services/webdev/frontend/AngularDetailPage'

// Test Page
import BrokenPage from './BrokenPage'

function App() {
  return (
    <Router>
      <Navigation />

      <Routes>
        {/* Level 0 */}
        <Route path="/" element={<HomePage />} />

        {/* Level 1 */}
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/about" element={<AboutPage />} />

        {/* Level 2 - Services */}
        <Route path="/services/webdev" element={<WebDevPage />} />
        <Route path="/services/mobile" element={<MobileDevPage />} />
        <Route path="/services/seo" element={<SEOPage />} />

        {/* Level 2 - Products */}
        <Route path="/products/a" element={<ProductAPage />} />
        <Route path="/products/b" element={<ProductBPage />} />

        {/* Level 2 - Blog */}
        <Route path="/blog/post-1" element={<BlogPost1Page />} />
        <Route path="/blog/post-2" element={<BlogPost2Page />} />

        {/* Level 3 - WebDev */}
        <Route path="/services/webdev/frontend" element={<FrontendPage />} />
        <Route path="/services/webdev/backend" element={<BackendPage />} />
        <Route path="/services/webdev/fullstack" element={<FullstackPage />} />

        {/* Level 4 - Frontend */}
        <Route path="/services/webdev/frontend/react" element={<ReactDetailPage />} />
        <Route path="/services/webdev/frontend/vue" element={<VueDetailPage />} />
        <Route path="/services/webdev/frontend/angular" element={<AngularDetailPage />} />

        {/* Test Page */}
        <Route path="/broken" element={<BrokenPage />} />
      </Routes>

      <footer>
        <p>&copy; 2024 Demo Website. All rights reserved.</p>
        <Link to="/about">Về chúng tôi</Link>
      </footer>
    </Router>
  )
}

export default App