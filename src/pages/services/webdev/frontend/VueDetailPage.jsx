import { Link } from 'react-router-dom';

function VueDetailPage() {
    return (
        <main>
            <section className="page-hero depth-4">
                <div className="breadcrumb">
                    <Link to="/">Trang chủ</Link> &gt;
                    <Link to="/services"> Dịch vụ</Link> &gt;
                    <Link to="/services/webdev"> Web Dev</Link> &gt;
                    <Link to="/services/webdev/frontend"> Frontend</Link> &gt;
                    <span> Vue</span>
                </div>
                <span className="depth-badge">Depth: 4</span>
                <h2>Vue.js Development</h2>
            </section>
            <section className="content">
                <article>
                    <h3>Vue.js Development Services</h3>
                    <img src="https://picsum.photos/id/2/600/300" alt="Vue.js Development Services" width="600" height="300" />
                    <p><a href="https://vuejs.org" target="_blank" rel="noopener noreferrer">Tìm hiểu thêm về Vue</a></p>
                </article>
            </section>
        </main>
    );
}

export default VueDetailPage;
