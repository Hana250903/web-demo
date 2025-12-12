import { Link } from 'react-router-dom';

function FrontendPage() {
    return (
        <main>
            <section className="page-hero depth-3">
                <div className="breadcrumb">
                    <Link to="/">Trang chủ</Link> &gt;
                    <Link to="/services"> Dịch vụ</Link> &gt;
                    <Link to="/services/webdev"> Web Dev</Link> &gt;
                    <span> Frontend</span>
                </div>
                <span className="depth-badge">Depth: 3</span>
                <h2>Frontend Development</h2>
            </section>
            <section className="features">
                <Link to="/services/webdev/frontend/react" className="feature-card">
                    <h4>React</h4>
                    <p>Thư viện UI phổ biến nhất</p>
                    <span className="nav-arrow">→</span>
                </Link>
                <Link to="/services/webdev/frontend/vue" className="feature-card">
                    <h4>Vue.js</h4>
                    <p>Framework progressive</p>
                    <span className="nav-arrow">→</span>
                </Link>
                <Link to="/services/webdev/frontend/angular" className="feature-card">
                    <h4>Angular</h4>
                    <p>Platform của Google</p>
                    <span className="nav-arrow">→</span>
                </Link>
            </section>
        </main>
    );
}

export default FrontendPage;
