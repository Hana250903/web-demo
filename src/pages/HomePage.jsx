import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <main>
            <h1>Tiêu đề H1 chính của trang</h1>
            <h2>Tiêu đề H2 phụ</h2>

            <section className="hero depth-0">
                <h2>Chào mừng đến với trang Demo React</h2>
                <p>Website React - Performance Demo</p>

                {/* === LỖI: Images thiếu alt, width, height, lazy === */}
                {/* Tool detect: img-missing-alt, img-missing-lazy, perf-cls-images-no-dimensions */}
                {/* AI fix: thêm alt, loading="lazy", width, height */}
                <img src="https://picsum.photos/800/400" className="hero-main-image" alt="Hình ảnh chính của trang" loading="lazy" width="800" height="400" />
                <img src="https://picsum.photos/600/300" className="hero-secondary-image" alt="Hình ảnh phụ của trang" loading="lazy" width="600" height="300" />

                <div style={{ display: 'flex', gap: '10px', marginTop: '20px', flexWrap: 'wrap' }}>
                    <img src="https://picsum.photos/200/150?random=1" alt="Hình ảnh ngẫu nhiên 1" loading="lazy" width="200" height="150" />
                    <img src="https://picsum.photos/200/150?random=2" alt="Hình ảnh ngẫu nhiên 2" loading="lazy" width="200" height="150" />
                    <img src="https://picsum.photos/200/150?random=3" alt="Hình ảnh ngẫu nhiên 3" loading="lazy" width="200" height="150" />
                </div>
            </section>

            <section className="features">
                <Link to="/services" className="feature-card"><h4>Dịch vụ</h4><p>Xem các dịch vụ</p><span className="nav-arrow">→</span></Link>
                <Link to="/products" className="feature-card"><h4>Sản phẩm</h4><p>Khám phá sản phẩm</p><span className="nav-arrow">→</span></Link>
                <Link to="/blog" className="feature-card"><h4>Blog</h4><p>Đọc bài viết mới</p><span className="nav-arrow">→</span></Link>
                <Link to="/broken" className="feature-card" style={{ borderColor: 'red' }}><h4>⚠️ Broken</h4><p>Trang lỗi</p><span className="nav-arrow">→</span></Link>
            </section>

            {/* === LỖI: Accessibility === */}
            {/* Tool detect: a11y-missing-button-text, a11y-missing-form-labels, a11y-empty-links */}
            {/* AI fix: thêm text, label, aria-label */}
            <section className="form-section">
                <button className="empty-submit-btn">Gửi</button>
                <label htmlFor="search-input-field">Tìm kiếm:</label>
                <input type="text" id="search-input-field" className="search-input-field" />
                <a href="/empty-link" className="icon-link" aria-label="Liên kết trống"></a>
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