import { Link } from 'react-router-dom';

function SEOPage() {
    return (
        <main>
            <section className="page-hero depth-2">
                <div className="breadcrumb">
                    <Link to="/">Trang chủ</Link> &gt;
                    <Link to="/services"> Dịch vụ</Link> &gt;
                    <span> SEO</span>
                </div>
                <span className="depth-badge">Depth: 2</span>
                <h2>SEO Services</h2>
            </section>
            <section className="content">
                <article>
                    <h3>Dịch vụ SEO</h3>
                    <p>Tăng thứ hạng website trên Google.</p>
                    <p><a href="https://google.com" target="_blank" rel="noopener noreferrer">Google Search</a></p>
                </article>
            </section>
        </main>
    );
}

export default SEOPage;
