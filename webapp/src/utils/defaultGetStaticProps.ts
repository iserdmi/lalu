import merge from 'lodash/merge'
import { type GetStaticPropsContext } from 'next'
import { type GetStaticPropsType } from './GetStaticPropsType'
import { sanityClient } from './sanityClient'

export const getDefaultStaticProps = async (ctx: GetStaticPropsContext) => {
  const [general] = await sanityClient.getAll('general')
  return {
    props: {
      cGeneral: general,
    },
  }
}

export type DefaultStaticPropsType = GetStaticPropsType<typeof getDefaultStaticProps>

export const withDefaultStaticProps = <T>(
  initialGetStaticProps: (
    ctx: GetStaticPropsContext<any>,
    defaultStaticProps: Awaited<ReturnType<typeof getDefaultStaticProps>>
  ) => Promise<T>
) => {
  const wrappedGetStaticProps = async (ctx: GetStaticPropsContext) => {
    const defaultStaticProps = await getDefaultStaticProps(ctx)
    const initialStaticProps = await initialGetStaticProps(ctx, defaultStaticProps)
    return merge({}, defaultStaticProps, initialStaticProps)
  }
  return wrappedGetStaticProps
}
