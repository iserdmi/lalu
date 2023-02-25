import { type Main } from '@lalu/sanity/types'
import cn from 'classnames'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import css from './index.module.scss'
import ArrowDownUp from '@/assets/images/arrow-down-up.svg'
import Branch from '@/assets/images/branch.svg'
import Service1 from '@/assets/images/services/1.svg'
import Service2 from '@/assets/images/services/2.svg'
import Service3 from '@/assets/images/services/3.svg'
import Service4 from '@/assets/images/services/4.svg'
import { type GetStaticPropsType } from '@/utils/GetStaticPropsType'
import { withDefaultStaticProps } from '@/utils/defaultGetStaticProps'
import { getImageUrl } from '@/utils/image'
import { getWorkRoute } from '@/utils/routes'
import { sanityClient } from '@/utils/sanityClient'
import { withLayouts } from '@/utils/withLayouts'

export const getStaticProps = withDefaultStaticProps(async (ctx) => {
  const [main] = await sanityClient.getAll('main')
  const works = await sanityClient.getAll('work')
  const fullMain = {
    ...main,
    works: {
      ...main?.works,
      items: main?.works?.items?.map((work) => works.find((w) => w._id === work._ref)),
    },
  }

  return {
    props: {
      cMain: fullMain,
    },
  }
})

const HomePage = ({ cMain }: GetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>{cMain.promo?.title}</title>
      </Head>

      <div className={css.gallery}>
        {cMain.gallery?.map((item) => (
          <img key={item._key} alt="" src={getImageUrl(item)} />
        ))}
      </div>

      <div className={css.promo}>
        <div className={css.panel}>
          <Branch className={css.branch} />
          <img className={css.avatar} alt="" src={getImageUrl(cMain.promo?.image)} />
          <div className={css.text}>
            <h1 className={css.title}>{cMain.promo?.title}</h1>
            <p className={css.desc}>{cMain.promo?.desc}</p>
          </div>
        </div>
      </div>

      <div className={css.services} id="services">
        <div className={css.wrapper}>
          <h2 className={css.title}>{cMain.services?.title}</h2>
          <p className={css.desc} dangerouslySetInnerHTML={{ __html: cMain.services?.desc || '' }} />
          <div className={cn(css.items, css.collapasableItems)}>
            {cMain.services?.items?.map((item, i) => (
              <ServiceItem item={item} i={i} key={item._key} />
            ))}
          </div>
        </div>
      </div>

      <div className={css.works} id="works">
        <h2 className={css.title}>{cMain.works?.title}</h2>
        <p className={css.desc}>{cMain.works?.desc}</p>
        <div className={css.items}>
          {cMain.works?.items?.map((item) => (
            <div className={css.item} key={item?._id}>
              <Link href={getWorkRoute(item?.alias?.current)} className={css.itemInner}>
                <img className={css.image} alt="" src={getImageUrl(item?.gallery?.[0])} />
                <div className={css.content}>
                  <h3 className={css.itemTitle}>{item?.title}</h3>
                  <p className={css.subtitle}>{item?.subtitle}</p>
                  <p className={css.date}>{item?.date}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className={css.faq} id="faq">
        <div className={css.wrapper}>
          <h2 className={css.title}>{cMain.faq?.title}</h2>
          <p className={css.desc}>{cMain.faq?.desc}</p>
          <div className={cn(css.items, css.collapasableItems)}>
            {cMain.faq?.items?.map((item, i) => (
              <FaqItem item={item} key={i} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

const ServiceItem = ({ item, i }: { item: NonNullable<NonNullable<Main['services']>['items']>[0]; i: number }) => {
  const Icon = {
    0: Service1,
    1: Service2,
    2: Service3,
    3: Service4,
  }[i]
  const [opened, setOpened] = useState(false)
  return (
    <div
      className={cn({ [css.item]: true, [css.opened]: opened })}
      onClick={() => {
        setOpened(!opened)
      }}
    >
      <div className={css.itemHeader}>
        <Icon className={css.itemIcon} />
        <div className={css.itemText}>
          <h3 className={css.itemTitle}>
            {item.title}
            <ArrowDownUp className={css.itemArrow} />
          </h3>
          <p className={css.itemDesc}>{item.desc}</p>
        </div>
      </div>
      <div className={cn(css.itemContent, css.padded)}>
        <p>{item.text}</p>
      </div>
    </div>
  )
}

const FaqItem = ({ item }: { item: NonNullable<NonNullable<Main['faq']>['items']>[0] }) => {
  const [opened, setOpened] = useState(false)
  return (
    <div
      className={cn({ [css.item]: true, [css.opened]: opened })}
      onClick={() => {
        setOpened(!opened)
      }}
    >
      <div className={css.itemHeader}>
        <div className={css.itemText}>
          <h3 className={css.itemTitle}>
            {item.title}
            <ArrowDownUp className={css.itemArrow} />
          </h3>
        </div>
      </div>
      <div className={css.itemContent}>
        <p>{item.text}</p>
      </div>
    </div>
  )
}

export default withLayouts(HomePage)
