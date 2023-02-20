import Head from 'next/head'
import css from './index.module.scss'
import { c } from '@/content/main'
import { withLayouts } from '@/utils/withLayouts'

const HomePage = () => {
  return (
    <>
      <Head>
        <title>{c.main.promo.title}</title>
      </Head>
      <div className={css.main}>
        <h1>{c.main.promo.title}</h1>
        <p>{c.main.promo.desc}</p>
      </div>
    </>
  )
}

export default withLayouts(HomePage)
