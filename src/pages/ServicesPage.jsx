import { Link } from 'react-router-dom';

function ServicesPage() {
    return (
        <main>
            <section className="page-hero depth-1">
                <div className="breadcrumb"><Link to="/">Trang chủ</Link> &gt; <span> Dịch vụ</span></div>
                <span className="depth-badge">Depth: 1</span>
                <h2>Dịch Vụ</h2>
            </section>
            <section className="features">
                <Link to="/services/webdev" className="feature-card"><h4>Web Development</h4><p>Phát triển website</p><span className="nav-arrow">→</span></Link>
                <Link to="/services/mobile" className="feature-card"><h4>Mobile Development</h4><p>Ứng dụng di động</p><span className="nav-arrow">→</span></Link>
                <Link to="/services/seo" className="feature-card"><h4>SEO</h4><p>Tối ưu tìm kiếm</p><span className="nav-arrow">→</span></Link>
            </section>
        </main>
    );
}

export default ServicesPage;
