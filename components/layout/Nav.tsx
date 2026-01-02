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
            Inicio
            </Link>
        </li>
        <li>
            <Link 
            href="/reservations" 
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
            Reservas
            </Link>
        </li>
        
        </ul>
    </nav>
  )
}

export default Nav