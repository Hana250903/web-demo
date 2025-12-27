import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <>
            <section className="hero">
                <h1>Chào mừng đến với trang Demo React</h1>
                <p>Website React - Performance Demo</p>
                <img
                    src="https://picsum.photos/800/400"
                    alt="Hero image"
                    width="800"
                    height="400"
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
        </>
    );
}

export default HomePage;
