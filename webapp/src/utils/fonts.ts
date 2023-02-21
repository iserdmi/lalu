import { Jost } from '@next/font/google'
import cn from 'classnames'
import { useEffect } from 'react'

export const jost = Jost({ subsets: ['latin', 'cyrillic'], weight: ['400', '500', '600', '700'], variable: '--jost' })

export const fontsClassNames = cn(jost.variable, 'font-sans', jost.className)

export const useFonts = () => {
  useEffect(() => {
    document.querySelector('body')?.classList.add(...fontsClassNames.split(' '))
  }, [])
}
