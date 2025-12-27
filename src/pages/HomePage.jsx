import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <main>
            <h1>Tiêu đề H1 chính của trang</h1>
            <h2>Tiêu đề H2 phụ</h2>

            <section className="hero depth-0">
                <h2>Chào mừng đến với trang Demo React</h2>
                <p>Website React - Performance Demo</p>

                {/* === LỖI: Images thiếu alt, width, height, lazy - TOOL SẼ DETECT, AI CÓ THỂ FIX === */}
                <img src="https://picsum.photos/1200/600" className="hero-main-image" />
                <img src="https://picsum.photos/800/400" className="hero-secondary-image" />
                <img src="https://picsum.photos/600/300" />

                <div style={{ display: 'flex', gap: '10px', marginTop: '20px', flexWrap: 'wrap' }}>
                    <img src="https://picsum.photos/300/200?random=1" />
                    <img src="https://picsum.photos/300/200?random=2" />
                    <img src="https://picsum.photos/300/200?random=3" />
                </div>
            </section>

            <section className="features">
                <Link to="/services" className="feature-card"><h4>Dịch vụ</h4><p>Xem các dịch vụ</p><span className="nav-arrow">→</span></Link>
                <Link to="/products" className="feature-card"><h4>Sản phẩm</h4><p>Khám phá sản phẩm</p><span className="nav-arrow">→</span></Link>
                <Link to="/blog" className="feature-card"><h4>Blog</h4><p>Đọc bài viết mới</p><span className="nav-arrow">→</span></Link>
                <Link to="/broken" className="feature-card" style={{ borderColor: 'red' }}><h4>⚠️ Broken</h4><p>Trang lỗi</p><span className="nav-arrow">→</span></Link>
            </section>

            {/* === LỖI: Accessibility - TOOL SẼ DETECT, AI CÓ THỂ FIX === */}
            <section className="form-section">
                <button className="empty-submit-btn"></button>
                <input type="text" className="search-input-field" />
                <a href="/empty-link" className="icon-link"></a>
            </section>

            {/* === LỖI: Heavy CSS - TOOL SẼ DETECT === */}
            <section style={{ marginTop: '30px' }}>
                {[...Array(5)].map((_, i) => (
                    <div key={i} style={{
                        padding: '20px',
                        margin: '10px 0',
                        background: `linear-gradient(${i * 36}deg, #667eea, #764ba2)`,
                        boxShadow: '0 10px 40px rgba(0,0,0,0.3), 0 5px 20px rgba(0,0,0,0.2), 0 2px 10px rgba(0,0,0,0.1)',
                        borderRadius: '10px',
                        backdropFilter: 'blur(5px)',
                        filter: 'brightness(1.1)'
                    }}>
                        <p style={{ color: 'white', margin: 0 }}>Heavy CSS element {i + 1}</p>
                    </div>
                ))}
            </section>

            <section className="content">
                <article>
                    <h3>Backlinks</h3>
                    <p><a href="https://google.com" target="_blank" rel="noopener noreferrer">Google</a></p>
                    <p><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></p>
                </article>
            </section>
        </main>
    );
}

export default HomePage;