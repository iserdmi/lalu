import cn from 'classnames'
import React from 'react'
import css from './styles.module.scss'

export const RichText: React.FC<{
  children?: React.ReactNode
  html?: string | null
  className?: string
}> = ({ children, html, className, ...restProps }) => {
  const classNameHere = cn({
    [css.richText]: true,
    [className || '']: className,
  })
  if (html) {
    return <div className={classNameHere} dangerouslySetInnerHTML={{ __html: html }} {...restProps} />
  }
  return (
    <div className={classNameHere} {...restProps}>
      {children}
    </div>
  )
}
