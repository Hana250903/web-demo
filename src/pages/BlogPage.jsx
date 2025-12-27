import { Link } from 'react-router-dom';

function BlogPage() {
    return (
        <>
            <div className="page-hero">
                <Link to="/">← Trang chủ</Link>
                <h2>Blog</h2>
            </div>
            <section>
                <p>Các bài viết mới nhất.</p>
            </section>
        </>
    );
}

export default BlogPage;
