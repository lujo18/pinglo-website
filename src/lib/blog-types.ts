export interface BlogPostMetadata {
  title: string
  slug: string
  excerpt: string
  author: string
  date: string
  readingTime: number
  tags: string[]
  featured?: boolean
  image?: string
}

export interface BlogPost extends BlogPostMetadata {
  content: string
}
