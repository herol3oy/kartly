import Footer from '@/components/Footer'
import Topbar from '@/components/Topbar'
import { PropsWithChildren } from 'react'

const Layout = ({ children }: PropsWithChildren) => (
  <div className="container mx-auto max-w-screen-2xl px-5">
    <Topbar />
    <main className="pb-8">{children}</main>
    <Footer />
  </div>
)

export default Layout
