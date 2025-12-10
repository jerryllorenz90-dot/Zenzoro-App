import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-4 px-6 bg-zendark border-b border-neon/30">
      <Link href="/" className="text-neon text-3xl font-bold">
        Zenzoro
      </Link>
      <div className="flex gap-6 text-gray-300">
        <Link href="/market">Market</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/buy">Buy</Link>
        <Link href="/sell">Sell</Link>
      </div>
    </nav>
  );
}