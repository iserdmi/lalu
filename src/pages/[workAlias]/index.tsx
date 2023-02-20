import { type GetStaticProps } from 'next'
import Head from 'next/head'
import css from './index.module.scss'
import { c } from '@/content/main'
import { withLayouts } from '@/utils/withLayouts'

type PageParams = { workAlias: string }
type PageProps = { work: (typeof c.works)[0] }

export async function getStaticPaths() {
  return {
    paths: c.works.map((work) => ({ params: { workAlias: work.alias } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<PageProps> = (context) => {
  const { workAlias } = context.params as PageParams
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  const props = { work: c.works.find((work) => work.alias === workAlias) } as PageProps
  return {
    props,
  }
}

const WorkPage = ({ work }: PageProps) => {
  return (
    <>
      <Head>
        <title>{work.title}</title>
      </Head>
      <div className={css.main}>
        <h1>{work.title}</h1>
        <p>{work.address}</p>
      </div>
    </>
  )
}

export default withLayouts(WorkPage)
