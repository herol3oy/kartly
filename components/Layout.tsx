import Footer from '@/components/Footer'
import Topbar from '@/components/Topbar'
import { PropsWithChildren } from 'react'

const Layout = ({ children }: PropsWithChildren) => (
  <div className="container mx-auto px-5">
    <Topbar />
    <main>{children}</main>
    <Footer />
  </div>
)

export default Layout
