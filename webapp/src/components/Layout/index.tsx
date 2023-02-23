import cn from 'classnames'
// import Link from 'next/link'
import Link from 'next/link'
import css from './index.module.scss'
import TG from '@/assets/images/contacts/t.svg'
import VK from '@/assets/images/contacts/v.svg'
import Mail from '@/assets/images/contacts/m.svg'
import Phone from '@/assets/images/contacts/p.svg'
import Whatsapp from '@/assets/images/contacts/w.svg'
import Leaf from '@/assets/images/leaf.svg'
import Logo from '@/assets/images/logo.svg'
import { type DefaultStaticPropsType } from '@/utils/defaultGetStaticProps'
import { getHomeRoute } from '@/utils/routes'
// import { c } from '@/content/main'
// import { getHomeRoute, getStepsRoute, getWorkRoute } from '@/utils/routes'

// TODO: default static props

export const Layout = ({
  children,
  className,
  cGeneral,
}: {
  children: React.ReactNode
  className?: string
  cGeneral: DefaultStaticPropsType['cGeneral']
}) => {
  return (
    <div className={cn(css.layout, className)}>
      <div className={css.header}>
        <div className={css.logoPlace}>
          <Logo className={css.logo} />
        </div>
        <ul className={css.menu}>
          <li className={css.menuItem}>
            <Link className={css.menuLink} href={getHomeRoute('#services')}>
              Услуги
            </Link>
          </li>
          <li className={css.menuItem}>
            <Link className={css.menuLink} href={getHomeRoute('#works')}>
              Портфолио
            </Link>
          </li>
          <li className={css.menuItem}>
            <Link className={css.menuLink} href={getHomeRoute('#faq')}>
              Частые вопросы
            </Link>
          </li>
          <li className={css.menuItem}>
            <Link className={css.menuLink} href="#contacts">
              Контакты
            </Link>
          </li>
          <li className={css.menuItem}>
            <Link className={css.menuLink} href={cGeneral.contacts?.vk || '#'} target="_blank">
              <VK />
            </Link>
          </li>
          <li className={css.menuItem}>
            <Link className={css.menuLink} href={cGeneral.contacts?.telegram || '#'} target="_blank">
              <TG />
            </Link>
          </li>
        </ul>
      </div>
      <div className={css.content}>{children}</div>
      <div className={css.contacts}>
        <h2 className={css.title}>{cGeneral.contacts?.title}</h2>
        <p className={css.desc}>{cGeneral.contacts?.desc}</p>
        <div className={css.panel}>
          <ul className={css.menu}>
            <li className={css.menuItem}>
              <Link className={css.menuLink} href={`tel:${cGeneral.contacts?.phone}`}>
                <Phone className={css.icon} />
                {cGeneral.contacts?.phone}
              </Link>
            </li>
            <li className={css.menuItem}>
              <Link className={css.menuLink} href={`mailto:${cGeneral.contacts?.email}`}>
                <Mail className={css.icon} />
                {cGeneral.contacts?.email}
              </Link>
            </li>
            <li className={css.menuItem}>
              <Link className={css.menuLink} href={`${cGeneral.contacts?.whatsapp}`}>
                <Whatsapp className={css.icon} />
                Whatsapp
              </Link>
            </li>
            <li className={css.menuItem}>
              <Link className={css.menuLink} href={`${cGeneral.contacts?.vk}`}>
                <VK className={css.icon} />
                Группа ВК
              </Link>
            </li>
            <li className={css.menuItem}>
              <Link className={css.menuLink} href={`${cGeneral.contacts?.telegram}`}>
                <VK className={css.icon} />
                Телеграм-канал
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={css.footer}>
        <ul className={css.menu}>
          <li className={css.menuItem}>
            <Link className={css.menuLink} href={getHomeRoute('#services')}>
              Услуги
            </Link>
          </li>
          <li className={css.menuItem}>
            <Link className={css.menuLink} href={getHomeRoute('#works')}>
              Портфолио
            </Link>
          </li>
          <li className={css.menuItem}>
            <Link className={css.menuLink} href={getHomeRoute('#faq')}>
              Частые вопросы
            </Link>
          </li>
          <li className={css.menuItem}>
            <Link className={css.menuLink} href="#contacts">
              Контакты
            </Link>
          </li>
        </ul>
        <p className={css.copyright}>{cGeneral.footer?.copyright}</p>
        <Leaf className={css.leaf} />
      </div>
    </div>
  )
}
