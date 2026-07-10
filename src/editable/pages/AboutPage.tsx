import { pagesContent } from '@/editable/content/pages.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

export default function AboutPage() {
  return (
    <EditableSiteShell>
      <main className="bg-white px-4 py-12 text-[var(--editable-page-text,#241915)] sm:px-6 lg:px-8">
        <section className="mx-auto max-w-[var(--editable-container)]">
          <article className="max-w-4xl">
            <p className="text-xs font-black uppercase text-[#fb7a21]">{pagesContent.about.badge}</p>
            <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">{pagesContent.about.title}</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 opacity-70">{pagesContent.about.description}</p>
            <div className="mt-8 space-y-4 text-sm leading-8 opacity-75">
              {pagesContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </article>
        </section>
      </main>
    </EditableSiteShell>
  )
}
