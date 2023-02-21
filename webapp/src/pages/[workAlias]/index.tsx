import { type GetStaticPropsContext } from 'next'
import Head from 'next/head'
import css from './index.module.scss'
import { type GetStaticPropsType } from '@/utils/GetStaticPropsType'
import { sanityClient } from '@/utils/sanityClient'
import { withLayouts } from '@/utils/withLayouts'

export async function getStaticPaths() {
  const works = await sanityClient.getAll('work')

  return {
    paths: works.map((work) => ({ params: { workAlias: work.alias?.current } })),
    fallback: false,
  }
}

export const getStaticProps = async (context: GetStaticPropsContext<{ workAlias: string }>) => {
  const [work] = await sanityClient.getAll('work', `alias.current == "${context.params?.workAlias}"`)

  return {
    props: {
      work,
    },
  }
}

const WorkPage = ({ work }: GetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>{work.title}</title>
      </Head>
      <div className={css.main}>
        <h1>{work.megatitle}</h1>
        <p>{work.desc}</p>
      </div>
    </>
  )
}

export default withLayouts(WorkPage)
