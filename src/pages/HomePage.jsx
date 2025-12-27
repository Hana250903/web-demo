import { Link } from 'react-router-dom';

// ==========================================
// PERFORMANCE ISSUES DEMO - MỨC VÀNG (Moderate)
// Dựa trên PageAuditChecks.cs để đảm bảo tool detect được
// ==========================================

function HomePage() {
    return (
        <main>
            {/* SEO Issue: Multiple H1 tags (2 thẻ) */}
            <h1>Tiêu đề H1 chính của trang</h1>
            <h1>Tiêu đề H1 thứ hai - gây lỗi SEO</h1>

            <h2>Tiêu đề H2 phụ</h2>

            <section className="hero depth-0">
                <h2>Chào mừng đến với trang Demo React</h2>
                <p>Website React - Performance Demo</p>

                {/* Image Issues: 2 ảnh thiếu alt và lazy - đủ để vàng */}
                <img src="https://picsum.photos/1200/600" className="hero-image-main" />
                <img src="https://picsum.photos/800/400" className="hero-image-secondary" />
            </section>

            <section className="features">
                <Link to="/services" className="feature-card"><h4>Dịch vụ</h4><p>Xem các dịch vụ</p><span className="nav-arrow">→</span></Link>
                <Link to="/products" className="feature-card"><h4>Sản phẩm</h4><p>Khám phá sản phẩm</p><span className="nav-arrow">→</span></Link>
                <Link to="/blog" className="feature-card"><h4>Blog</h4><p>Đọc bài viết mới</p><span className="nav-arrow">→</span></Link>
                <Link to="/broken" className="feature-card" style={{ borderColor: 'red' }}><h4>⚠️ Broken</h4><p>Trang lỗi</p><span className="nav-arrow">→</span></Link>
            </section>

            {/* Accessibility Issues: Ít để mức vàng */}
            <section className="form-section">
                {/* 1 Empty button */}
                <button className="empty-submit-btn"></button>

                {/* 1 Input without label */}
                <input type="text" className="search-input-field" />

                {/* 1 Empty link */}
                <a href="/empty-link" className="icon-link"></a>
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