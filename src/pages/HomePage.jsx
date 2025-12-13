import { useState, useEffect, useCallback, useMemo, useRef } from 'react';  // LỖI: Unused imports
import { Link } from 'react-router-dom';

// LỖI: Large unused data
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
            <section className="hero depth-0">
                <span className="depth-badge">Depth: 0</span>
                <h1>Chào mừng đến với trang Demo React</h1>
                <p>Website React với cấu trúc 5 cấp độ sâu (0-4) để test Crawler</p>
                <img src="https://picsum.photos/1200/600" alt="Hero" loading="lazy" width="1200" height="600" />
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
                    {/* LỖI: Links thiếu rel */}
                    <p>Tham khảo tại <a href="https://google.com" target="_blank">Google</a></p>
                    <p>Hoặc xem <a href="https://github.com" target="_blank">GitHub</a></p>
                </article>
            </section>
        </main>
    );
}

export default HomePage;