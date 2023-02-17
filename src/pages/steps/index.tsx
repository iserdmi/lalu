import Head from 'next/head'
import css from './index.module.scss'
import { c } from '@/content'
import { withLayouts } from '@/utils/withLayouts'

const StepsPage = () => {
  return (
    <>
      <Head>
        <title>{c.steps.title}</title>
      </Head>
      <div className={css.main}>
        <h1>{c.steps.title}</h1>
      </div>
    </>
  )
}

export default withLayouts(StepsPage)
