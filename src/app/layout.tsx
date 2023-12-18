import type { Metadata } from 'next'
import './globals.css'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer' 

export const metadata: Metadata = {
  title: 'Goldexcool Portfolio',
  description: 'Portfolio Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
      <body>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
