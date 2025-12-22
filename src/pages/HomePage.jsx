import { useState, useEffect, useCallback, useMemo, useRef } from 'react';  // LỖI: Unused imports
import { Link } from 'react-router-dom';

// LỖI: Large unused data (để tăng bundle size)
const UNUSED_DATA = Array(500).fill(null).map((_, i) => ({
    id: i,
    name: `Item ${i}`,
    data: Array(50).fill(`data-${i}`)
}));

// LỖI: Heavy computation at load
let result = 0;
for (let i = 0; i < 200000; i++) {
    result += Math.sqrt(i) * Math.random();
}

function HomePage() {
    // LỖI: Console log mỗi render
    console.log("HomePage rendered");

    // LỖI: Unnecessary fetch
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => console.log("Unused fetch:", data.length));
    }, []);

    return (
        <main>
            {/* LỖI seo-multiple-h1: Có nhiều H1 */}
            <h1>Tiêu đề H1 thứ nhất</h1>
            <h1>Tiêu đề H1 thứ hai - Lỗi nhiều H1</h1>

            <section className="hero depth-0">
                <span className="depth-badge">Depth: 0</span>
                <h2>Chào mừng đến với trang Demo React</h2>
                <p>Website React với cấu trúc 5 cấp độ sâu (0-4) để test Crawler</p>

                {/* LỖI img-missing-alt: Hình ảnh thiếu thẻ Alt */}
                <img src="https://picsum.photos/1200/600" />

                {/* LỖI img-missing-lazy: Hình ảnh thiếu Lazy Load */}
                <img src="https://picsum.photos/800/400" alt="Image without lazy" />
            </section>

            <section className="features">
                <Link to="/services" className="feature-card"><h4>Dịch vụ</h4><p>Xem các dịch vụ</p><span className="nav-arrow">→</span></Link>
                <Link to="/products" className="feature-card"><h4>Sản phẩm</h4><p>Khám phá sản phẩm</p><span className="nav-arrow">→</span></Link>
                <Link to="/blog" className="feature-card"><h4>Blog</h4><p>Đọc bài viết mới</p><span className="nav-arrow">→</span></Link>
                <Link to="/broken" className="feature-card" style={{ borderColor: 'red' }}><h4>⚠️ Broken Page</h4><p>Trang có nhiều lỗi</p><span className="nav-arrow">→</span></Link>
            </section>

            <section className="content">
                <article>
                    <h3>Backlinks</h3>
                    <p>Tham khảo tại <a href="https://google.com" target="_blank" rel="noopener noreferrer">Google</a></p>
                    <p>Hoặc xem <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></p>
                </article>
            </section>

            {/* LỖI a11y-missing-button-text: Button thiếu text */}
            <button></button>
            <button aria-label=""></button>

            {/* LỖI a11y-missing-form-labels: Input thiếu label */}
            <input type="text" />
            <input type="email" />

            {/* LỖI a11y-empty-links: Link thiếu text */}
            <a href="/somewhere"></a>
            <a href="/another"></a>

            {/* LỖI perf-inline-css: Inline CSS quá nhiều */}
            <style>
                {`
                    .unused-class-1 { color: red; padding: 20px; margin: 10px; background: blue; border: 1px solid black; }
                    .unused-class-2 { color: green; padding: 30px; margin: 20px; background: yellow; border: 2px solid gray; }
                    .unused-class-3 { color: purple; padding: 40px; margin: 30px; background: orange; border: 3px solid white; }
                    .unused-class-4 { color: pink; padding: 50px; margin: 40px; background: cyan; border: 4px solid red; }
                    .unused-class-5 { color: brown; padding: 60px; margin: 50px; background: magenta; border: 5px solid blue; }
                    .unused-class-6 { transform: rotate(45deg); animation: spin 2s infinite; box-shadow: 0 0 50px rgba(0,0,0,0.5); }
                    .unused-class-7 { display: flex; justify-content: center; align-items: center; flex-direction: column; }
                    .unused-class-8 { position: absolute; top: 0; left: 0; right: 0; bottom: 0; z-index: 9999; }
                    .unused-class-9 { filter: blur(5px) brightness(1.2) contrast(1.1) saturate(1.5); backdrop-filter: blur(10px); }
                    .unused-class-10 { background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); }
                    @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                `}
            </style>
        </main>
    );
}

export default HomePage;