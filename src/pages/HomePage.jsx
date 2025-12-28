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
                    alt="Hình ảnh chính của trang demo React"
                    className="hero-main-image"
                    width="3840"
                    height="2160"
                    loading="eager"
                    srcset="https://picsum.photos/640/360 640w,
                            https://picsum.photos/1280/720 1280w,
                            https://picsum.photos/1920/1080 1920w,
                            https://picsum.photos/2560/1440 2560w,
                            https://picsum.photos/3840/2160 3840w"
                    sizes="(max-width: 600px) 640px,
                           (max-width: 1200px) 1280px,
                           (max-width: 1920px) 1920px,
                           (max-width: 2560px) 2560px,
                           3840px"
                />

                <img
                    src="https://picsum.photos/2560/1440"
                    alt="Hình ảnh phụ minh họa"
                    className="hero-secondary-image"
                    width="2560"
                    height="1440"
                    loading="lazy"
                />

                <img
                    src="https://picsum.photos/1920/1080"
                    alt="Hình ảnh thứ ba minh họa"
                    className="hero-third-image"
                    width="1920"
                    height="1080"
                    loading="lazy"
                />

                <img
                    src="https://picsum.photos/1600/900"
                    alt="Hình ảnh thứ tư minh họa"
                    className="hero-fourth-image"
                    width="1600"
                    height="900"
                    loading="lazy"
                />

                <img
                    src="https://picsum.photos/1280/720"
                    alt="Hình ảnh thứ năm minh họa"
                    className="hero-fifth-image"
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

                <input type="text" id="searchInput" className="search-input-field" placeholder="Tìm kiếm..." />

                <a href="/empty-link" className="icon-link" aria-label="Liên kết trống"></a>
            </section>
        </>
    );
}

export default HomePage;