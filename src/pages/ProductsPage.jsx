import { Link } from 'react-router-dom';

function ProductsPage() {
    return (
        <main>
            <section className="page-hero depth-1">
                <div className="breadcrumb"><Link to="/">Trang chủ</Link> &gt; <span> Sản phẩm</span></div>
                <span className="depth-badge">Depth: 1</span>
                <h2>Sản Phẩm</h2>
            </section>
            <section className="features">
                <Link to="/products/a" className="feature-card"><h4>Product A</h4><p>Sản phẩm hàng đầu</p><span className="nav-arrow">→</span></Link>
                <Link to="/products/b" className="feature-card"><h4>Product B</h4><p>Giải pháp doanh nghiệp</p><span className="nav-arrow">→</span></Link>
                <div className="feature-card"><h4>Product C</h4><p>Sản phẩm mới</p></div>
            </section>
        </main>
    );
}

export default ProductsPage;
