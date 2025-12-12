import { useState, useEffect, useRef, useMemo, useCallback } from 'react';  // LỖI: Unused imports

// LỖI PERFORMANCE: Large inline data
const PRODUCTS_DATA = Array(1000).fill(null).map((_, i) => ({
    id: i,
    name: `Product ${i}`,
    description: `This is a very long product description for product number ${i} that adds unnecessary weight`,
    price: Math.random() * 1000,
    tags: Array(20).fill(`tag-${i}`),
    metadata: {
        created: new Date().toISOString(),
        updated: new Date().toISOString(),
        views: Math.floor(Math.random() * 10000),
        ratings: Array(100).fill(Math.random() * 5)
    }
}));

// LỖI: Heavy synchronous computation
function heavyCalculation() {
    let result = 0;
    for (let i = 0; i < 500000; i++) {
        result += Math.sqrt(i) * Math.sin(i) * Math.cos(i);
    }
    return result;
}
const COMPUTED_VALUE = heavyCalculation();

// LỖI: Unused function
function unusedHelperFunction(data) {
    return data.map(item => ({
        ...item,
        processed: true,
        timestamp: Date.now()
    }));
}

// LỖI: Another unused function
const anotherUnusedFunction = (x, y, z) => {
    console.log("This is never called");
    return x * y * z;
};

// Component với nhiều lỗi
export function BrokenComponent() {
    // LỖI: Unused state
    const [unusedState, setUnusedState] = useState(null);
    const [count, setCount] = useState(0);

    // LỖI: Memory leak - interval không cleanup
    useEffect(() => {
        console.log("BrokenComponent mounted");

        const interval = setInterval(() => {
            console.log("Interval tick - wasting resources");
            setCount(c => c + 1);
        }, 500);

        // LỖI: Thiếu cleanup function
        // return () => clearInterval(interval);
    }, []);

    // LỖI: Fetch không cần thiết và không xử lý error
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => {
                console.log("Fetched data that we don't use:", data.length);
            });

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                console.log("Another unused fetch:", data.length);
            });
    }, []);

    // LỖI: Expensive computation trong render
    let expensiveResult = 0;
    for (let i = 0; i < 10000; i++) {
        expensiveResult += Math.random();
    }

    return (
        <div className="broken-component">
            {/* LỖI SEO: Thiếu semantic HTML */}
            <div className="header">
                <div className="title">Broken Component</div>
            </div>

            {/* LỖI: Images không có alt, width, height */}
            <img src="https://picsum.photos/400/200" />
            <img src="https://picsum.photos/400/201" />
            <img src="https://picsum.photos/400/202" />

            {/* LỖI SEO: Links không có rel */}
            <a href="https://google.com" target="_blank">Google</a>
            <a href="https://facebook.com" target="_blank">Facebook</a>
            <a href="https://twitter.com" target="_blank">Twitter</a>

            {/* LỖI: Inline styles - khó maintain */}
            <div style={{
                backgroundColor: 'red',
                padding: '20px',
                margin: '10px',
                border: '1px solid black',
                borderRadius: '5px',
                boxShadow: '0 0 10px rgba(0,0,0,0.5)'
            }}>
                Inline styled div
            </div>

            {/* LỖI: Console log trong JSX */}
            {console.log("Rendering broken component, count:", count)}

            <p>Count: {count}</p>
            <p>Expensive result: {expensiveResult}</p>
            <p>Computed value: {COMPUTED_VALUE}</p>
        </div>
    );
}

// Component với lỗi accessibility
export function AccessibilityBrokenComponent() {
    return (
        <div>
            {/* LỖI A11Y: Thiếu alt text */}
            <img src="https://picsum.photos/300/150" />

            {/* LỖI A11Y: Button không có accessible name */}
            <button onClick={() => console.log("clicked")}></button>

            {/* LỖI A11Y: Link không có text */}
            <a href="/somewhere"></a>

            {/* LỖI A11Y: Form input không có label */}
            <input type="text" placeholder="Enter name" />
            <input type="email" placeholder="Enter email" />
            <input type="password" placeholder="Enter password" />

            {/* LỖI A11Y: Contrast thấp */}
            <p style={{ color: '#999', backgroundColor: '#aaa' }}>
                Low contrast text
            </p>

            {/* LỖI A11Y: Click handler trên non-interactive element */}
            <div onClick={() => console.log("div clicked")}>
                Clickable div without role
            </div>

            {/* LỖI A11Y: Thiếu heading structure */}
            <h4>Heading 4 without h1, h2, h3</h4>
        </div>
    );
}

// Component với lỗi SEO
export function SEOBrokenComponent() {
    return (
        <main>
            {/* LỖI SEO: Multiple H1 */}
            <h1>First H1</h1>
            <h1>Second H1</h1>
            <h1>Third H1</h1>

            {/* LỖI SEO: Skipped heading levels */}
            <h1>Main Title</h1>
            <h4>Should be H2</h4>
            <h6>Should be H3</h6>

            {/* LỖI SEO: Links với generic text */}
            <a href="/page1">Click here</a>
            <a href="/page2">Read more</a>
            <a href="/page3">Learn more</a>

            {/* LỖI SEO: Empty links */}
            <a href="/somewhere"></a>

            {/* LỖI SEO: Images không có alt */}
            <img src="https://picsum.photos/500/250" />
            <img src="https://picsum.photos/500/251" />

            {/* LỖI SEO: No meta content (thường ở head) */}
            {/* Thiếu: title, description, canonical, og tags */}
        </main>
    );
}

// Export default với unused code
export default function BrokenPage() {
    // LỖI: Unused variables
    const unusedVar1 = "Hello";
    const unusedVar2 = { foo: "bar" };
    const unusedVar3 = [1, 2, 3, 4, 5];

    return (
        <div>
            <BrokenComponent />
            <AccessibilityBrokenComponent />
            <SEOBrokenComponent />
        </div>
    );
}
