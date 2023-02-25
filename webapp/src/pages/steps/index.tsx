import Head from 'next/head'
import css from './index.module.scss'
import { RichText } from '@/components/RichText'
import { type GetStaticPropsType } from '@/utils/GetStaticPropsType'
import { withDefaultStaticProps } from '@/utils/defaultGetStaticProps'
import { getImageUrl } from '@/utils/image'
import { mdToHtml } from '@/utils/mdToHtml'
import { sanityClient } from '@/utils/sanityClient'
import { withLayouts } from '@/utils/withLayouts'

export const getStaticProps = withDefaultStaticProps(async (context) => {
  const [steps] = await sanityClient.getAll('steps')

  return {
    props: {
      cSteps: steps,
      contentHtml: mdToHtml(steps.text),
    },
  }
})

const StepsPage = ({ cSteps, contentHtml }: GetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>{cSteps.title}</title>
      </Head>

      <div className={css.header}>
        <div className={css.headerInner}>
          <h1 className={css.title}>{cSteps.title}</h1>
          <p className={css.desc}>{cSteps.desc}</p>
        </div>
      </div>
      <div className={css.previewWrapper}>
        <img className={css.preview} alt="" src={getImageUrl(cSteps.gallery?.[0])} />
      </div>
      <div className={css.contentWrapper}>
        <div className={css.contentPanel}>
          <RichText className={css.content} html={contentHtml} />
        </div>
      </div>
    </>
  )
}

export default withLayouts(StepsPage)
