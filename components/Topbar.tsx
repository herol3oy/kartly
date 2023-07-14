import Link from 'next/link'

const Topbar = () => (
  <nav className="h-16 py-10 text-center font-sans text-5xl font-bold">
    <Link className="primary-text-color" href="/">
      Kartly
    </Link>
  </nav>
)

export default Topbar
