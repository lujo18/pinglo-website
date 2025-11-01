import { allBlogPosts } from 'contentlayer/generated'

/**
 * Get all blog posts sorted by date (newest first)
 */
export function getAllBlogPosts() {
  return allBlogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

/**
 * Get featured blog posts
 */
export function getFeaturedBlogPosts(limit = 3) {
  return getAllBlogPosts().slice(0, limit)
}

/**
 * Get a single blog post by slug
 */
export function getBlogPostBySlug(slug: string) {
  return allBlogPosts.find((post) => post.slug === slug) || null
}

/**
 * Get all unique tags from blog posts
 */
export function getAllBlogTags() {
  const tags = new Set<string>()
  allBlogPosts.forEach((post) => {
    post.tags.forEach((tag) => tags.add(tag))
  })
  return Array.from(tags).sort()
}

/**
 * Get blog posts by tag
 */
export function getBlogPostsByTag(tag: string) {
  return allBlogPosts.filter((post) => post.tags.includes(tag))
}
