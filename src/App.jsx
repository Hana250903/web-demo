import { useState, useEffect, useCallback, useMemo, useRef } from 'react'  // LỖI: Unused imports
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import './App.css'
import BrokenPage from './BrokenPage'  // Import trang có lỗi

// LỖI PERFORMANCE: Large unused data in bundle
const UNUSED_DATA = Array(500).fill(null).map((_, i) => ({
  id: i,
  name: `Item ${i}`,
  description: `Very long description for item ${i} that wastes bundle size`,
  data: Array(50).fill(`data-${i}`)
}));

// LỗI PERFORMANCE: Heavy computation at module load
let heavyResult = 0;
for (let i = 0; i < 200000; i++) {
  heavyResult += Math.sqrt(i) * Math.random();
}

/*
  WEBSITE STRUCTURE - Depth Levels (0-4)
*/

// ==================== LEVEL 4 PAGES ====================
function ReactDetailPage() {
  // LỖI: Memory leak - không cleanup interval
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(c => c + 1);
      console.log("Interval running - wasting resources");
    }, 1000);
    // Missing cleanup: return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <section className="page-hero depth-4">
        <div className="breadcrumb">
          <Link to="/">Trang chủ</Link> &gt;
          <Link to="/services"> Dịch vụ</Link> &gt;
          <Link to="/services/webdev"> Web Dev</Link> &gt;
          <Link to="/services/webdev/frontend"> Frontend</Link> &gt;
          <span> React</span>
        </div>
        <span className="depth-badge">Depth: 4</span>
        <h2>React Development</h2>
        <p>Chi tiết về dịch vụ phát triển React</p>
      </section>
      <section className="content">
        <article>
          <h3>React.js Development Services</h3>
          {/* LỖI SEO: Image không có alt mô tả, không có size */}
          <img src="https://picsum.photos/600/300" />
          <p>Chúng tôi cung cấp dịch vụ phát triển React chuyên nghiệp.</p>
          {/* LỖI SEO: Link không có rel */}
          <p><a href="https://react.dev" target="_blank">Tìm hiểu thêm về React</a></p>
        </article>
      </section>
    </main>
  );
}

function VueDetailPage() {
  return (
    <main>
      <section className="page-hero depth-4">
        <div className="breadcrumb">
          <Link to="/">Trang chủ</Link> &gt;
          <Link to="/services"> Dịch vụ</Link> &gt;
          <Link to="/services/webdev"> Web Dev</Link> &gt;
          <Link to="/services/webdev/frontend"> Frontend</Link> &gt;
          <span> Vue</span>
        </div>
        <span className="depth-badge">Depth: 4</span>
        <h2>Vue.js Development</h2>
      </section>
      <section className="content">
        <article>
          <h3>Vue.js Development Services</h3>
          <img src="https://picsum.photos/600/301" />
          <p><a href="https://vuejs.org" target="_blank">Tìm hiểu thêm về Vue</a></p>
        </article>
      </section>
    </main>
  );
}

function AngularDetailPage() {
  return (
    <main>
      <section className="page-hero depth-4">
        <div className="breadcrumb">
          <Link to="/">Trang chủ</Link> &gt;
          <Link to="/services"> Dịch vụ</Link> &gt;
          <Link to="/services/webdev"> Web Dev</Link> &gt;
          <Link to="/services/webdev/frontend"> Frontend</Link> &gt;
          <span> Angular</span>
        </div>
        <span className="depth-badge">Depth: 4</span>
        <h2>Angular Development</h2>
      </section>
      <section className="content">
        <article>
          <h3>Angular Development Services</h3>
          <img src="https://picsum.photos/600/302" />
          <p><a href="https://angular.io" target="_blank">Tìm hiểu thêm về Angular</a></p>
        </article>
      </section>
    </main>
  );
}

// ==================== LEVEL 3 PAGES ====================
function FrontendPage() {
  return (
    <main>
      <section className="page-hero depth-3">
        <div className="breadcrumb">
          <Link to="/">Trang chủ</Link> &gt;
          <Link to="/services"> Dịch vụ</Link> &gt;
          <Link to="/services/webdev"> Web Dev</Link> &gt;
          <span> Frontend</span>
        </div>
        <span className="depth-badge">Depth: 3</span>
        <h2>Frontend Development</h2>
      </section>
      <section className="features">
        <Link to="/services/webdev/frontend/react" className="feature-card">
          <h4>React</h4>
          <p>Thư viện UI phổ biến nhất</p>
          <span className="nav-arrow">→</span>
        </Link>
        <Link to="/services/webdev/frontend/vue" className="feature-card">
          <h4>Vue.js</h4>
          <p>Framework progressive</p>
          <span className="nav-arrow">→</span>
        </Link>
        <Link to="/services/webdev/frontend/angular" className="feature-card">
          <h4>Angular</h4>
          <p>Platform của Google</p>
          <span className="nav-arrow">→</span>
        </Link>
      </section>
    </main>
  );
}

function BackendPage() {
  return (
    <main>
      <section className="page-hero depth-3">
        <div className="breadcrumb">
          <Link to="/">Trang chủ</Link> &gt;
          <Link to="/services"> Dịch vụ</Link> &gt;
          <Link to="/services/webdev"> Web Dev</Link> &gt;
          <span> Backend</span>
        </div>
        <span className="depth-badge">Depth: 3</span>
        <h2>Backend Development</h2>
      </section>
      <section className="features">
        <div className="feature-card"><h4>Node.js</h4><p>JavaScript runtime</p></div>
        <div className="feature-card"><h4>.NET Core</h4><p>Microsoft framework</p></div>
        <div className="feature-card"><h4>Python</h4><p>Django & FastAPI</p></div>
      </section>
    </main>
  );
}

function FullstackPage() {
  return (
    <main>
      <section className="page-hero depth-3">
        <div className="breadcrumb">
          <Link to="/">Trang chủ</Link> &gt;
          <Link to="/services"> Dịch vụ</Link> &gt;
          <Link to="/services/webdev"> Web Dev</Link> &gt;
          <span> Fullstack</span>
        </div>
        <span className="depth-badge">Depth: 3</span>
        <h2>Fullstack Development</h2>
      </section>
      <section className="content">
        <article><h3>Dịch vụ Fullstack</h3><p>Giải pháp end-to-end từ frontend đến backend.</p></article>
      </section>
    </main>
  );
}

// ==================== LEVEL 2 PAGES ====================
function WebDevPage() {
  return (
    <main>
      <section className="page-hero depth-2">
        <div className="breadcrumb">
          <Link to="/">Trang chủ</Link> &gt;
          <Link to="/services"> Dịch vụ</Link> &gt;
          <span> Web Development</span>
        </div>
        <span className="depth-badge">Depth: 2</span>
        <h2>Web Development</h2>
      </section>
      <section className="features">
        <Link to="/services/webdev/frontend" className="feature-card"><h4>Frontend</h4><p>React, Vue, Angular</p><span className="nav-arrow">→</span></Link>
        <Link to="/services/webdev/backend" className="feature-card"><h4>Backend</h4><p>Node.js, .NET, Python</p><span className="nav-arrow">→</span></Link>
        <Link to="/services/webdev/fullstack" className="feature-card"><h4>Fullstack</h4><p>Giải pháp toàn diện</p><span className="nav-arrow">→</span></Link>
      </section>
    </main>
  );
}

function MobileDevPage() {
  return (
    <main>
      <section className="page-hero depth-2">
        <div className="breadcrumb">
          <Link to="/">Trang chủ</Link> &gt;
          <Link to="/services"> Dịch vụ</Link> &gt;
          <span> Mobile Development</span>
        </div>
        <span className="depth-badge">Depth: 2</span>
        <h2>Mobile Development</h2>
      </section>
      <section className="features">
        <div className="feature-card"><h4>iOS</h4><p>Swift & SwiftUI</p></div>
        <div className="feature-card"><h4>Android</h4><p>Kotlin & Jetpack</p></div>
        <div className="feature-card"><h4>Cross-platform</h4><p>React Native, Flutter</p></div>
      </section>
    </main>
  );
}

function SEOPage() {
  return (
    <main>
      <section className="page-hero depth-2">
        <div className="breadcrumb">
          <Link to="/">Trang chủ</Link> &gt;
          <Link to="/services"> Dịch vụ</Link> &gt;
          <span> SEO</span>
        </div>
        <span className="depth-badge">Depth: 2</span>
        <h2>SEO Services</h2>
      </section>
      <section className="content">
        <article>
          <h3>Dịch vụ SEO</h3>
          <p>Tăng thứ hạng website trên Google.</p>
          <p><a href="https://google.com" target="_blank">Google Search</a></p>
        </article>
      </section>
    </main>
  );
}

function ProductAPage() {
  return (
    <main>
      <section className="page-hero depth-2">
        <div className="breadcrumb">
          <Link to="/">Trang chủ</Link> &gt;
          <Link to="/products"> Sản phẩm</Link> &gt;
          <span> Product A</span>
        </div>
        <span className="depth-badge">Depth: 2</span>
        <h2>Product A</h2>
      </section>
      <section className="content"><article><h3>Chi tiết Product A</h3><p>Giải pháp tiên tiến.</p></article></section>
    </main>
  );
}

function ProductBPage() {
  return (
    <main>
      <section className="page-hero depth-2">
        <div className="breadcrumb">
          <Link to="/">Trang chủ</Link> &gt;
          <Link to="/products"> Sản phẩm</Link> &gt;
          <span> Product B</span>
        </div>
        <span className="depth-badge">Depth: 2</span>
        <h2>Product B</h2>
      </section>
      <section className="content"><article><h3>Chi tiết Product B</h3><p>Thiết kế cho doanh nghiệp.</p></article></section>
    </main>
  );
}

function BlogPost1Page() {
  return (
    <main>
      <section className="page-hero depth-2">
        <div className="breadcrumb">
          <Link to="/">Trang chủ</Link> &gt;
          <Link to="/blog"> Blog</Link> &gt;
          <span> Bài viết 1</span>
        </div>
        <span className="depth-badge">Depth: 2</span>
        {/* LỖI SEO: Thiếu H1 hoặc H2 không đúng thứ tự */}
        <h3>Xu hướng Web 2024</h3>
      </section>
      <section className="content">
        <article>
          <h4>Các xu hướng web năm 2024</h4>
          {/* LỖI: Image không có alt và size */}
          <img src="https://picsum.photos/800/400" />
          <p>Năm 2024 đánh dấu nhiều thay đổi lớn...</p>
          <p><a href="https://developer.mozilla.org" target="_blank">MDN Web Docs</a></p>
        </article>
      </section>
    </main>
  );
}

function BlogPost2Page() {
  return (
    <main>
      <section className="page-hero depth-2">
        <div className="breadcrumb">
          <Link to="/">Trang chủ</Link> &gt;
          <Link to="/blog"> Blog</Link> &gt;
          <span> Bài viết 2</span>
        </div>
        <span className="depth-badge">Depth: 2</span>
        <h2>Performance Web</h2>
      </section>
      <section className="content">
        <article><h3>Tối ưu hiệu suất</h3><p>Hiệu suất là yếu tố quan trọng...</p></article>
      </section>
    </main>
  );
}

// ==================== LEVEL 1 PAGES ====================
function ServicesPage() {
  return (
    <main>
      <section className="page-hero depth-1">
        <div className="breadcrumb"><Link to="/">Trang chủ</Link> &gt; <span> Dịch vụ</span></div>
        <span className="depth-badge">Depth: 1</span>
        <h2>Dịch Vụ</h2>
      </section>
      <section className="features">
        <Link to="/services/webdev" className="feature-card"><h4>Web Development</h4><p>Phát triển website</p><span className="nav-arrow">→</span></Link>
        <Link to="/services/mobile" className="feature-card"><h4>Mobile Development</h4><p>Ứng dụng di động</p><span className="nav-arrow">→</span></Link>
        <Link to="/services/seo" className="feature-card"><h4>SEO</h4><p>Tối ưu tìm kiếm</p><span className="nav-arrow">→</span></Link>
      </section>
    </main>
  );
}

function ProductsPage() {
  return (
    <main>
      <section className="page-hero depth-1">
        <div className="breadcrumb"><Link to="/">Trang chủ</Link> &gt; <span> Sản phẩm</span></div>
        <span className="depth-badge">Depth: 1</span>
        <h2>Sản Phẩm</h2>
      </section>
      <section className="features">
        <Link to="/products/a" className="feature-card"><h4>Product A</h4><p>Sản phẩm hàng đầu</p><span className="nav-arrow">→</span></Link>
        <Link to="/products/b" className="feature-card"><h4>Product B</h4><p>Giải pháp doanh nghiệp</p><span className="nav-arrow">→</span></Link>
        <div className="feature-card"><h4>Product C</h4><p>Sản phẩm mới</p></div>
      </section>
    </main>
  );
}

function BlogPage() {
  return (
    <main>
      <section className="page-hero depth-1">
        <div className="breadcrumb"><Link to="/">Trang chủ</Link> &gt; <span> Blog</span></div>
        <span className="depth-badge">Depth: 1</span>
        <h2>Blog</h2>
      </section>
      <section className="features">
        <Link to="/blog/post-1" className="feature-card"><h4>Xu hướng Web 2024</h4><p>Tháng 12, 2024</p><span className="nav-arrow">→</span></Link>
        <Link to="/blog/post-2" className="feature-card"><h4>Performance Web</h4><p>Tháng 11, 2024</p><span className="nav-arrow">→</span></Link>
        <div className="feature-card"><h4>AI trong Web</h4><p>Tháng 10, 2024</p></div>
      </section>
    </main>
  );
}

function AboutPage() {
  return (
    <main>
      <section className="page-hero depth-1">
        <div className="breadcrumb"><Link to="/">Trang chủ</Link> &gt; <span> Giới thiệu</span></div>
        <span className="depth-badge">Depth: 1</span>
        <h2>Về Chúng Tôi</h2>
      </section>
      <section className="about-content">
        <article>
          <h3>Câu chuyện</h3>
          <p>Lorem ipsum dolor sit amet...</p>
          <p><a href="https://github.com" target="_blank">GitHub</a></p>
        </article>
      </section>
    </main>
  );
}

// ==================== LEVEL 0 PAGE (HOME) ====================
function HomePage() {
  // LỖI: Console log mỗi render
  console.log("HomePage rendered at:", new Date().toISOString());

  // LỖI: Fetch không cần thiết
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => console.log("Fetched unused data:", data.length));
  }, []);

  return (
    <main>
      <section className="hero depth-0">
        <span className="depth-badge">Depth: 0</span>
        {/* LỖI SEO: Nhiều H1 hoặc heading không đúng thứ tự */}
        <h1>Website Demo</h1>
        <h2>Chào mừng đến với trang Demo React</h2>
        <p>Website React với cấu trúc 5 cấp độ sâu (0-4) để test Crawler</p>
        {/* LỖI CLS: Image không có width/height */}
        <img src="https://picsum.photos/1200/600" alt="Hero" />
      </section>

      <section className="features">
        <Link to="/services" className="feature-card"><h4>Dịch vụ</h4><p>Xem các dịch vụ</p><span className="nav-arrow">→</span></Link>
        <Link to="/products" className="feature-card"><h4>Sản phẩm</h4><p>Khám phá sản phẩm</p><span className="nav-arrow">→</span></Link>
        <Link to="/blog" className="feature-card"><h4>Blog</h4><p>Đọc bài viết mới</p><span className="nav-arrow">→</span></Link>
        <Link to="/broken" className="feature-card" style={{ borderColor: 'red' }}><h4>⚠️ Broken Page</h4><p>Trang có nhiều lỗi</p><span className="nav-arrow">→</span></Link>
      </section>

      <section className="content">
        <article>
          <h3>Backlinks</h3>
          {/* LỖI SEO: Links thiếu rel="noopener noreferrer" */}
          <p>Tham khảo tại <a href="https://google.com" target="_blank">Google</a></p>
          <p>Hoặc xem <a href="https://github.com" target="_blank">GitHub</a></p>
        </article>
      </section>
    </main>
  );
}

// ==================== NAVIGATION COMPONENT ====================
function Navigation() {
  const location = useLocation();
  const path = location.pathname;

  const isActive = (check) => {
    if (check === '/') return path === '/';
    return path.startsWith(check);
  };

  return (
    <header>
      <nav>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <h1 style={{ cursor: 'pointer' }}>Demo Website</h1>
        </Link>
        <ul>
          <li><Link to="/" className={isActive('/') && path === '/' ? 'active' : ''}>Trang chủ</Link></li>
          <li><Link to="/services" className={isActive('/services') ? 'active' : ''}>Dịch vụ</Link></li>
          <li><Link to="/products" className={isActive('/products') ? 'active' : ''}>Sản phẩm</Link></li>
          <li><Link to="/blog" className={isActive('/blog') ? 'active' : ''}>Blog</Link></li>
          <li><Link to="/about" className={isActive('/about') ? 'active' : ''}>Giới thiệu</Link></li>
        </ul>
      </nav>
    </header>
  );
}

// ==================== MAIN APP ====================
function App() {
  // LỖI: Console log mỗi render
  console.log("App rendered");

  return (
    <Router>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services/webdev" element={<WebDevPage />} />
        <Route path="/services/mobile" element={<MobileDevPage />} />
        <Route path="/services/seo" element={<SEOPage />} />
        <Route path="/products/a" element={<ProductAPage />} />
        <Route path="/products/b" element={<ProductBPage />} />
        <Route path="/blog/post-1" element={<BlogPost1Page />} />
        <Route path="/blog/post-2" element={<BlogPost2Page />} />
        <Route path="/services/webdev/frontend" element={<FrontendPage />} />
        <Route path="/services/webdev/backend" element={<BackendPage />} />
        <Route path="/services/webdev/fullstack" element={<FullstackPage />} />
        <Route path="/services/webdev/frontend/react" element={<ReactDetailPage />} />
        <Route path="/services/webdev/frontend/vue" element={<VueDetailPage />} />
        <Route path="/services/webdev/frontend/angular" element={<AngularDetailPage />} />
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