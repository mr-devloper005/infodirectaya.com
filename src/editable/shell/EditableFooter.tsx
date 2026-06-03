'use client'

import Link from 'next/link'
import { useEffect, useState, type CSSProperties } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

const footerYear = new Date().getFullYear()

export function EditableFooter() {
  const [mounted, setMounted] = useState(false)
  const footerVars = { '--editable-footer-bg': '#333333', '--editable-footer-text': '#ffffff' } as CSSProperties
  const taskLinks = SITE_CONFIG.tasks.filter((task) => task.enabled)
  const { session, logout } = useEditableLocalAuthSession()
  const visibleSession = mounted ? session : null

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <footer style={footerVars} className="bg-[var(--editable-footer-bg)] text-[var(--editable-footer-text)]">
      <div className="mx-auto grid max-w-[var(--editable-container)] gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-white">
              <img src="/favicon.png?v=20260413" alt={globalContent.site.name} className="h-full w-full scale-[1.32] object-cover" />
            </span>
            <span className="text-2xl font-black tracking-normal"><span className="text-[#fb7a21]">{globalContent.site.name.slice(0, 1)}</span>{globalContent.site.name.slice(1)}</span>
          </Link>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/76">{globalContent.footer?.description || SITE_CONFIG.description}</p>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase text-white/55">Explore Articles</h3>
          <div className="mt-4 grid gap-1">
            {taskLinks.map((task) => (
              <Link key={task.key} href={task.route} className="inline-flex items-center gap-2 border-b border-white/10 py-2 text-sm font-bold text-white/76 hover:text-white">
                {task.label} <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase text-white/55">Site</h3>
          <div className="mt-4 grid gap-1">
            {[
              ['About', '/about'],
              ['Contact', '/contact'],
              ...(visibleSession ? [['Create', '/create']] : [['Login', '/login'], ['Sign up', '/signup']]),
            ].map(([label, href]) => (
              <Link key={href} href={href} className="border-b border-white/10 py-2 text-sm font-bold text-white/76 hover:text-white">{label}</Link>
            ))}
            {visibleSession ? <button type="button" onClick={logout} className="border-b border-white/10 py-2 text-left text-sm font-bold text-white/76 hover:text-white">Logout</button> : null}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs font-bold text-white/55">
        &copy; {footerYear} {globalContent.site.name}. All rights reserved.
      </div>
    </footer>
  )
}
