import { Link } from 'react-router-dom';

function ProductsPage() {
    return (
        <>
            <div className="page-hero">
                <Link to="/">← Trang chủ</Link>
                <h2>Sản phẩm</h2>
            </div>
            <section>
                <p>Danh sách sản phẩm.</p>
            </section>
        </>
    );
}

export default ProductsPage;
