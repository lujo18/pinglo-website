'use client'

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
      <div style={{ backgroundColor: '#1e293b', borderRadius: 16, padding: 32, gap: 16, borderWidth: 2, borderColor: '#6d28d9', display: 'flex', flexDirection: 'column', cursor: 'pointer', transition: 'all 0.3s', border: '2px solid #6d28d9' }} onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = '#a78bfa'; (e.currentTarget as HTMLElement).style.backgroundColor = '#334155'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; }} onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = '#6d28d9'; (e.currentTarget as HTMLElement).style.backgroundColor = '#1e293b'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 12, fontWeight: 600, color: '#a78bfa', textTransform: 'uppercase' }}>
            {formattedDate}
          </span>
          <span style={{ fontSize: 12, color: '#cbd5e1' }}>
            {(post.body.raw.length / 200).toFixed(0)} min read
          </span>
        </div>
        <h3 style={{ fontSize: 20, fontWeight: 700, color: '#f1f5f9', lineHeight: 1.4, margin: '8px 0' }}>
          {post.title}
        </h3>
        <p style={{ fontSize: 16, color: '#cbd5e1', lineHeight: 1.5, margin: 0 }}>
          {post.excerpt || post.body.raw.slice(0, 150) + '...'}
        </p>
      </div>
    </Link>
  )
}
