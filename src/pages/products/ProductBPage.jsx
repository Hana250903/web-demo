import { Link } from 'react-router-dom';

function ProductBPage() {
    return (
        <main>
            <section className="page-hero depth-2">
                <div className="breadcrumb">
                    <Link to="/">Trang chủ</Link> &gt;
                    <Link to="/products"> Sản phẩm</Link> &gt;
                    <span> Product B</span>
                </div>
                <span className="depth-badge">Depth: 2</span>
                <h2>Product B</h2>
            </section>
            <section className="content">
                <article>
                    <h3>Chi tiết Product B</h3>
                    <p>Thiết kế cho doanh nghiệp.</p>
                </article>
            </section>
        </main>
    );
}

export default ProductBPage;
