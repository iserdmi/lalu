export type GetStaticPropsType<T extends (...args: any) => Promise<{ props: any }>> = Awaited<ReturnType<T>>['props']
