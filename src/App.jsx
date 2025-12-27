import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'

// Components - Import trực tiếp (không lazy) vì Navigation luôn hiển thị
import Navigation from './components/Navigation'

// Pages - Level 0
const HomePage = React.lazy(() => import('./pages/HomePage'))

// Pages - Level 1
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'))
const ProductsPage = React.lazy(() => import('./pages/ProductsPage'))
const BlogPage = React.lazy(() => import('./pages/BlogPage'))
const AboutPage = React.lazy(() => import('./pages/AboutPage'))

// Pages - Level 2 (Services)
const WebDevPage = React.lazy(() => import('./pages/services/WebDevPage'))
const MobileDevPage = React.lazy(() => import('./pages/services/MobileDevPage'))
const SEOPage = React.lazy(() => import('./pages/services/SEOPage'))

// Pages - Level 2 (Products)
const ProductAPage = React.lazy(() => import('./pages/products/ProductAPage'))
const ProductBPage = React.lazy(() => import('./pages/products/ProductBPage'))

// Pages - Level 2 (Blog)
const BlogPost1Page = React.lazy(() => import('./pages/blog/BlogPost1Page'))
const BlogPost2Page = React.lazy(() => import('./pages/blog/BlogPost2Page'))

// Pages - Level 3 (WebDev)
const FrontendPage = React.lazy(() => import('./pages/services/webdev/FrontendPage'))
const BackendPage = React.lazy(() => import('./pages/services/webdev/BackendPage'))
const FullstackPage = React.lazy(() => import('./pages/services/webdev/FullstackPage'))

// Pages - Level 4 (Frontend)
const ReactDetailPage = React.lazy(() => import('./pages/services/webdev/frontend/ReactDetailPage'))
const VueDetailPage = React.lazy(() => import('./pages/services/webdev/frontend/VueDetailPage'))
const AngularDetailPage = React.lazy(() => import('./pages/services/webdev/frontend/AngularDetailPage'))

// Test Page
const BrokenPage = React.lazy(() => import('./BrokenPage'))

function App() {
  return (
    <Router>
      <Navigation />

      <main>
        <Suspense fallback={
          <div style={{ minHeight: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <p>Đang tải...</p>
          </div>
        }>
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
        </Suspense>
      </main>

      <footer>
        <p>&copy; 2024 Demo Website. All rights reserved.</p>
        <Link to="/about" title="Tìm hiểu thêm về chúng tôi">Về chúng tôi</Link>
        <div>
          <label htmlFor="search-input">Tìm kiếm:</label>
          <input type="text" id="search-input" placeholder="Nhập từ khóa..." aria-label="Tìm kiếm" />
        </div>
      </footer>
    </Router>
  )
}

export default App