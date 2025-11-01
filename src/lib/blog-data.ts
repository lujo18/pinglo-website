// Pre-parsed blog post data (no fs required at runtime)
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
  htmlContent: string
}

// Blog posts with pre-rendered HTML content
export const allBlogPosts: BlogPostMetadata[] = [
  {
    title: "Build Stronger Relationships Through Intentional Connection",
    slug: "build-stronger-relationships",
    excerpt: "Learn how small, intentional actions can significantly deepen your most important relationships.",
    author: "Pinglo Team",
    date: "2025-01-15",
    readingTime: 5,
    tags: ["Relationships", "Intentionality"],
    featured: true,
    image: "/blog/build-stronger.jpg"
  },
  {
    title: "Remembering What Matters Most in a Busy World",
    slug: "remembering-what-matters",
    excerpt: "In the hustle of daily life, it's easy to forget those who matter most. Here's how to stay connected.",
    author: "Pinglo Team",
    date: "2025-01-10",
    readingTime: 4,
    tags: ["Connection", "Mindfulness"],
    featured: true,
    image: "/blog/remember.jpg"
  },
  {
    title: "Consistency Beats Perfection When Building Relationships",
    slug: "consistency-beats-perfection",
    excerpt: "You don't need perfect moments—you just need consistency. Here's why showing up regularly matters more than grand gestures.",
    author: "Pinglo Team",
    date: "2025-01-05",
    readingTime: 6,
    tags: ["Relationships", "Habits"],
    featured: true,
    image: "/blog/consistency.jpg"
  }
]

// HTML content for each post (pre-rendered Markdown)
const blogPostContent: Record<string, string> = {
  "build-stronger-relationships": `<h2>Why Intentional Connection Matters</h2>
<p>In our fast-paced world, relationships can feel like they're always on the back burner. We get busy with work, family obligations, and personal projects. Before we know it, weeks or months have passed since we've checked in with someone who truly matters to us.</p>

<p>But here's the thing: the strongest relationships aren't built by accident. They're built through intentional, consistent action.</p>

<h2>Small Actions, Big Impact</h2>
<p>You don't need to plan elaborate trips or grand gestures to strengthen your relationships. Sometimes the most meaningful connections come from simple, intentional actions:</p>

<ul>
<li>A thoughtful text asking how someone's day went</li>
<li>Remembering an important event and checking in</li>
<li>Setting aside dedicated time for a meaningful conversation</li>
<li>Sharing something that reminded you of them</li>
</ul>

<h2>The Power of Remembering</h2>
<p>One of the most powerful ways to show someone they matter is to remember the details. Remember their birthday. Remember that job interview they were nervous about. Remember their favorite coffee order.</p>

<p>When you remember these things without being prompted, it sends a powerful message: "You matter to me. I think about you even when we're not together."</p>

<h2>Making It Stick</h2>
<p>The challenge isn't knowing what to do—it's actually doing it consistently. That's where tools like Pinglo come in. By helping you track the people who matter and their important moments, you can turn good intentions into actual connection.</p>

<p>Start small. Pick three people you want to stay closer to this month. Write down one thing about each of them. Then commit to one intentional action with each person this week.</p>

<p>That's it. Small, intentional steps lead to stronger relationships.</p>`,

  "remembering-what-matters": `<h2>The Cost of Forgetting</h2>
<p>You probably have dozens of people in your life who matter to you. Family members, close friends, colleagues who've become confidants, mentors who've shaped you.</p>

<p>But here's the hard truth: without systems in place, you will forget things. You'll miss birthdays. You'll lose track of important moments in people's lives. And each forgotten detail erodes the relationship, just a little bit.</p>

<h2>Why Our Brains Fail Us</h2>
<p>It's not about not caring. Our brains are simply not designed to hold unlimited information about unlimited people. We're overwhelmed by information, flooded with notifications, stretched across multiple platforms.</p>

<p>The solution isn't to try harder to remember—it's to create systems that help us.</p>

<h2>Building Your Connection System</h2>
<p>Here's what actually works:</p>

<ol>
<li><strong>Write things down</strong> - The moment you learn something important about someone, capture it. Don't rely on memory.</li>
<li><strong>Set reminders</strong> - Important dates need to be in your calendar, not just your head.</li>
<li><strong>Review regularly</strong> - Spend time each week thinking about the people who matter and who you should check in with.</li>
<li><strong>Take action</strong> - When a reminder comes up, don't just think about it. Send that message. Make that call.</li>
</ol>

<h2>The Compound Effect</h2>
<p>When you consistently remember and acknowledge the people in your life, something amazing happens. Your relationships deepen. People feel valued. Connections strengthen.</p>

<p>It's not complicated. It's just consistent attention and care, directed toward the people who matter most.</p>

<p>The question isn't whether you have time to remember. It's whether you have a system to help you. That's what we're building at Pinglo.</p>`,

  "consistency-beats-perfection": `<h2>The Perfection Trap</h2>
<p>We tell ourselves that we'll call more often, visit more frequently, or deepen our relationships. But then we get intimidated by the idea that we haven't talked in months. That first call back feels too big. What will we even say?</p>

<p>So we wait for the "perfect moment"—when we have more time, when we've thought of something really meaningful to share, when life has calmed down.</p>

<p>And we keep waiting.</p>

<h2>Perfection Is the Enemy</h2>
<p>The irony is that perfection is actually the enemy of connection. You don't need a perfectly crafted message. You don't need to wait for the ideal time. You don't need to have your life together before reaching out.</p>

<p>People don't want perfection from you. They want consistency. They want to know they can count on you showing up, even imperfectly.</p>

<h2>The Power of Small, Regular Actions</h2>
<p>Consider two approaches:</p>

<p><strong>Approach 1 (Perfection):</strong> Plan an elaborate dinner party to reconnect with old friends. Spend weeks organizing. Hope it's perfect. Most of the time, it doesn't happen.</p>

<p><strong>Approach 2 (Consistency):</strong> Send a text to one friend each week. Five minutes. No preparation required. Year-round, these friends feel genuinely connected to you.</p>

<p>Approach 2 wins every single time.</p>

<h2>Why Consistency Matters</h2>
<p>When you show up consistently, even imperfectly, you communicate something powerful:</p>

<ul>
<li>"You matter to me"</li>
<li>"I think about you regularly"</li>
<li>"I'm reliable"</li>
<li>"This relationship is worth my time"</li>
</ul>

<p>Consistency builds trust and deepens bonds in ways that occasional grand gestures never can.</p>

<h2>Start Where You Are</h2>
<p>You don't need a perfect system or a perfect plan. You just need to start consistently. Pick one person. Commit to reaching out once a week. That's it. No perfection required.</p>

<p>Once that becomes a habit, add another person. Build from there.</p>

<p>The strongest relationships aren't built by perfectionists. They're built by people who show up consistently, imperfectly, with good intentions and regular action.</p>`
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  const metadata = allBlogPosts.find(post => post.slug === slug)
  if (!metadata) return null

  return {
    ...metadata,
    htmlContent: blogPostContent[slug] || ""
  }
}

export function getFeaturedBlogPosts(limit = 3): BlogPostMetadata[] {
  return allBlogPosts
    .filter(post => post.featured)
    .slice(0, limit)
}

export function getAllBlogTags(): string[] {
  const tags = new Set<string>()
  allBlogPosts.forEach(post => {
    post.tags.forEach(tag => tags.add(tag))
  })
  return Array.from(tags).sort()
}

export function getBlogPostsByTag(tag: string): BlogPostMetadata[] {
  return allBlogPosts.filter(post => post.tags.includes(tag))
}
