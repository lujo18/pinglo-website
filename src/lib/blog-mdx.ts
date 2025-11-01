import { promises as fs } from 'fs'
import path from 'path'
import matter from 'gray-matter'

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

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog')

/**
 * Get all blog post metadata (for listing)
 */
export async function getAllBlogPosts(): Promise<BlogPostMetadata[]> {
  try {
    const files = await fs.readdir(BLOG_DIR)
    const mdxFiles = files.filter((file) => file.endsWith('.mdx'))

    const posts: BlogPostMetadata[] = await Promise.all(
      mdxFiles.map(async (filename) => {
        const filepath = path.join(BLOG_DIR, filename)
        const fileContent = await fs.readFile(filepath, 'utf-8')
        const { data } = matter(fileContent)

        return {
          title: data.title || 'Untitled',
          slug: data.slug || filename.replace('.mdx', ''),
          excerpt: data.excerpt || '',
          author: data.author || 'Pinglo Team',
          date: data.date || new Date().toISOString().split('T')[0],
          readingTime: data.readingTime || 5,
          tags: data.tags || [],
          featured: data.featured || false,
          image: data.image,
        }
      })
    )

    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } catch (error) {
    console.error('Error reading blog posts:', error)
    return []
  }
}

/**
 * Get featured blog posts (for homepage)
 */
export async function getFeaturedBlogPosts(limit = 3): Promise<BlogPostMetadata[]> {
  const posts = await getAllBlogPosts()
  return posts.filter((post) => post.featured).slice(0, limit)
}

/**
 * Get a single blog post by slug
 */
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const filepath = path.join(BLOG_DIR, `${slug}.mdx`)
    const fileContent = await fs.readFile(filepath, 'utf-8')
    const { data, content } = matter(fileContent)

    return {
      title: data.title || 'Untitled',
      slug: data.slug || slug,
      excerpt: data.excerpt || '',
      author: data.author || 'Pinglo Team',
      date: data.date || new Date().toISOString().split('T')[0],
      readingTime: data.readingTime || 5,
      tags: data.tags || [],
      featured: data.featured || false,
      image: data.image,
      content,
    }
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error)
    return null
  }
}

/**
 * Get all unique tags from blog posts
 */
export async function getAllBlogTags(): Promise<string[]> {
  const posts = await getAllBlogPosts()
  const tags = new Set<string>()

  posts.forEach((post) => {
    post.tags.forEach((tag) => tags.add(tag))
  })

  return Array.from(tags).sort()
}

/**
 * Get blog posts by tag
 */
export async function getBlogPostsByTag(tag: string): Promise<BlogPostMetadata[]> {
  const posts = await getAllBlogPosts()
  return posts.filter((post) => post.tags.includes(tag))
}
