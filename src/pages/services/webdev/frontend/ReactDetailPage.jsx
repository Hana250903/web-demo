import { Link } from 'react-router-dom';

function ReactDetailPage() {
    return (
        <main>
            <section className="page-hero depth-4">
                <div className="breadcrumb">
                    <Link to="/">Trang chủ</Link> &gt;
                    <Link to="/services"> Dịch vụ</Link> &gt;
                    <Link to="/services/webdev"> Web Dev</Link> &gt;
                    <Link to="/services/webdev/frontend"> Frontend</Link> &gt;
                    <span> React</span>
                </div>
                <span className="depth-badge">Depth: 4</span>
                <h2>React Development</h2>
                <p>Chi tiết về dịch vụ phát triển React</p>
            </section>
            <section className="content">
                <article>
                    <h3>React.js Development Services</h3>
                    <img src="https://picsum.photos/id/1/600/300" alt="React Development Services" width="600" height="300" />
                    <p>Chúng tôi cung cấp dịch vụ phát triển React chuyên nghiệp.</p>
                    <p><a href="https://react.dev" target="_blank" rel="noopener noreferrer">Tìm hiểu thêm về React</a></p>
                </article>
            </section>
        </main>
    );
}

export default ReactDetailPage;
