import Link from "next/link";
import Nav from "@/components/layout/Nav";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo / Título */}
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <h1 className="text-xl font-bold tracking-tight">
            Coworking Manager
          </h1>
        </Link>

        <Nav />
      </div>
    </header>
  );
}