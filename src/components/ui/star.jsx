import { Star as LucideStar } from "lucide-react";

export default function Star({ value = 0 }) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        const diff = value - (i - 1);
        if (diff >= 1) {
            // Full star
            stars.push(<LucideStar key={i} size={18} fill="#facc15" color="#facc15" strokeWidth={0} />);
        } else if (diff >= 0.5) {
            // Half star
            stars.push(
                <span key={i} className="relative inline-block w-[18px] h-[18px]">
                    <LucideStar size={18} fill="#facc15" color="#facc15" strokeWidth={0} style={{ clipPath: 'inset(0 50% 0 0)' }} />
                    <LucideStar size={18} color="#e5e7eb" strokeWidth={1.5} className="absolute left-0 top-0" />
                </span>
            );
        } else {
            // Empty star
            stars.push(<LucideStar key={i} size={18} color="#e5e7eb" strokeWidth={1.5} />);
        }
    }
    return <>{stars}</>;
}