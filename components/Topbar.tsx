import Link from 'next/link'

const Topbar = () => (
  <nav className="h-16 py-10 text-center font-sans text-5xl font-bold">
    <Link
      className="primary-text-color hover:secondary-text-color transition-colors duration-300 ease-in-out"
      href="/"
    >
      Kartly
    </Link>
  </nav>
)

export default Topbar
