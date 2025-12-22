import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';

// LỖI NẶNG: Heavy computation BLOCKING main thread khi load module
// Ảnh hưởng TBT (Total Blocking Time)
function heavyBlockingComputation() {
    let result = 0;
    for (let i = 0; i < 5000000; i++) {
        result += Math.sqrt(i) * Math.sin(i) * Math.cos(i) * Math.tan(i % 1.5 + 0.1);
    }
    return result;
}
const HEAVY_RESULT = heavyBlockingComputation();

// LỖI: Large data in memory
const LARGE_DATA = Array(2000).fill(null).map((_, i) => ({
    id: i,
    name: `Item ${i}`,
    description: `Very long description for item ${i} `.repeat(50),
    data: Array(100).fill(`data-${i}-value`)
}));

function HomePage() {
    const [count, setCount] = useState(0);

    // LỖI: Heavy computation trong render - ảnh hưởng TBT
    let renderResult = 0;
    for (let i = 0; i < 1000000; i++) {
        renderResult += Math.random() * Math.sqrt(i);
    }

    // LỖI: Multiple unnecessary re-renders
    useEffect(() => {
        const interval = setInterval(() => {
            setCount(c => c + 1);
        }, 100);
        // Memory leak - không cleanup
    }, []);

    // LỖI: Fetch không cần thiết, chạy nhiều lần
    useEffect(() => {
        for (let i = 0; i < 5; i++) {
            fetch(`https://jsonplaceholder.typicode.com/posts/${i + 1}`)
                .then(res => res.json())
                .then(data => console.log("Fetched:", data.id));
        }
    }, []);

    return (
        <main>
            {/* LỖI seo-multiple-h1 */}
            <h1>Tiêu đề H1 thứ nhất</h1>
            <h2>Tiêu đề H2 phụ</h2>

            <section className="hero depth-0">
                <span className="depth-badge">Depth: 0 | Count: {count} | Result: {renderResult.toFixed(2)}</span>
                <h2>Chào mừng đến với trang Demo React</h2>
                <p>Website React - Heavy result: {HEAVY_RESULT.toFixed(2)}</p>

                {/* LỖI CLS: Images không có width/height - gây Layout Shift */}
                <img src="https://picsum.photos/1200/600" alt="Ảnh minh họa lớn" loading="lazy" width="1200" height="600" />
                <img src="https://picsum.photos/1000/500" alt="Ảnh minh họa trung bình" loading="lazy" width="1000" height="500" />
                <img src="https://picsum.photos/800/400" alt="Ảnh minh họa nhỏ hơn" loading="lazy" width="800" height="400" />
                <img src="https://picsum.photos/600/300" alt="Ảnh minh họa ngang" loading="lazy" width="600" height="300" />
                <img src="https://picsum.photos/400/200" alt="Ảnh minh họa nhỏ" loading="lazy" width="400" height="200" />
            </section>

            <section className="features">
                <Link to="/services" className="feature-card"><h4>Dịch vụ</h4><p>Xem các dịch vụ</p><span className="nav-arrow">→</span></Link>
                <Link to="/products" className="feature-card"><h4>Sản phẩm</h4><p>Khám phá sản phẩm</p><span className="nav-arrow">→</span></Link>
                <Link to="/blog" className="feature-card"><h4>Blog</h4><p>Đọc bài viết mới</p><span className="nav-arrow">→</span></Link>
                <Link to="/broken" className="feature-card" style={{ borderColor: 'red' }}><h4>⚠️ Broken</h4><p>Trang lỗi</p><span className="nav-arrow">→</span></Link>
            </section>

            <section className="content">
                <article>
                    <h3>Backlinks</h3>
                    <p><a href="https://google.com" target="_blank" rel="noopener noreferrer">Google</a></p>
                    <p><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></p>
                </article>
            </section>

            {/* LỖI a11y */}
            <button>Click Me</button>
            <input type="text" />
            <a href="/empty">Empty Link Page</a>

            {/* LỖI perf-inline-css: >10KB */}
            <style>
                {`
                    .u1{color:red;padding:20px;margin:10px;background:blue;border:1px solid black;font-size:14px;line-height:1.5;text-align:center;}
                    .u2{color:green;padding:30px;margin:20px;background:yellow;border:2px solid gray;font-weight:bold;text-decoration:underline;}
                    .u3{color:purple;padding:40px;margin:30px;background:orange;border:3px solid white;letter-spacing:2px;word-spacing:5px;}
                    .u4{color:pink;padding:50px;margin:40px;background:cyan;border:4px solid red;text-transform:uppercase;font-style:italic;}
                    .u5{color:brown;padding:60px;margin:50px;background:magenta;border:5px solid blue;overflow:hidden;position:relative;}
                    .u6{transform:rotate(45deg);animation:spin 2s infinite;box-shadow:0 0 50px rgba(0,0,0,0.5);transition:all 0.3s ease;}
                    .u7{display:flex;justify-content:center;align-items:center;flex-direction:column;flex-wrap:wrap;gap:10px;}
                    .u8{position:absolute;top:0;left:0;right:0;bottom:0;z-index:9999;pointer-events:none;opacity:0.5;}
                    .u9{filter:blur(5px) brightness(1.2) contrast(1.1) saturate(1.5);backdrop-filter:blur(10px);mix-blend-mode:multiply;}
                    .u10{background:linear-gradient(to right,red,orange,yellow,green,blue,indigo,violet);background-size:200% 200%;}
                    .u11{box-sizing:border-box;outline:none;resize:none;appearance:none;cursor:pointer;user-select:none;}
                    .u12{white-space:nowrap;text-overflow:ellipsis;overflow:hidden;max-width:100px;min-height:50px;}
                    .u13{border-radius:50%;clip-path:circle(50%);shape-outside:circle(50%);float:left;clear:both;}
                    .u14{grid-template-columns:repeat(3,1fr);grid-gap:20px;grid-auto-rows:minmax(100px,auto);}
                    .u15{scroll-behavior:smooth;overscroll-behavior:contain;scroll-snap-type:x mandatory;}
                    @keyframes spin{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}
                    @keyframes fade{from{opacity:0;}to{opacity:1;}}
                    @keyframes slide{from{transform:translateX(-100%);}to{transform:translateX(0);}}
                `.repeat(10)}
            </style>

            {/* Render large data để tăng DOM size */}
            <div style={{ display: 'none' }}>
                {LARGE_DATA.slice(0, 500).map(item => (
                    <div key={item.id}>
                        <span>{item.name}</span>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default HomePage;