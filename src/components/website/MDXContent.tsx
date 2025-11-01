'use client'

interface MDXContentProps {
  html: string
}

export function MDXContent({ html }: MDXContentProps) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: html,
      }}
      style={{
        color: 'inherit',
        fontSize: 'inherit',
        lineHeight: 'inherit',
      }}
    />
  )
}
