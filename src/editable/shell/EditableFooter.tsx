'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

const footerYear = new Date().getFullYear()

export function EditableFooter() {
  const [mounted, setMounted] = useState(false)
  const taskLinks = SITE_CONFIG.tasks.filter((task) => task.enabled)
  const { session, logout } = useEditableLocalAuthSession()
  const visibleSession = mounted ? session : null

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <footer className="bg-[var(--slot4-dark-bg)] text-[var(--slot4-dark-text)]">
      <div className="mx-auto grid max-w-[1120px] gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-2.5">
            <img src="/favicon.png?v=20260413" alt={globalContent.site.name} className="h-18 w-18 object-contain" />
            <span className="text-xl font-extrabold tracking-tight"><span className="text-[var(--slot4-accent)]">{globalContent.site.name.slice(0, 1)}</span>{globalContent.site.name.slice(1)}</span>
          </Link>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/70">{globalContent.footer?.description || SITE_CONFIG.description}</p>
        </div>

        <div>
          <h3 className="text-xs font-extrabold uppercase tracking-widest text-white/50">Explore</h3>
          <div className="mt-4 grid gap-1">
            {taskLinks.map((task) => (
              <Link key={task.key} href={task.route} className="inline-flex items-center gap-2 border-b border-white/10 py-2 text-sm font-semibold text-white/70 transition hover:text-white">
                {task.label} <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-extrabold uppercase tracking-widest text-white/50">Site</h3>
          <div className="mt-4 grid gap-1">
            {[
              ['About', '/about'],
              ['Contact', '/contact'],
              ...(visibleSession ? [['Create', '/create']] : [['Login', '/login'], ['Sign up', '/signup']]),
            ].map(([label, href]) => (
              <Link key={href} href={href} className="border-b border-white/10 py-2 text-sm font-semibold text-white/70 transition hover:text-white">{label}</Link>
            ))}
            {visibleSession ? <button type="button" onClick={logout} className="border-b border-white/10 py-2 text-left text-sm font-semibold text-white/70 transition hover:text-white">Logout</button> : null}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs font-semibold text-white/50">
        &copy; {footerYear} {globalContent.site.name}. All rights reserved.
      </div>
    </footer>
  )
}
