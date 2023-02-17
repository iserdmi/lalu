import cn from 'classnames'
import Link from 'next/link'
import css from './index.module.scss'
import { c } from '@/content'
import { getHomeRoute, getStepsRoute, getWorkRoute } from '@/utils/routes'

export const Layout = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={cn(css.layout, className)}>
      <div className={css.header}>
        <ul>
          <li>
            <Link href={getHomeRoute()}>Домой</Link>
            <Link href={getStepsRoute()}>Этапы работы</Link>
            {c.works.map((work) => (
              <Link key={work.alias} href={getWorkRoute(work.alias)}>
                Работа: {work.title}
              </Link>
            ))}
          </li>
        </ul>
      </div>
      <div className={css.content}>{children}</div>
      <div className={css.contacts}>
        <h2>{c.contacts.title}</h2>
        <p>{c.contacts.desc}</p>
      </div>
      <div className={css.footer}>
        <p>{c.footer.copyright}</p>
      </div>
    </div>
  )
}
