import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'

// Import trực tiếp - không lazy load để tránh CLS
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import ProductsPage from './pages/ProductsPage'
import BlogPage from './pages/BlogPage'
import AboutPage from './pages/AboutPage'

function App() {
  return (
    <Router>
      <header>
        <nav>
          <Link to="/"><span>Demo Website</span></Link>
          <ul>
            <li><Link to="/">Trang chủ</Link></li>
            <li><Link to="/services">Dịch vụ</Link></li>
            <li><Link to="/products">Sản phẩm</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/about">Giới thiệu</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>

      <footer>
        <p>&copy; 2024 Demo Website</p>
      </footer>
    </Router>
  )
}

export default App