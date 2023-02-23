export type GetStaticPropsType<T extends (...args: any) => any> = Awaited<ReturnType<T>>['props']
