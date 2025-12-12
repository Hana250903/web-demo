import { Link } from 'react-router-dom';

function BlogPost1Page() {
    return (
        <main>
            <section className="page-hero depth-2">
                <div className="breadcrumb">
                    <Link to="/">Trang chủ</Link> &gt;
                    <Link to="/blog"> Blog</Link> &gt;
                    <span> Bài viết 1</span>
                </div>
                <span className="depth-badge">Depth: 2</span>
                <h2>Xu hướng Web 2024</h2>
            </section>
            <section className="content">
                <article>
                    <h3>Các xu hướng web năm 2024</h3>
                    <img src="https://picsum.photos/id/10/800/400" alt="Xu hướng web 2024" width="800" height="400" />
                    <p>Năm 2024 đánh dấu nhiều thay đổi lớn...</p>
                    <p><a href="https://developer.mozilla.org" target="_blank" rel="noopener noreferrer">MDN Web Docs</a></p>
                </article>
            </section>
        </main>
    );
}

export default BlogPost1Page;
