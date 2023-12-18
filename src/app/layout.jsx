import { Inter, Cinzel } from 'next/font/google'
import './globals.css'
import SiteNavbar from '@/Components/SiteNavbar'
import SiteFooter from '@/Components/SiteFooter'

const inter = Inter({
  subsets: ['latin'],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter"
})
const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-cinzel"
})



export const metadata = {
  title: 'Honey & Salt',
  description: 'Honey & Salt',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cinzel.variable}`}>
        <main>
          <SiteNavbar />
          {children}
          <SiteFooter />
        </main>
      </body>
    </html>
  )
}
