import cn from 'classnames'
import Link from 'next/link'
import { useState } from 'react'
import css from './index.module.scss'
import Mail from '@/assets/images/contacts/m.svg'
import Phone from '@/assets/images/contacts/p.svg'
import TG from '@/assets/images/contacts/t.svg'
import VK from '@/assets/images/contacts/v.svg'
import Whatsapp from '@/assets/images/contacts/w.svg'
import Cross from '@/assets/images/cross.svg'
import Leaf from '@/assets/images/leaf.svg'
import LogoMobile from '@/assets/images/logo-mobile.svg'
import LogoWhite from '@/assets/images/logo-white.svg'
import Logo from '@/assets/images/logo.svg'
import Menu from '@/assets/images/menu.svg'
import { type DefaultStaticPropsType } from '@/utils/defaultGetStaticProps'
import { getHomeRoute } from '@/utils/routes'

export const Layout = ({
  children,
  className,
  cGeneral,
}: {
  children: React.ReactNode
  className?: string
  cGeneral: DefaultStaticPropsType['cGeneral']
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div className={cn(css.layout, className)}>
      <div className={cn({ [css.mobileMenu]: true, [css.isOpen]: isMenuOpen })}>
        <div className={css.mobileMenuHeader}>
          <div className={css.logoPlace}>
            <Link
              className={css.logoLink}
              href={getHomeRoute('#header')}
              onClick={() => {
                setIsMenuOpen(false)
              }}
            >
              <LogoWhite className={css.logo} />
            </Link>
          </div>
          <button
            className={css.mobileMenuButton}
            onClick={() => {
              setIsMenuOpen(false)
            }}
          >
            <Cross className={css.menuButtonIcon} />
            Меню
          </button>
        </div>
        <div className={css.mobileMenuContent}>
          <ul className={css.menu}>
            <li className={css.menuItem}>
              <Link
                className={css.menuLink}
                href={getHomeRoute('#services')}
                onClick={() => {
                  setIsMenuOpen(false)
                }}
              >
                Услуги
              </Link>
            </li>
            <li className={css.menuItem}>
              <Link
                className={css.menuLink}
                href={getHomeRoute('#works')}
                onClick={() => {
                  setIsMenuOpen(false)
                }}
              >
                Портфолио
              </Link>
            </li>
            <li className={css.menuItem}>
              <Link
                className={css.menuLink}
                href={getHomeRoute('#faq')}
                onClick={() => {
                  setIsMenuOpen(false)
                }}
              >
                Частые вопросы
              </Link>
            </li>
            <li className={css.menuItem}>
              <Link
                className={css.menuLink}
                href="#contacts"
                onClick={() => {
                  setIsMenuOpen(false)
                }}
              >
                Контакты
              </Link>
            </li>
            <li className={css.menuItem}>
              <ul className={css.socialMenu}>
                <li className={css.socialMenuItem}>
                  <Link className={css.socialMenuLink} href={cGeneral.contacts?.vk || '#'} target="_blank">
                    <VK />
                  </Link>
                </li>
                <li className={css.socialMenuItem}>
                  <Link className={css.socialMenuLink} href={cGeneral.contacts?.telegram || '#'} target="_blank">
                    <TG />
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className={cn({ [css.header]: true, [css.isMobileMenuOpen]: isMenuOpen })} id="header">
        <div className={css.headerFloating}>
          <div className={css.logoPlace}>
            <Link className={css.logoLink} href={getHomeRoute('#header')}>
              <Logo className={css.logo} />
              <LogoMobile className={css.logoMobile} />
            </Link>
          </div>
          <button
            className={css.menuButton}
            onClick={() => {
              setIsMenuOpen(true)
            }}
          >
            <Menu className={css.menuButtonIcon} />
            Меню
          </button>
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
      </div>
      <div className={css.content}>{children}</div>
      <div className={css.contacts} id="contacts">
        <h2 className={css.title}>{cGeneral.contacts?.title}</h2>
        <p className={css.desc}>{cGeneral.contacts?.desc}</p>
        <div className={css.panel}>
          <ul className={css.menu}>
            <li className={css.menuItem}>
              <Link className={css.menuLink} href={`tel:${cGeneral.contacts?.phone}`}>
                <span className={css.iconPlace}>
                  <Phone className={css.icon} />
                </span>
                {cGeneral.contacts?.phone}
              </Link>
            </li>
            <li className={css.menuItem}>
              <Link className={css.menuLink} href={`mailto:${cGeneral.contacts?.email}`}>
                <span className={css.iconPlace}>
                  <Mail className={css.icon} />
                </span>
                {cGeneral.contacts?.email}
              </Link>
            </li>
            <li className={css.menuItem}>
              <Link className={css.menuLink} href={`${cGeneral.contacts?.whatsapp}`}>
                <span className={css.iconPlace}>
                  <Whatsapp className={css.icon} />
                </span>
                Whatsapp
              </Link>
            </li>
            <li className={css.menuItem}>
              <Link className={css.menuLink} href={`${cGeneral.contacts?.vk}`}>
                <span className={css.iconPlace}>
                  <VK className={css.icon} />
                </span>
                Группа ВК
              </Link>
            </li>
            <li className={css.menuItem}>
              <Link className={css.menuLink} href={`${cGeneral.contacts?.telegram}`}>
                <span className={css.iconPlace}>
                  <TG className={css.icon} />
                </span>
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
