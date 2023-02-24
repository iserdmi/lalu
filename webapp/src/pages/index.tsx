import Head from 'next/head'
import Image from 'next/image'
import css from './index.module.scss'
import { type GetStaticPropsType } from '@/utils/GetStaticPropsType'
import { withDefaultStaticProps } from '@/utils/defaultGetStaticProps'
import { getImageUrl } from '@/utils/image'
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
          <img key={item._key} alt="" src={getImageUrl(item, { w: 1680, h: 611, fit: 'min' })} />
        ))}
      </div>
      <div className={css.main}>
        <h1>{cMain.promo?.title}</h1>
        <p>{cMain.promo?.desc}</p>
      </div>
    </>
  )
}

export default withLayouts(HomePage)
