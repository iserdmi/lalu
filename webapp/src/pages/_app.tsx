import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  useEffect(() => {
    const listener = (e: Event) => {
      const target = e.target as HTMLElement | undefined

      if (!target) {
        return
      }
      const anchor = target.closest('a')

      if (!anchor) {
        return
      }
      const href = anchor.getAttribute('href')

      const id = href?.includes('#') ? href?.split('#').reverse()[0] : null

      if (!id) {
        return
      }
      const linkTarget = document.querySelector(`#${id}`)

      if (!linkTarget) {
        return
      }
      e.preventDefault()
      linkTarget.scrollIntoView({
        behavior: 'smooth',
      })
    }
    const anchors = document.querySelectorAll('a')
    anchors.forEach((anchor) => {
      anchor.addEventListener('click', listener)
    })
    return () => {
      anchors.forEach((anchor) => {
        anchor.removeEventListener('click', listener)
      })
    }
  }, [router.pathname])

  return <Component {...pageProps} />
}
