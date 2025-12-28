import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <>
            <section className="hero">
                <h1>Chào mừng đến với trang Demo React</h1>
                <h1>Website React Demo</h1>
                <p>Website React - Performance Demo</p>

                <img
                    src="https://picsum.photos/3840/2160"
                    className="hero-main-image"
                />

                <img
                    src="https://picsum.photos/2560/1440"
                    className="hero-secondary-image"
                />

                <img
                    src="https://picsum.photos/1920/1080"
                    className="hero-third-image"
                />

                <img
                    src="https://picsum.photos/1600/900"
                    className="hero-fourth-image"
                />

                <img
                    src="https://picsum.photos/1280/720"
                    className="hero-fifth-image"
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
                <button className="empty-submit-btn"></button>

                <input type="text" id="searchInput" className="search-input-field" placeholder="Tìm kiếm..." />

                <a href="/empty-link" className="icon-link"></a>
            </section>
        </>
    );
}

export default HomePage;