import MarkdownIt from 'markdown-it'

const markdown: MarkdownIt = MarkdownIt({
  html: true,
})

export const mdToHtml = (md: string) => {
  return markdown.render(md)
}
