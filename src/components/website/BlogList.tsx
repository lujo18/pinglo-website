'use client'

import { YStack } from 'tamagui'
import BlogCard from './BlogCard'
import type { BlogPost } from 'contentlayer/generated'

interface BlogListProps {
  posts: BlogPost[]
}

export function BlogList({ posts }: BlogListProps) {
  if (posts.length === 0) {
    return (
      <YStack alignItems="center" gap={16}>
        <p style={{ fontSize: 16, color: '#cbd5e1' }}>No blog posts yet.</p>
      </YStack>
    )
  }

  return (
    <YStack
      width="100%"
      gap={24}
      display="grid"
      style={{
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
        gap: '24px',
      }}
    >
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </YStack>
  )
}

export default BlogList
