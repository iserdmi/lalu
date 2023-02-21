import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { useFonts } from '@/utils/fonts'

export default function App({ Component, pageProps }: AppProps) {
  useFonts()
  return <Component {...pageProps} />
}
