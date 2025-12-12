import { Link } from 'react-router-dom';

function MobileDevPage() {
    return (
        <main>
            <section className="page-hero depth-2">
                <div className="breadcrumb">
                    <Link to="/">Trang chủ</Link> &gt;
                    <Link to="/services"> Dịch vụ</Link> &gt;
                    <span> Mobile Development</span>
                </div>
                <span className="depth-badge">Depth: 2</span>
                <h2>Mobile Development</h2>
            </section>
            <section className="features">
                <div className="feature-card"><h4>iOS</h4><p>Swift & SwiftUI</p></div>
                <div className="feature-card"><h4>Android</h4><p>Kotlin & Jetpack</p></div>
                <div className="feature-card"><h4>Cross-platform</h4><p>React Native, Flutter</p></div>
            </section>
        </main>
    );
}

export default MobileDevPage;
