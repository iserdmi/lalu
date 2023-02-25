import { type GetStaticPropsContext } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import css from './index.module.scss'
import BackArrow from '@/assets/images/back.svg'
import { type GetStaticPropsType } from '@/utils/GetStaticPropsType'
import { withDefaultStaticProps } from '@/utils/defaultGetStaticProps'
import { getImageUrl } from '@/utils/image'
import { mdToHtml } from '@/utils/mdToHtml'
import { getHomeRoute } from '@/utils/routes'
import { sanityClient } from '@/utils/sanityClient'
import { withLayouts } from '@/utils/withLayouts'
import { RichText } from '@/components/RichText'

export async function getStaticPaths() {
  const works = await sanityClient.getAll('work')

  return {
    paths: works.map((work) => ({ params: { workAlias: work.alias?.current } })),
    fallback: false,
  }
}

export const getStaticProps = withDefaultStaticProps(async (context: GetStaticPropsContext<{ workAlias: string }>) => {
  const [work] = await sanityClient.getAll('work', `alias.current == "${context.params?.workAlias}"`)

  return {
    props: {
      cWork: work,
      contentHtml: mdToHtml(work.text),
    },
  }
})

const WorkPage = ({ cWork, cGeneral, contentHtml }: GetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>{cWork.title}</title>
      </Head>
      <div className={css.header}>
        <div className={css.wrapper}>
          <Link className={css.back} href={getHomeRoute('#works')}>
            <BackArrow className={css.icon} />
            <span>{cGeneral.work?.back}</span>
          </Link>
          <p className={css.sectionTitle}>{cGeneral.work?.title}</p>
          <h1 className={css.title}>{cWork.megatitle}</h1>
          <div className={css.attrs}>
            {cWork.attrs?.map((attr) => (
              <div key={attr._key} className={css.attr}>
                <span className={css.key}>{attr.key}</span>
                <span className={css.value}>{attr.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={css.contentWrapper}>
        <div className={css.contentPanel}>
          <img className={css.preview} alt="" src={getImageUrl(cWork.gallery?.[0])} />
          <p className={css.desc}>{cWork.desc}</p>
          <RichText className={css.content} html={contentHtml} />
        </div>
      </div>
    </>
  )
}

export default withLayouts(WorkPage)
