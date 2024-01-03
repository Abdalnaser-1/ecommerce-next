import { Inter } from 'next/font/google'
// import bootstrap from ''
import 'bootstrap/dist/css/bootstrap.css'
import  './globals.css'
// import 'bootstrap/dist/css/bootstrap.css'
import Navbar from '../components/Navbar'
import Footer from '@/components/footer/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>
        Ecommerce frist Next
        </title>
      </head>
      <body className={inter.className}>
      <Navbar/>
        <div className='container'>
       
        {children}
       
        <Footer/>
        </div>
      
        </body>
    </html>
  )
}
