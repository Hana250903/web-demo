import { Link } from 'react-router-dom';

function AboutPage() {
    return (
        <>
            <div className="page-hero">
                <Link to="/">← Trang chủ</Link>
                <h2>Giới thiệu</h2>
            </div>
            <section>
                <p>Thông tin về chúng tôi.</p>
            </section>
        </>
    );
}

export default AboutPage;