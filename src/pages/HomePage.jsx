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
                    alt="Main hero image showcasing a beautiful landscape for React Demo"
                    className="hero-main-image"
                    width="3840"
                    height="2160"
                    loading="eager"
                    fetchpriority="high"
                    srcset="https://picsum.photos/640/360 640w,
                            https://picsum.photos/1280/720 1280w,
                            https://picsum.photos/1920/1080 1920w,
                            https://picsum.photos/2560/1440 2560w,
                            https://picsum.photos/3840/2160 3840w"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 50vw"
                />

                <img
                    src="https://picsum.photos/2560/1440"
                    alt="Secondary hero image with a scenic view"
                    className="hero-secondary-image"
                    width="2560"
                    height="1440"
                    loading="lazy"
                    srcset="https://picsum.photos/426/240 426w,
                            https://picsum.photos/853/480 853w,
                            https://picsum.photos/1280/720 1280w,
                            https://picsum.photos/1920/1080 1920w,
                            https://picsum.photos/2560/1440 2560w"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 50vw"
                />

                <img
                    src="https://picsum.photos/1920/1080"
                    alt="Third hero image displaying a natural landscape"
                    className="hero-third-image"
                    width="1920"
                    height="1080"
                    loading="lazy"
                    srcset="https://picsum.photos/320/180 320w,
                            https://picsum.photos/640/360 640w,
                            https://picsum.photos/960/540 960w,
                            https://picsum.photos/1280/720 1280w,
                            https://picsum.photos/1920/1080 1920w"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 50vw"
                />

                <img
                    src="https://picsum.photos/1600/900"
                    alt="Fourth hero image with an abstract background"
                    className="hero-fourth-image"
                    width="1600"
                    height="900"
                    loading="lazy"
                    srcset="https://picsum.photos/266/150 266w,
                            https://picsum.photos/533/300 533w,
                            https://picsum.photos/800/450 800w,
                            https://picsum.photos/1200/675 1200w,
                            https://picsum.photos/1600/900 1600w"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 50vw"
                />

                <img
                    src="https://picsum.photos/1280/720"
                    alt="Fifth hero image showing a modern building"
                    className="hero-fifth-image"
                    width="1280"
                    height="720"
                    loading="lazy"
                    srcset="https://picsum.photos/213/120 213w,
                            https://picsum.photos/426/240 426w,
                            https://picsum.photos/640/360 640w,
                            https://picsum.photos/960/540 960w,
                            https://picsum.photos/1280/720 1280w"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 50vw"
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

                <a href="/empty-link" className="icon-link">Liên kết trống</a>
            </section>
        </>
    );
}

export default HomePage;