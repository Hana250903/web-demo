import { Link, useLocation } from 'react-router-dom';

function Navigation() {
    const location = useLocation();
    const path = location.pathname;

    const isActive = (check) => {
        if (check === '/') return path === '/';
        return path.startsWith(check);
    };

    return (
        <header>
            <nav>
                <Link to="/">
                    <span>Demo Website</span>
                </Link>
                <ul>
                    <li><Link to="/" className={isActive('/') && path === '/' ? 'active' : ''}>Trang chủ</Link></li>
                    <li><Link to="/services" className={isActive('/services') ? 'active' : ''}>Dịch vụ</Link></li>
                    <li><Link to="/products" className={isActive('/products') ? 'active' : ''}>Sản phẩm</Link></li>
                    <li><Link to="/blog" className={isActive('/blog') ? 'active' : ''}>Blog</Link></li>
                    <li><Link to="/about" className={isActive('/about') ? 'active' : ''}>Giới thiệu</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navigation;