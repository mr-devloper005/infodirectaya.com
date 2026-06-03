import Link from 'next/link'
import { ArrowRight, Search } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { editableDesignContract as dc, editablePalette as pal } from '@/editable/layouts/design-contract'
import { getEditableCategory, getEditableExcerpt, getEditablePostImage, postHref } from '@/editable/cards/PostCards'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

function taskLabel(task: TaskKey) {
  return SITE_CONFIG.tasks.find((item) => item.key === task)?.label || task
}

function SectionHeading({ title, actionHref, actionLabel = 'View all' }: { title: string; actionHref?: string; actionLabel?: string }) {
  return (
    <div className="flex items-center gap-5">
      <h2 className="shrink-0 text-xl font-black uppercase text-[var(--slot4-page-text)]">{title}</h2>
      <div className="h-6 flex-1 border-y border-black/[0.08] bg-[repeating-linear-gradient(-45deg,transparent_0_3px,rgba(0,0,0,0.05)_3px_4px)]" />
      {actionHref ? <Link href={actionHref} className="hidden text-sm font-black text-[#fb7a21] hover:underline sm:inline">{actionLabel}</Link> : null}
    </div>
  )
}

function LeadCard({ post, href, large = false }: { post: SitePost; href: string; large?: boolean }) {
  return (
    <Link href={href} className="group block overflow-hidden bg-black text-white">
      <article className={`relative h-full ${large ? 'aspect-[16/11] min-h-[340px]' : 'aspect-[4/5] min-h-[210px] sm:aspect-[16/11] sm:min-h-[0]'}`}>
        <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover opacity-82 transition duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.78))]" />
        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
          <p className="text-xs font-black uppercase text-white/80">{getEditableCategory(post)}</p>
          <h3 className={`${large ? 'text-3xl sm:text-4xl' : 'text-xl sm:text-2xl'} mt-3 line-clamp-3 font-black leading-tight text-white`}>{post.title}</h3>
          {large ? <p className="mt-4 line-clamp-2 max-w-xl text-sm leading-6 text-white/78">{getEditableExcerpt(post, 150)}</p> : null}
        </div>
      </article>
    </Link>
  )
}

function ListRow({ post, href }: { post: SitePost; href: string }) {
  return (
    <Link href={href} className="group grid grid-cols-[88px_minmax(0,1fr)] gap-4 border-b border-black/[0.07] py-4 last:border-b-0">
      <img src={getEditablePostImage(post)} alt="" className="aspect-square w-full rounded-md object-cover" />
      <div className="min-w-0">
        <p className="text-[11px] font-black uppercase text-[#fb7a21]">{getEditableCategory(post)}</p>
        <h3 className="mt-1 line-clamp-2 text-base font-black leading-snug text-[var(--slot4-page-text)] group-hover:text-[#fb7a21]">{post.title}</h3>
        <p className="mt-2 line-clamp-2 text-xs leading-5 text-[var(--slot4-soft-muted-text)]">{getEditableExcerpt(post, 90)}</p>
      </div>
    </Link>
  )
}

function ArticleCard({ post, href }: { post: SitePost; href: string }) {
  return (
    <Link href={href} className={`group block overflow-hidden ${dc.surface.card} ${dc.motion.lift}`}>
      <div className="relative aspect-[16/10] overflow-hidden bg-[var(--slot4-media-bg)]">
        <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="p-5">
        <p className="text-[11px] font-black uppercase text-[#fb7a21]">{getEditableCategory(post)}</p>
        <h3 className="mt-2 line-clamp-2 text-xl font-black leading-tight text-[var(--slot4-page-text)]">{post.title}</h3>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-[var(--slot4-soft-muted-text)]">{getEditableExcerpt(post, 125)}</p>
      </div>
    </Link>
  )
}

export function EditableHomeHero({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const heroTitle = pagesContent.home.hero.title.join(' ') || `Latest ${taskLabel(primaryTask).toLowerCase()}`
  const lead = posts[0]
  const side = posts.slice(1, 3)

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[var(--editable-container)] px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6 grid gap-5 border-b border-black/[0.08] pb-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase text-[#fb7a21]">{pagesContent.home.hero.badge}</p>
            <h1 className="mt-3 max-w-3xl text-4xl font-black leading-tight text-[var(--slot4-page-text)] sm:text-5xl">{heroTitle}</h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--slot4-muted-text)]">{pagesContent.home.hero.description}</p>
          </div>
          <form action="/search" className="flex rounded-md border border-black/[0.1] bg-[#f7f7f5] p-2">
            <input name="q" placeholder={pagesContent.home.hero.searchPlaceholder} className="min-w-0 flex-1 bg-transparent px-3 text-sm font-bold text-neutral-900 outline-none placeholder:text-neutral-400" />
            <button className="inline-flex items-center gap-2 rounded-md bg-[#fb7a21] px-4 py-2.5 text-sm font-black text-white"><Search className="h-4 w-4" /> Search</button>
          </form>
        </div>

        {lead ? (
          <div className="grid gap-1 bg-white lg:grid-cols-[1.15fr_0.85fr]">
            <LeadCard post={lead} href={postHref(primaryTask, lead, primaryRoute)} large />
            <div className="grid gap-1 sm:grid-cols-2 lg:grid-cols-1">
              {side.map((post) => <LeadCard key={post.id} post={post} href={postHref(primaryTask, post, primaryRoute)} />)}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}

export function EditableStoryRail({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const railPosts = posts.slice(3, 9)
  if (!railPosts.length) return null
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[var(--editable-container)] px-4 py-10 sm:px-6 lg:px-8">
        <SectionHeading title="Recent Articles" actionHref={primaryRoute} />
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {railPosts.map((post) => <ArticleCard key={post.id} post={post} href={postHref(primaryTask, post, primaryRoute)} />)}
        </div>
      </div>
    </section>
  )
}

export function EditableMagazineSplit({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const main = posts.slice(9, 12)
  const popular = posts.slice(12, 17).length ? posts.slice(12, 17) : posts.slice(3, 8)
  if (!main.length && !popular.length) return null
  return (
    <section className="bg-[#f6f6f4]">
      <div className="mx-auto grid max-w-[var(--editable-container)] gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,1fr)_330px] lg:px-8">
        <div className={`${dc.surface.soft} p-5 sm:p-6`}>
          <SectionHeading title={`Editor's ${taskLabel(primaryTask)}`} actionHref={primaryRoute} />
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {(main.length ? main : posts.slice(0, 3)).map((post) => <ArticleCard key={post.id} post={post} href={postHref(primaryTask, post, primaryRoute)} />)}
          </div>
        </div>
        <aside className={`${dc.surface.soft} p-5 sm:p-6`}>
          <SectionHeading title="Most Read" />
          <div className="mt-2">
            {popular.map((post) => <ListRow key={post.id} post={post} href={postHref(primaryTask, post, primaryRoute)} />)}
          </div>
        </aside>
      </div>
    </section>
  )
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const categoryPosts = timeSections.flatMap((section) => section.posts).length ? timeSections.flatMap((section) => section.posts) : posts.slice(17)
  const topics = categoryPosts.slice(0, 8)
  if (!topics.length) return null
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[var(--editable-container)] px-4 py-10 sm:px-6 lg:px-8">
        <SectionHeading title="Topic Collections" actionHref={primaryRoute} actionLabel="Browse archive" />
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {topics.slice(0, 4).map((post) => (
            <Link key={post.id} href={postHref(primaryTask, post, primaryRoute)} className="group grid gap-5 border-b border-black/[0.08] pb-6 sm:grid-cols-[220px_minmax(0,1fr)]">
              <img src={getEditablePostImage(post)} alt="" className="aspect-[16/10] w-full rounded-md object-cover" />
              <div>
                <p className={`${pal.accentText} text-xs font-black uppercase`}>{getEditableCategory(post)}</p>
                <h3 className="mt-2 text-2xl font-black leading-tight text-[var(--slot4-page-text)] group-hover:text-[#fb7a21]">{post.title}</h3>
                <p className="mt-3 line-clamp-3 text-sm leading-7 text-[var(--slot4-soft-muted-text)]">{getEditableExcerpt(post, 165)}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-black text-[var(--slot4-page-text)]">Read article <ArrowRight className="h-4 w-4" /></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export function EditableHomeCta() {
  return (
    <section id="get-app" className="bg-[#fff8f1]">
      <div className="mx-auto max-w-[var(--editable-container)] px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 border-y border-black/[0.08] py-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase text-[#fb7a21]">Contributor desk</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-[var(--slot4-page-text)]">Have an article idea worth publishing?</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--slot4-muted-text)]">Send a pitch, create an account, or contact the editorial team with a headline, summary, and source notes.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/signup" className={dc.button.primary}>Create account</Link>
            <Link href="/contact" className={dc.button.secondary}>Contact editor</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
