import { type GetStaticPropsContext } from 'next'
import Head from 'next/head'
import css from './index.module.scss'
import { type GetStaticPropsType } from '@/utils/GetStaticPropsType'
import { sanityClient } from '@/utils/sanityClient'
import { withLayouts } from '@/utils/withLayouts'

export const getStaticProps = async (context: GetStaticPropsContext) => {
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
      main: fullMain,
    },
  }
}

const HomePage = ({ main }: GetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>{main.promo?.title}</title>
      </Head>
      <div className={css.main}>
        <h1>{main.promo?.title}</h1>
        <p>{main.promo?.desc}</p>
      </div>
    </>
  )
}

export default withLayouts(HomePage)
