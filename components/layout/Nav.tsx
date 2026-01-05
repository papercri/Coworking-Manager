import Link from 'next/link'

function Nav() {
  return (
    <nav>
        <ul className="flex items-center gap-6">
        <li>
            <Link 
            href="/" 
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
            Home
            </Link>
        </li>
        <li>
            <Link 
            href="/reservations" 
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
            Reservations
            </Link>
        </li>
        <li>
            <Link 
            href="/book" 
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
            Book your space
            </Link>
        </li>
        
        </ul>
    </nav>
  )
}

export default Nav