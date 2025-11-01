# Pinglo Blog System - Quick Start Guide

## 📖 Overview

Your Pinglo marketing website now has a **simple, file-based blog system** that's easy to manage and requires no database. Blog posts are written in Markdown with YAML frontmatter metadata.

## 🎯 Quick Start: Add a New Blog Post

### Step 1: Create a New Markdown File

Create a new `.md` file in `src/content/blog/`:

```bash
src/content/blog/your-post-title.md
```

### Step 2: Add Frontmatter (Metadata)

At the top of your file, add YAML frontmatter:

```yaml
---
title: Your Post Title Goes Here
slug: your-post-title
excerpt: A brief one-line summary of your post (shown in blog list)
author: Your Name or "Pinglo Team"
date: 2025-10-31
readingTime: 5
tags: [Tag1, Tag2, Tag3]
featured: true
---
```

**Frontmatter Explained:**
- `title` — Post headline (required)
- `slug` — URL slug for the post (e.g., `/blog/your-post-title`)
- `excerpt` — One-sentence summary shown in blog card
- `author` — Who wrote it (default: "Pinglo Team")
- `date` — Publication date (YYYY-MM-DD format)
- `readingTime` — Estimated reading time in minutes (auto-calculated if omitted)
- `tags` — Array of topic tags (for categorization)
- `featured` — Set to `true` to show on homepage (optional)

### Step 3: Write Your Content in Markdown

Below the frontmatter, write your post in standard Markdown:

```markdown
---
title: How to Stay Connected
slug: how-to-stay-connected
excerpt: Simple tips for maintaining relationships.
author: Pinglo Team
date: 2025-10-31
tags: [Relationships, Connection]
featured: true
---

## Your Section Header

Your content here. You can use **bold**, *italic*, and all standard Markdown formatting.

### Subsection

- Bullet points work
- As do numbered lists

1. Like this
2. And this

> Blockquotes work too!

[Links work](https://example.com) and so do `code snippets`.
```

### Step 4: Save and Deploy

That's it! Once you save the file:

1. Next.js automatically detects the new post
2. The blog page updates to show the new post
3. Your post is live at `/blog/your-post-title`

## 📂 File Structure

```
src/
├── content/blog/
│   ├── build-stronger-relationships.md    ← Sample post
│   ├── remembering-what-matters.md        ← Sample post
│   ├── consistency-beats-perfection.md    ← Sample post
│   └── your-new-post.md                   ← Create new posts here
├── lib/
│   └── blog.ts                             ← Blog utilities (don't edit)
├── components/website/
│   ├── BlogCard.tsx                        ← Post card component
│   └── BlogList.tsx                        ← Posts grid
└── app/blog/
    ├── page.tsx                            ← /blog index page
    └── [slug]/
        └── page.tsx                        ← Individual post page
```

## 🎨 Markdown Formatting Supported

Your blog posts support all standard Markdown plus:

```markdown
# Heading 1
## Heading 2
### Heading 3

**Bold text**
*Italic text*
`inline code`

```
code block
```

> Blockquotes

- Unordered list
- Item 2

1. Ordered list
2. Item 2

[Link text](https://url.com)

---
Horizontal rule
```

## 🔍 Blog Features

### Homepage Featured Posts

Set `featured: true` in frontmatter to display on homepage:

```yaml
featured: true
```

Featured posts appear first and are highlighted.

### Reading Time

Reading time is auto-calculated based on word count (~200 words/minute), but you can override:

```yaml
readingTime: 7
```

### Tags

Add tags to categorize posts:

```yaml
tags: [Relationships, Tips, Mindfulness]
```

Tags appear on post cards and individual post pages.

### Author

Default author is "Pinglo Team". Customize per post:

```yaml
author: Sarah Chen
```

## 📋 Blog Utilities (`src/lib/blog.ts`)

The blog system provides helper functions you can use anywhere:

```typescript
import { 
  getAllBlogPosts,           // Get all posts (sorted by date, newest first)
  getFeaturedBlogPosts,      // Get featured posts for homepage
  getBlogPostBySlug,         // Get individual post by slug
  getAllBlogTags,            // Get all unique tags
  getBlogPostsByTag          // Filter posts by tag
} from '@/lib/blog'
```

### Examples:

```typescript
// Get all posts
const posts = getAllBlogPosts()

// Get 3 featured posts
const featured = getFeaturedBlogPosts(3)

// Get single post
const post = getBlogPostBySlug('how-to-stay-connected')

// Get all tags
const tags = getAllBlogTags()
// Returns: ['Relationships', 'Tips', 'Mindfulness', ...]

// Get posts with specific tag
const relationshipPosts = getBlogPostsByTag('Relationships')
```

## 🌐 Blog Routes

Your blog has these routes:

| Route | Purpose |
|-------|---------|
| `/blog` | Blog index - shows all posts in a grid |
| `/blog/your-post-title` | Individual post page with full content |

## 🎭 Sample Posts

Three example posts are included:

1. **"How to Build Stronger Relationships Without Burnout"**
   - Slug: `build-stronger-relationships`
   - Featured: Yes
   - Tags: Relationships, Mindfulness, Connection

2. **"The Art of Remembering What Matters"**
   - Slug: `remembering-what-matters`
   - Featured: Yes
   - Tags: Relationships, Memory, Thoughtfulness

3. **"Why Consistency Beats Perfection in Relationships"**
   - Slug: `consistency-beats-perfection`
   - Featured: Yes
   - Tags: Relationships, Habits, Growth

Feel free to edit or delete these and replace with your own content.

## ✍️ Best Practices

### Writing Great Blog Posts

1. **Start with a strong excerpt** — This appears on the blog list and in social shares
2. **Use headers to structure** — Makes content scannable and improves SEO
3. **Keep paragraphs short** — Easier to read on mobile
4. **Use lists and formatting** — Break up dense text
5. **Include examples** — Concrete examples are more engaging
6. **Write for your audience** — People interested in staying connected and relationships
7. **End with a CTA** — Encourage readers to download the app

### SEO Tips

- Use keywords naturally in title and headers
- Write compelling excerpts (they appear in social previews)
- Use descriptive tags
- Include links to other blog posts when relevant
- Aim for 2-5 minute reads (optimal engagement)

### Formatting Example

```markdown
---
title: Why Small Habits Matter
slug: small-habits-matter
excerpt: How tiny consistent actions transform your relationships over time.
author: Pinglo Team
date: 2025-10-31
readingTime: 5
tags: [Habits, Relationships, Growth]
featured: true
---

## Why Small Things Matter

Relationships aren't built overnight...

### Small Actions, Big Results

Research shows that...

- Consistent messaging works
- Frequent contact beats grand gestures
- Small gestures are remembered

### In Practice

Here's what this looks like:

> "The best relationships aren't built by perfect people. 
> They're built by imperfect people who show up consistently."

---

Ready to transform your relationships? 

[Download Pinglo](#) and start today.
```

## 🚀 Publishing Workflow

1. **Write** — Create your `.md` file in `src/content/blog/`
2. **Preview** — Run `npm run dev` and visit `/blog`
3. **Refine** — Edit and refresh to see changes instantly
4. **Commit** — `git add src/content/blog/your-post.md && git commit -m "Add blog post"`
5. **Deploy** — Push to main branch (auto-deploys to Vercel)
6. **Share** — Post appears on website immediately

## 🔗 Sharing Blog Posts

Once published, share your blog posts:

**On Social Media:**
- Twitter/X: `/blog/your-post-slug`
- LinkedIn: Full URL with title
- Facebook: Includes OG image + description

**In Newsletters:**
- Link to blog post from welcome email
- Quote excerpt in email body

**On Website:**
- Link from homepage (featured posts)
- Link from footer ("Blog" link)
- Reference in other blog posts

## 📊 Analytics

Track blog performance:

1. **Google Analytics** — Monitor traffic to `/blog` routes
2. **Search Console** — Track blog post rankings
3. **Click-through rate** — From blog to app download

Key metrics to track:
- Avg. time on post page
- Bounce rate
- Click-through to app
- Posts that drive most traffic

## ❓ Troubleshooting

### Post doesn't appear in blog list?

1. Check file is saved in `src/content/blog/`
2. Verify frontmatter YAML syntax is correct
3. Restart dev server: `npm run dev`
4. Check slug is unique (no duplicate slugs)

### Title/metadata not showing?

1. Ensure frontmatter is at the very top (first line: `---`)
2. Verify required fields: `title`, `slug`, `excerpt`, `author`, `date`
3. Check YAML formatting (no extra spaces, proper indentation)

### Post URL is wrong?

The post URL is generated from the `slug` field in frontmatter. To change it, update the slug and change the filename to match.

### Reading time is wrong?

Override it in frontmatter:
```yaml
readingTime: 7
```

## 📝 Next Steps

1. ✅ Explore the sample blog posts
2. ✅ Create your first custom blog post
3. ✅ Test on `/blog`
4. ✅ Share with your team
5. ✅ Set up analytics tracking

---

**Questions?** The blog system is built with:
- **Markdown parsing** — Gray Matter (frontmatter + content)
- **React rendering** — React Markdown (styled with Tamagui)
- **Routing** — Next.js App Router with dynamic routes
- **No database** — Files are your content source of truth

Your blog is production-ready. Start writing! ✨
