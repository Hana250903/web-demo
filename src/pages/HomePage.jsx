import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

// ==========================================
// PERFORMANCE ISSUES - Để gây ra điểm PageSpeed đỏ
// ==========================================

// 1. Heavy Computation - Blocking Main Thread (tăng Total Blocking Time)
function heavyComputation() {
    let result = 0;
    for (let i = 0; i < 50000000; i++) {
        result += Math.sqrt(i) * Math.sin(i);
    }
    return result;
}

// 2. Recursive Fibonacci - CPU intensive
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function HomePage() {
    const [layoutShift, setLayoutShift] = useState(false);
    const [dynamicContent, setDynamicContent] = useState('');
    const [showLargeContent, setShowLargeContent] = useState(false);

    useEffect(() => {
        // 3. Heavy computation on mount - blocks main thread
        console.log('Starting heavy computation...');
        const startTime = performance.now();
        heavyComputation();
        fibonacci(35); // Very expensive recursive call
        console.log(`Heavy computation took: ${performance.now() - startTime}ms`);

        // 4. Delayed layout shift - causes CLS issues
        setTimeout(() => {
            setLayoutShift(true);
        }, 500);

        // 5. Another delayed content injection - more CLS
        setTimeout(() => {
            setDynamicContent('Nội dung được inject động sau 1 giây - gây layout shift!');
        }, 1000);

        // 6. Late content loading - even more CLS
        setTimeout(() => {
            setShowLargeContent(true);
        }, 1500);

        // 7. Create multiple heavy event listeners
        const handleScroll = () => {
            // Force layout recalculation on every scroll
            document.querySelectorAll('*').forEach(el => {
                const _ = el.offsetHeight;
            });
        };

        const handleMouseMove = () => {
            // Another heavy operation
            for (let i = 0; i < 1000; i++) {
                Math.random();
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    // 8. Synchronous blocking render
    const blockingRender = () => {
        let html = '';
        for (let i = 0; i < 10; i++) {
            html += `<div class="blocking-item-${i}">Item ${i}</div>`;
        }
        return html;
    };

    return (
        <main>
            {/* 9. Inject blocking inline script */}
            <script dangerouslySetInnerHTML={{
                __html: `
                    // Synchronous blocking script
                    for(let i = 0; i < 10000000; i++) { 
                        Math.sqrt(i); 
                    }
                    console.log('Blocking script executed');
                `
            }} />

            <h1>Tiêu đề H1 thứ nhất</h1>
            <h2>Tiêu đề H2 phụ</h2>

            {/* 10. Dynamic content injection causing CLS */}
            {dynamicContent && (
                <div style={{
                    background: 'yellow',
                    padding: '20px',
                    margin: '20px 0',
                    fontSize: '24px',
                    fontWeight: 'bold'
                }}>
                    {dynamicContent}
                </div>
            )}

            {/* 11. Layout shifting element */}
            {layoutShift && (
                <div style={{
                    height: '200px',
                    background: 'linear-gradient(45deg, red, orange)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '28px',
                    marginBottom: '30px'
                }}>
                    ⚠️ LAYOUT SHIFT ELEMENT - INJECTED LATE ⚠️
                </div>
            )}

            <section className="hero depth-0">
                <h2>Chào mừng đến với trang Demo React</h2>
                <p>Website React - Performance Issues Demo</p>

                {/* 12. Multiple huge images without dimensions - LCP killer */}
                <img src="https://picsum.photos/4000/3000" alt="Huge image 1" />
                <img src="https://picsum.photos/3500/2500" alt="Huge image 2" />
                <img src="https://picsum.photos/3000/2000" alt="Huge image 3" />

                {/* 13. Unoptimized GIF */}
                <img src="https://media.giphy.com/media/3o7TKSjRrfIPjeiVyM/giphy.gif" alt="Heavy GIF" />

                {/* 14. Large background images */}
                <div style={{
                    width: '100%',
                    height: '500px',
                    backgroundImage: 'url(https://picsum.photos/5000/4000)',
                    backgroundSize: 'cover',
                    marginTop: '20px'
                }}>
                    <p style={{ color: 'white', padding: '20px' }}>Large background image container</p>
                </div>
            </section>

            {/* 15. Late loaded large content - more CLS */}
            {showLargeContent && (
                <section style={{
                    background: '#f00',
                    padding: '50px',
                    marginTop: '20px'
                }}>
                    <h2 style={{ color: 'white' }}>🔴 LATE LOADED CONTENT - CLS ISSUE 🔴</h2>
                    <p style={{ color: 'white', fontSize: '20px' }}>
                        Nội dung này được load muộn và gây ra Cumulative Layout Shift lớn!
                    </p>
                    <img src="https://picsum.photos/2000/1500" alt="Another large image" />
                </section>
            )}

            <section className="features">
                <Link to="/services" className="feature-card"><h4>Dịch vụ</h4><p>Xem các dịch vụ</p><span className="nav-arrow">→</span></Link>
                <Link to="/products" className="feature-card"><h4>Sản phẩm</h4><p>Khám phá sản phẩm</p><span className="nav-arrow">→</span></Link>
                <Link to="/blog" className="feature-card"><h4>Blog</h4><p>Đọc bài viết mới</p><span className="nav-arrow">→</span></Link>
                <Link to="/broken" className="feature-card" style={{ borderColor: 'red' }}><h4>⚠️ Broken</h4><p>Trang lỗi</p><span className="nav-arrow">→</span></Link>
            </section>

            {/* 16. Heavy DOM with many elements */}
            <section className="heavy-dom">
                {Array.from({ length: 10 }, (_, i) => (
                    <div key={i} style={{
                        padding: '10px',
                        margin: '5px',
                        background: `hsl(${i * 2}, 70%, 80%)`,
                        borderRadius: '5px',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
                        transition: 'all 0.3s ease'
                    }}>
                        Heavy DOM Element {i + 1}
                        <img src={`https://picsum.photos/100/100?random=${i}`} alt={`Small img ${i}`} />
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

            {/* 17. Iframe - heavy resource */}
            <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                width="100%"
                height="500"
                title="Heavy iframe"
                style={{ border: 'none', marginTop: '20px' }}
            />

            {/* 18. Multiple iframes - resource intensive */}
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.123456789!2d106.123456!3d10.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDA3JzM0LjMiTiAxMDbCsDA3JzM0LjMiRQ!5e0!3m2!1sen!2s!4v1234567890123"
                width="100%"
                height="400"
                title="Heavy Google Maps iframe"
                style={{ border: 'none', marginTop: '20px' }}
            />

            {/* 19. Dangerously set HTML with heavy content */}
            <div dangerouslySetInnerHTML={{ __html: blockingRender() }} />

            {/* 20. Long list with complex styles */}
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {Array.from({ length: 10 }, (_, i) => (
                    <li key={i} style={{
                        padding: '15px',
                        margin: '10px 0',
                        background: `linear-gradient(135deg, hsl(${i * 3.6}, 80%, 60%), hsl(${i * 3.6 + 60}, 80%, 40%))`,
                        borderRadius: '10px',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                        transform: 'translateZ(0)',
                        willChange: 'transform, opacity',
                        backdropFilter: 'blur(10px)'
                    }}>
                        <span style={{ color: 'white', fontSize: '16px' }}>
                            Complex styled list item {i + 1} with heavy CSS
                        </span>
                    </li>
                ))}
            </ul>
        </main>
    );
}

export default HomePage;