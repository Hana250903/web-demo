import { Link } from 'react-router-dom';

function BlogPage() {
    return (
        <main>
            <section className="page-hero depth-1">
                <div className="breadcrumb"><Link to="/">Trang chủ</Link> &gt; <span> Blog</span></div>
                <span className="depth-badge">Depth: 1</span>
                <h2>Blog</h2>
            </section>
            <section className="features">
                <Link to="/blog/post-1" className="feature-card"><h4>Xu hướng Web 2024</h4><p>Tháng 12, 2024</p><span className="nav-arrow">→</span></Link>
                <Link to="/blog/post-2" className="feature-card"><h4>Performance Web</h4><p>Tháng 11, 2024</p><span className="nav-arrow">→</span></Link>
                <div className="feature-card"><h4>AI trong Web</h4><p>Tháng 10, 2024</p></div>
            </section>
        </main>
    );
}

export default BlogPage;
