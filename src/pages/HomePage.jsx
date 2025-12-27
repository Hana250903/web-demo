import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <>
            <section className="hero">
                <h1>Chào mừng đến với trang Demo React</h1>
                <h1>Website React Demo</h1>
                <p>Website React - Performance Demo</p>

                {/* Lỗi img-missing-alt + perf-cls-images-no-dimensions: thiếu alt, width, height */}
                <img
                    src="https://picsum.photos/800/400"
                    className="hero-main-image"
                />

                {/* Lỗi img-missing-alt + img-missing-lazy: thiếu alt và lazy */}
                <img
                    src="https://picsum.photos/600/300"
                    className="hero-secondary-image"
                />

            </section>

            <section className="features">
                <Link to="/services" className="feature-card">
                    <h4>Dịch vụ</h4>
                    <p>Xem các dịch vụ</p>
                </Link>
                <Link to="/products" className="feature-card">
                    <h4>Sản phẩm</h4>
                    <p>Khám phá sản phẩm</p>
                </Link>
                <Link to="/blog" className="feature-card">
                    <h4>Blog</h4>
                    <p>Đọc bài viết mới</p>
                </Link>
            </section>

            {/* Lỗi Accessibility */}
            <section className="form-section">
                {/* a11y-missing-button-text */}
                <button className="empty-submit-btn"></button>

                {/* a11y-missing-form-labels */}
                <input type="text" id="searchInput" className="search-input-field" />

                {/* a11y-empty-links */}
                <a href="/empty-link" className="icon-link"></a>
            </section>
        </>
    );
}

export default HomePage;