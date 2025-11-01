'use client'

import { YStack, XStack, Text } from 'tamagui'
import Link from 'next/link'
import type { BlogPost } from 'contentlayer/generated'

interface BlogCardProps {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <Link href={`/blog/${post.slug}`}>
      <YStack
        backgroundColor="$color2"
        borderRadius={16}
        padding={32}
        gap={16}
        borderWidth={2}
        borderColor="$accentSecondary"
        hoverStyle={{
          borderColor: '$accentPrimary',
          backgroundColor: '$color3',
          transform: 'translateY(-4px)',
        }}
        cursor="pointer"
        transition="all 0.3s"
      >
        {/* Header */}
        <YStack gap={8}>
          <XStack gap={12} alignItems="center" flexWrap="wrap">
            <Text fontSize={12} fontWeight="600" color="$accentPrimary" textTransform="uppercase">
              {formattedDate}
            </Text>
            <Text fontSize={12} color="$textSecondary">
              {post.readingTime} min read
            </Text>
          </XStack>
        </YStack>

        {/* Title */}
        <Text
          fontSize={20}
          fontWeight="700"
          color="$textPrimary"
          lineHeight={28}
          numberOfLines={2}
        >
          {post.title}
        </Text>

        {/* Excerpt */}
        <Text
          fontSize={16}
          color="$textSecondary"
          lineHeight={24}
          numberOfLines={3}
        >
          {post.excerpt}
        </Text>

        {/* Tags */}
        {post.tags.length > 0 && (
          <XStack gap={8} flexWrap="wrap" marginTop={8}>
            {post.tags.slice(0, 3).map((tag) => (
              <Text
                key={tag}
                fontSize={12}
                paddingHorizontal={10}
                paddingVertical={4}
                borderRadius={6}
                backgroundColor="$color3"
                color="$accentPrimary"
              >
                {tag}
              </Text>
            ))}
          </XStack>
        )}

        {/* Author */}
        <XStack marginTop={8} gap={8} alignItems="center">
          <Text fontSize={12} color="$textSecondary">
            By {post.author}
          </Text>
        </XStack>
      </YStack>
    </Link>
  )
}
