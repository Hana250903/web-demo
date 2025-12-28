import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <>
            <section className="hero">
                <h1>Chào mừng đến với trang Demo React</h1>
                <h2>Website React Demo</h2>
                <p>Website React - Performance Demo</p>

                <img
                    src="https://picsum.photos/3840/2160"
                    className="hero-main-image"
                    alt="Ảnh chính của trang demo"
                    width="3840"
                    height="2160"
                />

                <img
                    src="https://picsum.photos/2560/1440"
                    className="hero-secondary-image"
                    alt="Ảnh phụ minh họa"
                    width="2560"
                    height="1440"
                />

                <img
                    src="https://picsum.photos/1920/1080"
                    className="hero-third-image"
                    alt="Ảnh thứ ba minh họa"
                    width="1920"
                    height="1080"
                />

                <img
                    src="https://picsum.photos/1600/900"
                    className="hero-fourth-image"
                    alt="Ảnh thứ tư minh họa"
                    width="1600"
                    height="900"
                    loading="lazy"
                />

                <img
                    src="https://picsum.photos/1280/720"
                    className="hero-fifth-image"
                    alt="Ảnh thứ năm minh họa"
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

            <section className="form-section">
                <button className="empty-submit-btn">Gửi</button>

                <label htmlFor="searchInput" className="visually-hidden">Tìm kiếm</label>
                <input type="text" id="searchInput" className="search-input-field" placeholder="Tìm kiếm..." />

                <a href="/empty-link" className="icon-link">Xem chi tiết</a>
            </section>
        </>
    );
}

export default HomePage;