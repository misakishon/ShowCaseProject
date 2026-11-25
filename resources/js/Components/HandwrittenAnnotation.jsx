const ARROW_PATHS = {
    projects: {
        shaft: 'M 3 7 C 24 7, 32 24, 18 38',
        head: 'M 20 30.5 L 18 38 L 25.5 36.5',
    },
    showcase: {
        shaft: 'M 3 7 C 20 7, 26 21, 12.5 32',
        head: 'M 14.5 24.5 L 12.5 32 L 20 30.5',
    },
    default: {
        shaft: 'M 3 7 C 21 8, 24 25, 6 37',
        head: 'M 8.5 29.5 L 6 37 L 14 35.5',
    },
};

export default function HandwrittenAnnotation({ label, target = 'projects', className = '' }) {
    const { shaft, head } = ARROW_PATHS[target] || ARROW_PATHS.default;

    return (
        <div className={`handwritten-annotation ${className}`.trim()} aria-hidden="true">
            <span className="handwritten-annotation__label">{label}</span>
            <svg
                className="handwritten-annotation__arrow"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d={shaft}
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    className="handwritten-arrow-shaft"
                />
                <path
                    d={head}
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="handwritten-arrow-head"
                />
            </svg>
        </div>
    );
}
