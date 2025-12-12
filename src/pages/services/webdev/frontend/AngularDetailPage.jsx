import { Link } from 'react-router-dom';

function AngularDetailPage() {
    return (
        <main>
            <section className="page-hero depth-4">
                <div className="breadcrumb">
                    <Link to="/">Trang chủ</Link> &gt;
                    <Link to="/services"> Dịch vụ</Link> &gt;
                    <Link to="/services/webdev"> Web Dev</Link> &gt;
                    <Link to="/services/webdev/frontend"> Frontend</Link> &gt;
                    <span> Angular</span>
                </div>
                <span className="depth-badge">Depth: 4</span>
                <h2>Angular Development</h2>
            </section>
            <section className="content">
                <article>
                    <h3>Angular Development Services</h3>
                    <img src="https://picsum.photos/id/3/600/300" alt="Angular Development Services" width="600" height="300" />
                    <p><a href="https://angular.io" target="_blank" rel="noopener noreferrer">Tìm hiểu thêm về Angular</a></p>
                </article>
            </section>
        </main>
    );
}

export default AngularDetailPage;
