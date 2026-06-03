import type { Metadata } from 'next'
import Link from 'next/link'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalSignupForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/signup', title: 'Sign up', description: pagesContent.auth.signup.metadataDescription })
}

export default function SignupPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#f6f6f4] text-[var(--editable-page-text,#2f1d16)]">
        <section className="mx-auto grid min-h-[calc(100vh-12rem)] max-w-[var(--editable-container)] items-center gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[420px_1fr] lg:px-8">
          <div className="rounded-lg border border-[var(--editable-border)] bg-white p-6 shadow-sm sm:p-8">
            <h1 className="text-3xl font-black">{pagesContent.auth.signup.formTitle}</h1>
            <EditableLocalSignupForm />
            <p className="mt-5 text-sm text-neutral-600">Already have an account? <Link href="/login" className="font-black text-[#fb7a21] underline-offset-4 hover:underline">{pagesContent.auth.signup.loginCta}</Link></p>
          </div>
          <div>
            <p className="text-xs font-black uppercase text-[#fb7a21]">{pagesContent.auth.signup.badge}</p>
            <h2 className="mt-4 max-w-xl text-4xl font-black leading-tight sm:text-5xl">{pagesContent.auth.signup.title}</h2>
            <p className="mt-6 max-w-lg text-sm leading-8 text-neutral-600">{pagesContent.auth.signup.description}</p>
            <div className="mt-8 max-w-xl rounded-lg border border-[var(--editable-border)] bg-white p-5">
              <h3 className="text-lg font-black">What you can publish</h3>
              <p className="mt-3 text-sm leading-7 text-neutral-600">Create article drafts with a headline, category, summary, featured image, source link, and full body so the publication keeps every submission organized.</p>
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
