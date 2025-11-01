import { marked } from 'marked'

// Configure marked for consistent rendering
marked.setOptions({
  breaks: true,
  gfm: true,
})

export async function markdownToHtml(markdown: string): Promise<string> {
  const html = await marked(markdown)
  return html as string
}

