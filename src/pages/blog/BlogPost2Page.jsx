import { Link } from 'react-router-dom';

function BlogPost2Page() {
    return (
        <main>
            <section className="page-hero depth-2">
                <div className="breadcrumb">
                    <Link to="/">Trang chủ</Link> &gt;
                    <Link to="/blog"> Blog</Link> &gt;
                    <span> Bài viết 2</span>
                </div>
                <span className="depth-badge">Depth: 2</span>
                <h2>Performance Web</h2>
            </section>
            <section className="content">
                <article>
                    <h3>Tối ưu hiệu suất</h3>
                    <p>Hiệu suất là yếu tố quan trọng...</p>
                </article>
            </section>
        </main>
    );
}

export default BlogPost2Page;
