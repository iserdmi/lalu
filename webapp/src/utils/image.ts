export const getImageUrl = (
  source: any,
  props: {
    h?: number
    w?: number
    fit?: 'clip' | 'crop' | 'fill' | 'fillmax' | 'max' | 'scale' | 'min'
  } = {}
) => {
  const ref = source.asset._ref
  const parts = ref.split('-')
  const id = parts[1]
  const size = parts[2]
  const ext = parts[3]
  const url = `https://cdn.sanity.io/images/zwzyw7mo/production/${id}-${size}.${ext}`
  // const query = Object.entries(props)
  //   .map(([key, value]) => `${key}=${value}`)
  //   .join('&')
  // return `${url}?${query}`
  return `${url}`
}
