export default function Footer() {
  return (
    <footer className="bg-white border-t py-4">
      <div className="max-w-6xl mx-auto px-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Coworking Manager - All rights reserved.
      </div>
    </footer>
  );
}