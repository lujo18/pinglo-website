'use client'

import BlogCard from './BlogCard'
import type { BlogPost } from 'contentlayer/generated'

interface BlogListProps {
  posts: BlogPost[]
}

export function BlogList({ posts }: BlogListProps) {
  if (posts.length === 0) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, minHeight: 300 }}>
        <p style={{ fontSize: 16, color: '#cbd5e1' }}>No blog posts yet.</p>
      </div>
    )
  }

  return (
    <div style={{ width: '100%', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '24px' }}>
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  )
}

export default BlogList
