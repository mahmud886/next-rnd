import Link from "next/link";

export default function Header() {
    return (
        <nav className="flex gap-4 mb-8">
            <Link prefetch={false} className="m-0" href="/rendering/static">
                Static
            </Link>
            <Link prefetch={false} className="m-0" href="/rendering/dynamic">
                Dynamic
            </Link>
            <Link prefetch={false} className="m-0" href="/rendering/hybrid">
                Hybrid
            </Link>
            <Link prefetch={false} className="m-0" href="/rendering/isr/posts">
                ISR
            </Link>
            <Link prefetch={false} className="m-0" href="/rendering/rsc">
                RSC
            </Link>
        </nav>
    );
}
