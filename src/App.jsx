import { useState } from 'react'
import './App.css'

// LỖI: Unused imports - tăng bundle size
import { useEffect, useCallback, useMemo, useRef, useReducer, useContext, createContext } from 'react'

// LỖI: Import toàn bộ thư viện thay vì chỉ cần thiết
// import _ from 'lodash' // Nếu có

/*
  WEBSITE STRUCTURE - Depth Levels (0-4):
  Level 0: Home (/)
  Level 1: Services, Products, Blog, About
  Level 2-4: Sub pages...
*/

// LỖI: Inline large data - tăng bundle size
const LARGE_UNUSED_DATA = Array(1000).fill(null).map((_, i) => ({
  id: i,
  name: `Item ${i}`,
  description: `This is a very long description for item number ${i} that adds unnecessary weight to the JavaScript bundle`,
  data: Array(100).fill(`data-${i}`)
}));

// LỖI: Heavy computation trong module scope
const heavyComputation = () => {
  let result = 0;
  for (let i = 0; i < 500000; i++) {
    result += Math.sqrt(i) * Math.random();
  }
  return result;
};
const COMPUTED_VALUE = heavyComputation();

// ==================== LEVEL 4 PAGES ====================
function ReactDetailPage({ onNavigate }) {
  // LỖI: Không cần thiết re-render
  const [, forceUpdate] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => forceUpdate(n => n + 1), 1000);
    // LỖI: Memory leak - không cleanup
  }, []);

  return (
    <main>
      <section className="page-hero depth-4">
        <div className="breadcrumb">
          <a onClick={() => onNavigate('home')}>Trang chủ</a> &gt;
          <a onClick={() => onNavigate('services')}> Dịch vụ</a> &gt;
          <a onClick={() => onNavigate('webdev')}> Web Dev</a> &gt;
          <a onClick={() => onNavigate('frontend')}> Frontend</a> &gt;
          <span> React</span>
        </div>
        <span className="depth-badge">Depth: 4</span>
        <h2>React Development</h2>
        <p>Chi tiết về dịch vụ phát triển React</p>
      </section>
      <section className="content">
        <article>
          <h3>React.js Development Services</h3>
          {/* LỖI: Hình ảnh không có width/height - gây CLS */}
          <img src="https://picsum.photos/600/300" alt="React" />
          <p>Chúng tôi cung cấp dịch vụ phát triển React chuyên nghiệp.</p>
          <p><a href="https://react.dev" target="_blank">Tìm hiểu thêm về React</a></p>
        </article>
      </section>
    </main>
  );
}

function VueDetailPage({ onNavigate }) {
  return (
    <main>
      <section className="page-hero depth-4">
        <div className="breadcrumb">
          <a onClick={() => onNavigate('home')}>Trang chủ</a> &gt;
          <a onClick={() => onNavigate('services')}> Dịch vụ</a> &gt;
          <a onClick={() => onNavigate('webdev')}> Web Dev</a> &gt;
          <a onClick={() => onNavigate('frontend')}> Frontend</a> &gt;
          <span> Vue</span>
        </div>
        <span className="depth-badge">Depth: 4</span>
        <h2>Vue.js Development</h2>
      </section>
      <section className="content">
        <article>
          <h3>Vue.js Development Services</h3>
          <img src="https://picsum.photos/600/301" alt="Vue" />
          <p><a href="https://vuejs.org" target="_blank">Tìm hiểu thêm về Vue</a></p>
        </article>
      </section>
    </main>
  );
}

function AngularDetailPage({ onNavigate }) {
  return (
    <main>
      <section className="page-hero depth-4">
        <div className="breadcrumb">
          <a onClick={() => onNavigate('home')}>Trang chủ</a> &gt;
          <a onClick={() => onNavigate('services')}> Dịch vụ</a> &gt;
          <a onClick={() => onNavigate('webdev')}> Web Dev</a> &gt;
          <a onClick={() => onNavigate('frontend')}> Frontend</a> &gt;
          <span> Angular</span>
        </div>
        <span className="depth-badge">Depth: 4</span>
        <h2>Angular Development</h2>
      </section>
      <section className="content">
        <article>
          <h3>Angular Development Services</h3>
          <img src="https://picsum.photos/600/302" alt="Angular" />
          <p><a href="https://angular.io" target="_blank">Tìm hiểu thêm về Angular</a></p>
        </article>
      </section>
    </main>
  );
}

// ==================== LEVEL 3 PAGES ====================
function FrontendPage({ onNavigate }) {
  return (
    <main>
      <section className="page-hero depth-3">
        <div className="breadcrumb">
          <a onClick={() => onNavigate('home')}>Trang chủ</a> &gt;
          <a onClick={() => onNavigate('services')}> Dịch vụ</a> &gt;
          <a onClick={() => onNavigate('webdev')}> Web Dev</a> &gt;
          <span> Frontend</span>
        </div>
        <span className="depth-badge">Depth: 3</span>
        <h2>Frontend Development</h2>
      </section>
      <section className="features">
        <div className="feature-card" onClick={() => onNavigate('react-detail')}>
          <h4>React</h4>
          <p>Thư viện UI phổ biến nhất</p>
          <span className="nav-arrow">→</span>
        </div>
        <div className="feature-card" onClick={() => onNavigate('vue-detail')}>
          <h4>Vue.js</h4>
          <p>Framework progressive</p>
          <span className="nav-arrow">→</span>
        </div>
        <div className="feature-card" onClick={() => onNavigate('angular-detail')}>
          <h4>Angular</h4>
          <p>Platform của Google</p>
          <span className="nav-arrow">→</span>
        </div>
      </section>
    </main>
  );
}

function BackendPage({ onNavigate }) {
  return (
    <main>
      <section className="page-hero depth-3">
        <div className="breadcrumb">
          <a onClick={() => onNavigate('home')}>Trang chủ</a> &gt;
          <a onClick={() => onNavigate('services')}> Dịch vụ</a> &gt;
          <a onClick={() => onNavigate('webdev')}> Web Dev</a> &gt;
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

function FullstackPage({ onNavigate }) {
  return (
    <main>
      <section className="page-hero depth-3">
        <div className="breadcrumb">
          <a onClick={() => onNavigate('home')}>Trang chủ</a> &gt;
          <a onClick={() => onNavigate('services')}> Dịch vụ</a> &gt;
          <a onClick={() => onNavigate('webdev')}> Web Dev</a> &gt;
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
function WebDevPage({ onNavigate }) {
  return (
    <main>
      <section className="page-hero depth-2">
        <div className="breadcrumb">
          <a onClick={() => onNavigate('home')}>Trang chủ</a> &gt;
          <a onClick={() => onNavigate('services')}> Dịch vụ</a> &gt;
          <span> Web Development</span>
        </div>
        <span className="depth-badge">Depth: 2</span>
        <h2>Web Development</h2>
      </section>
      <section className="features">
        <div className="feature-card" onClick={() => onNavigate('frontend')}><h4>Frontend</h4><p>React, Vue, Angular</p><span className="nav-arrow">→</span></div>
        <div className="feature-card" onClick={() => onNavigate('backend')}><h4>Backend</h4><p>Node.js, .NET, Python</p><span className="nav-arrow">→</span></div>
        <div className="feature-card" onClick={() => onNavigate('fullstack')}><h4>Fullstack</h4><p>Giải pháp toàn diện</p><span className="nav-arrow">→</span></div>
      </section>
    </main>
  );
}

function MobileDevPage({ onNavigate }) {
  return (
    <main>
      <section className="page-hero depth-2">
        <div className="breadcrumb">
          <a onClick={() => onNavigate('home')}>Trang chủ</a> &gt;
          <a onClick={() => onNavigate('services')}> Dịch vụ</a> &gt;
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

function SEOPage({ onNavigate }) {
  return (
    <main>
      <section className="page-hero depth-2">
        <div className="breadcrumb">
          <a onClick={() => onNavigate('home')}>Trang chủ</a> &gt;
          <a onClick={() => onNavigate('services')}> Dịch vụ</a> &gt;
          <span> SEO</span>
        </div>
        <span className="depth-badge">Depth: 2</span>
        <h2>SEO Services</h2>
      </section>
      <section className="content">
        <article><h3>Dịch vụ SEO</h3><p>Tăng thứ hạng website trên Google.</p><p><a href="https://google.com" target="_blank">Google Search</a></p></article>
      </section>
    </main>
  );
}

function ProductAPage({ onNavigate }) {
  return (
    <main>
      <section className="page-hero depth-2">
        <div className="breadcrumb">
          <a onClick={() => onNavigate('home')}>Trang chủ</a> &gt;
          <a onClick={() => onNavigate('products')}> Sản phẩm</a> &gt;
          <span> Product A</span>
        </div>
        <span className="depth-badge">Depth: 2</span>
        <h2>Product A</h2>
      </section>
      <section className="content"><article><h3>Chi tiết Product A</h3><p>Giải pháp tiên tiến với nhiều tính năng.</p></article></section>
    </main>
  );
}

function ProductBPage({ onNavigate }) {
  return (
    <main>
      <section className="page-hero depth-2">
        <div className="breadcrumb">
          <a onClick={() => onNavigate('home')}>Trang chủ</a> &gt;
          <a onClick={() => onNavigate('products')}> Sản phẩm</a> &gt;
          <span> Product B</span>
        </div>
        <span className="depth-badge">Depth: 2</span>
        <h2>Product B</h2>
      </section>
      <section className="content"><article><h3>Chi tiết Product B</h3><p>Thiết kế cho doanh nghiệp lớn.</p></article></section>
    </main>
  );
}

function BlogPost1Page({ onNavigate }) {
  return (
    <main>
      <section className="page-hero depth-2">
        <div className="breadcrumb">
          <a onClick={() => onNavigate('home')}>Trang chủ</a> &gt;
          <a onClick={() => onNavigate('blog')}> Blog</a> &gt;
          <span> Bài viết 1</span>
        </div>
        <span className="depth-badge">Depth: 2</span>
        <h2>Xu hướng Web 2024</h2>
      </section>
      <section className="content">
        <article>
          <h3>Các xu hướng web năm 2024</h3>
          {/* LỖI: Hình không có size */}
          <img src="https://picsum.photos/800/400" alt="Blog image" />
          <p>Năm 2024 đánh dấu nhiều thay đổi lớn...</p>
          <p><a href="https://developer.mozilla.org" target="_blank">MDN Web Docs</a></p>
        </article>
      </section>
    </main>
  );
}

function BlogPost2Page({ onNavigate }) {
  return (
    <main>
      <section className="page-hero depth-2">
        <div className="breadcrumb">
          <a onClick={() => onNavigate('home')}>Trang chủ</a> &gt;
          <a onClick={() => onNavigate('blog')}> Blog</a> &gt;
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
function ServicesPage({ onNavigate }) {
  return (
    <main>
      <section className="page-hero depth-1">
        <div className="breadcrumb"><a onClick={() => onNavigate('home')}>Trang chủ</a> &gt; <span> Dịch vụ</span></div>
        <span className="depth-badge">Depth: 1</span>
        <h2>Dịch Vụ</h2>
      </section>
      <section className="features">
        <div className="feature-card" onClick={() => onNavigate('webdev')}><h4>Web Development</h4><p>Phát triển website</p><span className="nav-arrow">→</span></div>
        <div className="feature-card" onClick={() => onNavigate('mobile')}><h4>Mobile Development</h4><p>Ứng dụng di động</p><span className="nav-arrow">→</span></div>
        <div className="feature-card" onClick={() => onNavigate('seo')}><h4>SEO</h4><p>Tối ưu tìm kiếm</p><span className="nav-arrow">→</span></div>
      </section>
    </main>
  );
}

function ProductsPage({ onNavigate }) {
  return (
    <main>
      <section className="page-hero depth-1">
        <div className="breadcrumb"><a onClick={() => onNavigate('home')}>Trang chủ</a> &gt; <span> Sản phẩm</span></div>
        <span className="depth-badge">Depth: 1</span>
        <h2>Sản Phẩm</h2>
      </section>
      <section className="features">
        <div className="feature-card" onClick={() => onNavigate('product-a')}><h4>Product A</h4><p>Sản phẩm hàng đầu</p><span className="nav-arrow">→</span></div>
        <div className="feature-card" onClick={() => onNavigate('product-b')}><h4>Product B</h4><p>Giải pháp doanh nghiệp</p><span className="nav-arrow">→</span></div>
        <div className="feature-card"><h4>Product C</h4><p>Sản phẩm mới</p></div>
      </section>
    </main>
  );
}

function BlogPage({ onNavigate }) {
  return (
    <main>
      <section className="page-hero depth-1">
        <div className="breadcrumb"><a onClick={() => onNavigate('home')}>Trang chủ</a> &gt; <span> Blog</span></div>
        <span className="depth-badge">Depth: 1</span>
        <h2>Blog</h2>
      </section>
      <section className="features">
        <div className="feature-card" onClick={() => onNavigate('blog-post-1')}><h4>Xu hướng Web 2024</h4><p>Tháng 12, 2024</p><span className="nav-arrow">→</span></div>
        <div className="feature-card" onClick={() => onNavigate('blog-post-2')}><h4>Performance Web</h4><p>Tháng 11, 2024</p><span className="nav-arrow">→</span></div>
        <div className="feature-card"><h4>AI trong Web</h4><p>Tháng 10, 2024</p></div>
      </section>
    </main>
  );
}

function AboutPage({ onNavigate }) {
  return (
    <main>
      <section className="page-hero depth-1">
        <div className="breadcrumb"><a onClick={() => onNavigate('home')}>Trang chủ</a> &gt; <span> Giới thiệu</span></div>
        <span className="depth-badge">Depth: 1</span>
        <h2>Về Chúng Tôi</h2>
      </section>
      <section className="about-content">
        <article><h3>Câu chuyện</h3><p>Lorem ipsum dolor sit amet...</p><p><a href="https://github.com" target="_blank">GitHub</a></p></article>
      </section>
    </main>
  );
}

// ==================== LEVEL 0 PAGE (HOME) ====================
function HomePage({ onNavigate }) {
  // LỖI: Không cần thiết effect
  useEffect(() => {
    console.log("HomePage mounted");
    // LỖI: Fetch không cần thiết
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => console.log("Fetched unused data:", data.length));
  }, []);

  return (
    <main>
      <section className="hero depth-0">
        <span className="depth-badge">Depth: 0</span>
        <h2>Chào mừng đến với trang Demo React</h2>
        <p>Website React với cấu trúc 5 cấp độ sâu (0-4) để test PageSpeed</p>
        {/* LỖI: Hình ảnh lớn không có width/height - gây CLS */}
        <img src="https://picsum.photos/1200/600" alt="Hero image" />
      </section>

      <section className="features">
        <div className="feature-card" onClick={() => onNavigate('services')}><h4>Dịch vụ</h4><p>Xem các dịch vụ</p><span className="nav-arrow">→</span></div>
        <div className="feature-card" onClick={() => onNavigate('products')}><h4>Sản phẩm</h4><p>Khám phá sản phẩm</p><span className="nav-arrow">→</span></div>
        <div className="feature-card" onClick={() => onNavigate('blog')}><h4>Blog</h4><p>Đọc bài viết mới</p><span className="nav-arrow">→</span></div>
      </section>

      <section className="content">
        <article>
          <h3>Backlinks</h3>
          <p>Tham khảo tại <a href="https://google.com" target="_blank">Google</a></p>
          <p>Hoặc xem <a href="https://github.com" target="_blank">GitHub</a></p>
        </article>
      </section>
    </main>
  );
}

// ==================== MAIN APP ====================
function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // LỖI: Console log mỗi render
  console.log("App rendered at:", new Date().toISOString());

  const navigate = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage onNavigate={navigate} />;
      case 'services': return <ServicesPage onNavigate={navigate} />;
      case 'products': return <ProductsPage onNavigate={navigate} />;
      case 'blog': return <BlogPage onNavigate={navigate} />;
      case 'about': return <AboutPage onNavigate={navigate} />;
      case 'webdev': return <WebDevPage onNavigate={navigate} />;
      case 'mobile': return <MobileDevPage onNavigate={navigate} />;
      case 'seo': return <SEOPage onNavigate={navigate} />;
      case 'product-a': return <ProductAPage onNavigate={navigate} />;
      case 'product-b': return <ProductBPage onNavigate={navigate} />;
      case 'blog-post-1': return <BlogPost1Page onNavigate={navigate} />;
      case 'blog-post-2': return <BlogPost2Page onNavigate={navigate} />;
      case 'frontend': return <FrontendPage onNavigate={navigate} />;
      case 'backend': return <BackendPage onNavigate={navigate} />;
      case 'fullstack': return <FullstackPage onNavigate={navigate} />;
      case 'react-detail': return <ReactDetailPage onNavigate={navigate} />;
      case 'vue-detail': return <VueDetailPage onNavigate={navigate} />;
      case 'angular-detail': return <AngularDetailPage onNavigate={navigate} />;
      default: return <HomePage onNavigate={navigate} />;
    }
  };

  return (
    <>
      <header>
        <nav>
          <h1 onClick={() => navigate('home')} style={{ cursor: 'pointer' }}>Demo Website</h1>
          <ul>
            <li><a className={currentPage === 'home' ? 'active' : ''} onClick={() => navigate('home')}>Trang chủ</a></li>
            <li><a className={currentPage.includes('service') || currentPage.includes('webdev') || currentPage.includes('mobile') || currentPage.includes('seo') || currentPage.includes('frontend') || currentPage.includes('backend') || currentPage.includes('fullstack') || currentPage.includes('react') || currentPage.includes('vue') || currentPage.includes('angular') ? 'active' : ''} onClick={() => navigate('services')}>Dịch vụ</a></li>
            <li><a className={currentPage.includes('product') ? 'active' : ''} onClick={() => navigate('products')}>Sản phẩm</a></li>
            <li><a className={currentPage.includes('blog') ? 'active' : ''} onClick={() => navigate('blog')}>Blog</a></li>
            <li><a className={currentPage === 'about' ? 'active' : ''} onClick={() => navigate('about')}>Giới thiệu</a></li>
          </ul>
        </nav>
      </header>

      {renderPage()}

      <footer>
        <p>&copy; 2024 Demo Website. All rights reserved.</p>
        <a onClick={() => navigate('about')}>Về chúng tôi</a>
      </footer>
    </>
  )
}

export default App
