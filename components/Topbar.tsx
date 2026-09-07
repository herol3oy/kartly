import Link from 'next/link'
import GithubIcon from './Icons/GithubIcon'

const Topbar = () => (
  <header className="mb-10 border-b border-slate-200 py-5">
    <nav className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
      <Link className="group flex items-baseline gap-3" href="/">
        <span className="primary-text-color text-3xl font-black tracking-tight transition-colors group-hover:text-blue-600">
          Kartly
        </span>
        <span className="hidden text-sm text-slate-500 sm:inline">
          Online shopping center
        </span>
      </Link>
      <Link
        className="flex w-fit items-center gap-2 rounded-full border border-black bg-black px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-white hover:text-black"
        href="https://github.com/herol3oy/kartly"
        target="_blank"
        rel="noreferrer"
      >
        <GithubIcon />
        <span>View on GitHub</span>
      </Link>
    </nav>
  </header>
)

export default Topbar
