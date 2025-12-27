import { Link } from 'react-router-dom';

function AboutPage() {
    return (
        <main>
            <section className="page-hero">
                <div className="breadcrumb"><Link to="/">Trang chủ</Link> &gt; <span> Giới thiệu</span></div>
                <span className="depth-badge">Depth: 1</span>
                <h2>Về Chúng Tôi</h2>
            </section>
            <section className="about-content">
                <article>
                    <h3>Câu chuyện</h3>
                    <p>Lorem ipsum dolor sit amet...</p>
                    <p><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></p>
                </article>
            </section>
        </main>
    );
}

export default AboutPage;