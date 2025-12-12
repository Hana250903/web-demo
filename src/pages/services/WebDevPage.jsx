import { Link } from 'react-router-dom';

function WebDevPage() {
    return (
        <main>
            <section className="page-hero depth-2">
                <div className="breadcrumb">
                    <Link to="/">Trang chủ</Link> &gt;
                    <Link to="/services"> Dịch vụ</Link> &gt;
                    <span> Web Development</span>
                </div>
                <span className="depth-badge">Depth: 2</span>
                <h2>Web Development</h2>
            </section>
            <section className="features">
                <Link to="/services/webdev/frontend" className="feature-card"><h4>Frontend</h4><p>React, Vue, Angular</p><span className="nav-arrow">→</span></Link>
                <Link to="/services/webdev/backend" className="feature-card"><h4>Backend</h4><p>Node.js, .NET, Python</p><span className="nav-arrow">→</span></Link>
                <Link to="/services/webdev/fullstack" className="feature-card"><h4>Fullstack</h4><p>Giải pháp toàn diện</p><span className="nav-arrow">→</span></Link>
            </section>
        </main>
    );
}

export default WebDevPage;
