'use client'

import { FileText, Mail, MessageSquareText, PenLine } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

export default function ContactPage() {
  const lanes = [
    { icon: PenLine, title: 'Article pitches', body: 'Send a headline, angle, category, and short outline for essays, explainers, features, or opinion pieces.' },
    { icon: MessageSquareText, title: 'Corrections and feedback', body: 'Flag a typo, add context, or tell the editorial team where an article needs a closer look.' },
    { icon: Mail, title: 'Contributor support', body: 'Ask about submissions, formatting, source notes, image requirements, or publication workflow.' },
  ]

  return (
    <EditableSiteShell className="bg-white text-[var(--slot4-page-text)]">
      <main className="mx-auto max-w-[var(--editable-container)] px-4 py-12 sm:px-6 lg:px-8">
        <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-xs font-black uppercase text-[#fb7a21]">{pagesContent.contact.eyebrow}</p>
            <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">{pagesContent.contact.title}</h1>
            <p className="mt-5 max-w-2xl text-sm leading-8 text-[var(--slot4-muted-text)]">{pagesContent.contact.description}</p>
            <div className="mt-8 space-y-4">
              {lanes.map((lane) => (
                <div key={lane.title} className="rounded-lg border border-[var(--editable-border)] bg-[#fff8f1] p-5">
                  <lane.icon className="h-5 w-5" />
                  <h2 className="mt-3 text-xl font-black">{lane.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-[var(--slot4-muted-text)]">{lane.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-[var(--editable-border)] bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center gap-3 border-b border-black/[0.08] pb-4">
              <FileText className="h-5 w-5 text-[#fb7a21]" />
              <h2 className="text-2xl font-black">{pagesContent.contact.formTitle}</h2>
            </div>
            <EditableContactLeadForm />
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
