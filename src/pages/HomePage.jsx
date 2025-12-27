import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <>
            <section className="hero">
                <h1>Chào mừng đến với trang Demo React</h1>
                <h2>Website React Demo</h2>
                <p>Website React - Performance Demo</p>

                {/* Lỗi img-missing-alt + perf-cls-images-no-dimensions: thiếu alt, width, height */}
                <img
                    src="https://picsum.photos/800/400"
                    className="hero-main-image"
                    alt="Hình ảnh chính của trang demo React"
                    width="800"
                    height="400"
                    loading="lazy"
                />

                {/* Lỗi img-missing-alt + img-missing-lazy: thiếu alt và lazy */}
                <img
                    src="https://picsum.photos/600/300"
                    className="hero-secondary-image"
                    alt="Hình ảnh phụ minh họa"
                    width="600"
                    height="300"
                    loading="lazy"
                />

            </section>

            {/* Lỗi perf-too-many-images: quá nhiều ảnh */}
            <section className="gallery">
                <img src="https://picsum.photos/200/150?random=1" alt="Hình ảnh ngẫu nhiên 1" width="200" height="150" loading="lazy" />
                <img src="https://picsum.photos/200/150?random=2" alt="Hình ảnh ngẫu nhiên 2" width="200" height="150" loading="lazy" />
                <img src="https://picsum.photos/200/150?random=3" alt="Hình ảnh ngẫu nhiên 3" width="200" height="150" loading="lazy" />
                <img src="https://picsum.photos/200/150?random=4" alt="Hình ảnh ngẫu nhiên 4" width="200" height="150" loading="lazy" />
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
                <button className="empty-submit-btn">Gửi</button>

                {/* a11y-missing-form-labels */}
                <label htmlFor="searchInput">Tìm kiếm:</label>
                <input type="text" id="searchInput" className="search-input-field" />

                {/* a11y-empty-links */}
                <a href="/empty-link" className="icon-link">Liên kết trống</a>
            </section>
        </>
    );
}

export default HomePage;