import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <>
            <section className="hero">
                <h1>Chào mừng đến với trang Demo React</h1>
                <h2>Website React Demo</h2>
                <p>Website React - Performance Demo</p>

                {/* LỖI LCP: Ảnh cực lớn 4K, thiếu alt, width, height, dùng lazy sai */}
                <img
                    src="https://picsum.photos/3840/2160"
                    className="hero-main-image"
                    alt="Main hero image showing a scenic landscape"
                    width="3840"
                    height="2160"
                />

                {/* LỖI: Thêm nhiều ảnh lớn để làm chậm LCP */}
                <img
                    src="https://picsum.photos/2560/1440"
                    className="hero-secondary-image"
                    alt="Secondary hero image with a different view"
                    width="2560"
                    height="1440"
                    loading="lazy"
                />

                <img
                    src="https://picsum.photos/1920/1080"
                    className="hero-third-image"
                    alt="Third hero image"
                    width="1920"
                    height="1080"
                    loading="lazy"
                />

                <img
                    src="https://picsum.photos/1600/900"
                    className="hero-fourth-image"
                    alt="Fourth hero image"
                    width="1600"
                    height="900"
                    loading="lazy"
                />

                <img
                    src="https://picsum.photos/1280/720"
                    className="hero-fifth-image"
                    alt="Fifth hero image"
                    width="1280"
                    height="720"
                    loading="lazy"
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
                <button className="empty-submit-btn">Gửi</button>

                {/* a11y-missing-form-labels */}
                <label htmlFor="searchInput" className="search-label">Tìm kiếm:</label>
                <input type="text" id="searchInput" className="search-input-field" />

                {/* a11y-empty-links */}
                <a href="/empty-link" className="icon-link">Chi tiết</a>
            </section>
        </>
    );
}

export default HomePage;