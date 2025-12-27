import { Link } from 'react-router-dom';

function ServicesPage() {
    return (
        <>
            <div className="page-hero">
                <Link to="/">← Trang chủ</Link>
                <h2>Dịch vụ</h2>
            </div>
            <section>
                <p>Danh sách các dịch vụ của chúng tôi.</p>
            </section>
        </>
    );
}

export default ServicesPage;
