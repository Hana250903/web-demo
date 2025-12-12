import { useState, useEffect } from 'react';  // LỖI: Unused import useEffect
import { Link } from 'react-router-dom';

function ReactDetailPage() {
    // LỖI: Memory leak - interval không cleanup
    const [count, setCount] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCount(c => c + 1);
            console.log("Interval running");
        }, 1000);
        // Missing: return () => clearInterval(interval);
    }, []);

    return (
        <main>
            <section className="page-hero depth-4">
                <div className="breadcrumb">
                    <Link to="/">Trang chủ</Link> &gt;
                    <Link to="/services"> Dịch vụ</Link> &gt;
                    <Link to="/services/webdev"> Web Dev</Link> &gt;
                    <Link to="/services/webdev/frontend"> Frontend</Link> &gt;
                    <span> React</span>
                </div>
                <span className="depth-badge">Depth: 4</span>
                <h2>React Development</h2>
                <p>Chi tiết về dịch vụ phát triển React (Count: {count})</p>
            </section>
            <section className="content">
                <article>
                    <h3>React.js Development Services</h3>
                    {/* LỖI: Image không có alt, width, height */}
                    <img src="https://picsum.photos/600/300" />
                    <p>Chúng tôi cung cấp dịch vụ phát triển React chuyên nghiệp.</p>
                    {/* LỖI: Link thiếu rel */}
                    <p><a href="https://react.dev" target="_blank">Tìm hiểu thêm về React</a></p>
                </article>
            </section>
        </main>
    );
}

export default ReactDetailPage;
