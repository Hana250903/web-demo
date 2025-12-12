import { Link } from 'react-router-dom';

function BackendPage() {
    return (
        <main>
            <section className="page-hero depth-3">
                <div className="breadcrumb">
                    <Link to="/">Trang chủ</Link> &gt;
                    <Link to="/services"> Dịch vụ</Link> &gt;
                    <Link to="/services/webdev"> Web Dev</Link> &gt;
                    <span> Backend</span>
                </div>
                <span className="depth-badge">Depth: 3</span>
                <h2>Backend Development</h2>
            </section>
            <section className="features">
                <div className="feature-card"><h4>Node.js</h4><p>JavaScript runtime</p></div>
                <div className="feature-card"><h4>.NET Core</h4><p>Microsoft framework</p></div>
                <div className="feature-card"><h4>Python</h4><p>Django & FastAPI</p></div>
            </section>
        </main>
    );
}

export default BackendPage;
