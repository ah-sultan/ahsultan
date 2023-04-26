import { Poppins, Noto_Serif } from 'next/font/google'
import '@/styles/globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight : ['300', '400', '500', '600', '700']
})

const notoSerif = Noto_Serif({
  subsets: ['latin'],
  variable: '--font-notoSerif',
  weight : ['400', '700']
})

export default function App({ Component, pageProps }) {
  return (
    <main className={`${poppins.variable} ${notoSerif.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}
