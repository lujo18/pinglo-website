import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import { MDXOptions } from 'contentlayer/core'

export const BlogPost = defineDocumentType(() => ({
  name: 'BlogPost',
  filePathPattern: 'blog/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'string', required: true },
    slug: { type: 'string', required: true },
    excerpt: { type: 'string', required: true },
    author: { type: 'string', default: 'Pinglo Team' },
    tags: { type: 'list', of: { type: 'string' }, default: [] },
    readingTime: { type: 'number', default: 5 },
    image: { type: 'string' },
  },
}))

const mdxOptions: MDXOptions = {
  remarkPlugins: [],
  rehypePlugins: [],
}

export default makeSource({
  contentDirPath: 'src/content',
  documentTypes: [BlogPost],
  mdx: mdxOptions,
})
