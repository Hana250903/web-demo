import { Link } from 'react-router-dom';

function ProductAPage() {
    return (
        <main>
            <section className="page-hero depth-2">
                <div className="breadcrumb">
                    <Link to="/">Trang chủ</Link> &gt;
                    <Link to="/products"> Sản phẩm</Link> &gt;
                    <span> Product A</span>
                </div>
                <span className="depth-badge">Depth: 2</span>
                <h2>Product A</h2>
            </section>
            <section className="content">
                <article>
                    <h3>Chi tiết Product A</h3>
                    <p>Giải pháp tiên tiến.</p>
                </article>
            </section>
        </main>
    );
}

export default ProductAPage;
