import { type NextPage } from 'next'
import { fontsClassNames } from './fonts'
import { getDisplayName } from './getDisplayName'
import { Layout } from '@/components/Layout'

export type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode
}

export const withLayouts = <T extends {}>(Page: NextPageWithLayout<T>) => {
  const WrappedPage = (props: T) => {
    const getLayout: NonNullable<NextPageWithLayout<T>['getLayout']> = Page.getLayout ? Page.getLayout : (page) => page
    return <Layout className={fontsClassNames}>{getLayout(<Page {...props} />)}</Layout>
  }
  WrappedPage.displayName = `withLayouts(${getDisplayName(Page)})`
  return WrappedPage
}
