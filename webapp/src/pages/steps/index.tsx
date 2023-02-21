import { type GetStaticPropsContext } from 'next'
import Head from 'next/head'
import css from './index.module.scss'
import { type GetStaticPropsType } from '@/utils/GetStaticPropsType'
import { sanityClient } from '@/utils/sanityClient'
import { withLayouts } from '@/utils/withLayouts'

export const getStaticProps = async (context: GetStaticPropsContext<{ workAlias: string }>) => {
  const [steps] = await sanityClient.getAll('steps')

  return {
    props: {
      steps,
    },
  }
}

const StepsPage = ({ steps }: GetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>{steps.title}</title>
      </Head>
      <div className={css.main}>
        <h1>{steps.title}</h1>
      </div>
    </>
  )
}

export default withLayouts(StepsPage)
