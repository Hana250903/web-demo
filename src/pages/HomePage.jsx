import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function HomePage() {
    const [lateContent, setLateContent] = useState(false);
    const [dynamicHeight, setDynamicHeight] = useState('auto');

    useEffect(() => {
        // === PERFORMANCE ISSUE 1: Blocking JavaScript (tăng TBT) ===
        // Chạy heavy computation ngay khi component mount
        const startTime = performance.now();
        let result = 0;
        for (let i = 0; i < 5000000; i++) {
            result += Math.sqrt(i) * Math.sin(i);
        }
        console.log(`Blocking JS took: ${performance.now() - startTime}ms`);

        // === PERFORMANCE ISSUE 2: Late Layout Shift (tăng CLS) ===
        // Inject content sau 500ms gây layout shift
        setTimeout(() => {
            setLateContent(true);
            setDynamicHeight('150px');
        }, 500);
    }, []);

    return (
        <main>
            {/* SEO Issue: Multiple H1 */}
            <h1>Tiêu đề H1 chính của trang</h1>
            <h1>Tiêu đề H1 thứ hai - gây lỗi SEO</h1>

            <h2>Tiêu đề H2 phụ</h2>

            {/* === PERFORMANCE ISSUE 3: CLS từ dynamic content === */}
            {lateContent && (
                <div style={{
                    height: dynamicHeight,
                    background: 'linear-gradient(45deg, #ff6b6b, #feca57)',
                    padding: '20px',
                    marginBottom: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '18px'
                }}>
                    ⚠️ NỘI DUNG LOAD MUỘN - GÂY LAYOUT SHIFT ⚠️
                </div>
            )}

            <section className="hero depth-0">
                <h2>Chào mừng đến với trang Demo React</h2>
                <p>Website React - Performance Demo</p>

                {/* === PERFORMANCE ISSUE 4: Large unoptimized images (tăng LCP) === */}
                {/* Ảnh lớn không có width/height gây reflow */}
                <img src="https://picsum.photos/2000/1200" className="hero-image-main" />
                <img src="https://picsum.photos/1800/1000" className="hero-image-secondary" />

                {/* === PERFORMANCE ISSUE 5: Nhiều ảnh nhỏ không lazy load === */}
                <div style={{ display: 'flex', gap: '10px', marginTop: '20px', flexWrap: 'wrap' }}>
                    <img src="https://picsum.photos/300/200?random=1" />
                    <img src="https://picsum.photos/300/200?random=2" />
                    <img src="https://picsum.photos/300/200?random=3" />
                    <img src="https://picsum.photos/300/200?random=4" />
                </div>
            </section>

            <section className="features">
                <Link to="/services" className="feature-card"><h4>Dịch vụ</h4><p>Xem các dịch vụ</p><span className="nav-arrow">→</span></Link>
                <Link to="/products" className="feature-card"><h4>Sản phẩm</h4><p>Khám phá sản phẩm</p><span className="nav-arrow">→</span></Link>
                <Link to="/blog" className="feature-card"><h4>Blog</h4><p>Đọc bài viết mới</p><span className="nav-arrow">→</span></Link>
                <Link to="/broken" className="feature-card" style={{ borderColor: 'red' }}><h4>⚠️ Broken</h4><p>Trang lỗi</p><span className="nav-arrow">→</span></Link>
            </section>

            {/* Accessibility Issues */}
            <section className="form-section">
                <button className="empty-submit-btn"></button>
                <input type="text" className="search-input-field" />
                <a href="/empty-link" className="icon-link"></a>
            </section>

            <section className="content">
                <article>
                    <h3>Backlinks</h3>
                    <p><a href="https://google.com" target="_blank" rel="noopener noreferrer">Google</a></p>
                    <p><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></p>
                </article>
            </section>

            {/* === PERFORMANCE ISSUE 6: Heavy inline styles (tăng render time) === */}
            <div style={{
                boxShadow: '0 0 50px rgba(0,0,0,0.3), 0 0 100px rgba(0,0,0,0.2)',
                filter: 'blur(0px)',
                transform: 'translateZ(0)',
                willChange: 'transform, opacity',
                backdropFilter: 'blur(5px)'
            }}>
                <p>Element với heavy CSS effects</p>
            </div>
        </main>
    );
}

export default HomePage;