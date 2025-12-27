import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

// === BLOCKING CODE CHẠY NGAY KHI MODULE LOAD (trước render) ===
// Đây là cách thực sự block main thread
const startTime = performance.now();
let heavyResult = 0;
for (let i = 0; i < 10000000; i++) {
    heavyResult += Math.sqrt(i) * Math.sin(i) * Math.cos(i);
}
console.log(`Module-level blocking took: ${performance.now() - startTime}ms`);

// Thêm blocking computation
function expensiveCalculation() {
    let result = 0;
    for (let i = 0; i < 5000000; i++) {
        result += Math.pow(i, 0.5) * Math.log(i + 1);
    }
    return result;
}

function HomePage() {
    const [lateContent, setLateContent] = useState(false);
    const [extraContent, setExtraContent] = useState(false);

    // === BLOCKING TRONG RENDER FUNCTION ===
    // Chạy mỗi lần render
    const renderBlockingResult = expensiveCalculation();

    useEffect(() => {
        // === CLS: Multiple late layout shifts ===
        setTimeout(() => {
            setLateContent(true);
        }, 300);

        setTimeout(() => {
            setExtraContent(true);
        }, 800);
    }, []);

    return (
        <main>
            {/* SEO Issues */}
            <h1>Tiêu đề H1 chính của trang</h1>
            <h2>Tiêu đề H2 thứ hai - đã sửa lỗi SEO</h2> {/* Changed from H1 to H2 */}

            {/* === CLS ISSUE 1: Late injected banner === */}
            {lateContent && (
                <div style={{
                    height: '200px',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    padding: '30px',
                    marginBottom: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '24px'
                }}>
                    ⚠️ BANNER LOAD MUỘN - GÂY LAYOUT SHIFT LỚN ⚠️
                </div>
            )}

            {/* === CLS ISSUE 2: Another late content === */}
            {extraContent && (
                <div style={{
                    height: '150px',
                    background: '#ff6b6b',
                    padding: '20px',
                    marginBottom: '20px',
                    color: 'white',
                    fontSize: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    🔴 NỘI DUNG BỔ SUNG - THÊM LAYOUT SHIFT 🔴
                </div>
            )}

            <section className="hero depth-0">
                <h2>Chào mừng đến với trang Demo React</h2>
                <p>Website React - Performance Demo (Result: {renderBlockingResult.toFixed(2)})</p>

                {/* === LCP ISSUES: Very large images === */}
                <img src="https://picsum.photos/3000/2000" className="hero-image-main" alt="Main hero image showing a scenic view" loading="lazy" width="3000" height="2000" />
                <img src="https://picsum.photos/2500/1500" className="hero-image-secondary" alt="Secondary hero image with a different landscape" loading="lazy" width="2500" height="1500" />

                {/* === More images = slower load === */}
                <div style={{ display: 'flex', gap: '10px', marginTop: '20px', flexWrap: 'wrap' }}>
                    <img src="https://picsum.photos/400/300?random=1" alt="Random image 1" loading="lazy" width="400" height="300" />
                    <img src="https://picsum.photos/400/300?random=2" alt="Random image 2" loading="lazy" width="400" height="300" />
                    <img src="https://picsum.photos/400/300?random=3" alt="Random image 3" loading="lazy" width="400" height="300" />
                    <img src="https://picsum.photos/400/300?random=4" alt="Random image 4" loading="lazy" width="400" height="300" />
                    <img src="https://picsum.photos/400/300?random=5" alt="Random image 5" loading="lazy" width="400" height="300" />
                    <img src="https://picsum.photos/400/300?random=6" alt="Random image 6" loading="lazy" width="400" height="300" />
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
                <button className="empty-submit-btn">Gửi</button> {/* Added text */}
                <label htmlFor="search-input">Tìm kiếm:</label> {/* Added label */}
                <input id="search-input" type="text" className="search-input-field" /> {/* Added id */}
                <a href="/empty-link" className="icon-link">Liên kết trống</a> {/* Added text */}
            </section>

            {/* === HEAVY CSS ELEMENTS === */}
            <section style={{ marginTop: '30px' }}>
                {[...Array(20)].map((_, i) => (
                    <div key={i} style={{
                        padding: '20px',
                        margin: '10px 0',
                        background: `linear-gradient(${i * 18}deg, #667eea, #764ba2)`,
                        boxShadow: '0 10px 40px rgba(0,0,0,0.3), 0 5px 20px rgba(0,0,0,0.2), 0 2px 10px rgba(0,0,0,0.1)',
                        borderRadius: '10px',
                        backdropFilter: 'blur(5px)',
                        transform: 'translateZ(0)',
                        willChange: 'transform'
                    }}>
                        <p style={{ color: 'white', margin: 0 }}>Heavy styled element {i + 1}</p>
                    </div>
                ))}
            </section>

            <section className="content">
                <article>
                    <h3>Backlinks</h3>
                    <p><a href="https://google.com" target="_blank" rel="noopener noreferrer">Google</a></p>
                    <p><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></p>
                </article>
            </section>
        </main>
    );
}

export default HomePage;