import Link from 'next/link'
import GithubIcon from './Icons/GithubIcon'

const Footer = () => (
  <div className="flex flex-col items-center justify-center gap-3 py-20">
    <h6 className="primary-text-color font-sans text-lg font-bold">Kartly</h6>
    <small>Online shopping center</small>
    <Link
      className="flex w-fit cursor-pointer gap-3 rounded-md border border-black bg-black fill-white p-2 text-white transition-all duration-300 hover:bg-white hover:fill-black hover:text-black"
      href="https://github.com/herol3oy/kartly"
      target="_blank"
    >
      <GithubIcon />
      <h6>Github</h6>
    </Link>
  </div>
)

export default Footer
