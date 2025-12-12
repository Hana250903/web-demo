import { Link } from 'react-router-dom';

function FullstackPage() {
    return (
        <main>
            <section className="page-hero depth-3">
                <div className="breadcrumb">
                    <Link to="/">Trang chủ</Link> &gt;
                    <Link to="/services"> Dịch vụ</Link> &gt;
                    <Link to="/services/webdev"> Web Dev</Link> &gt;
                    <span> Fullstack</span>
                </div>
                <span className="depth-badge">Depth: 3</span>
                <h2>Fullstack Development</h2>
            </section>
            <section className="content">
                <article>
                    <h3>Dịch vụ Fullstack</h3>
                    <p>Giải pháp end-to-end từ frontend đến backend.</p>
                </article>
            </section>
        </main>
    );
}

export default FullstackPage;
