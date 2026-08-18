'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, Search, UserPlus, LogIn, X, PlusCircle, UserRound, LogOut } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableNavbar() {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const { session, logout } = useEditableLocalAuthSession()
  const navItems = useMemo(
    () => SITE_CONFIG.tasks.filter((task) => task.enabled).map((task) => ({ label: task.label, href: task.route })),
    []
  )

  useEffect(() => {
    setMounted(true)
  }, [])

  const activePath = mounted ? pathname : ''
  const visibleSession = mounted ? session : null

  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-[var(--slot4-surface-bg)] text-[var(--slot4-page-text)] shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
      <nav className="mx-auto flex h-16 w-full max-w-[1120px] items-center gap-3 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex shrink-0 items-center gap-2.5">
          <img src="/favicon.png?v=20260413" alt={globalContent.site.name} className="h-18 w-18 object-contain" />
          <span className="hidden min-w-0 sm:block">
            <span className="block max-w-[200px] truncate text-lg font-extrabold tracking-tight"><span className="text-[var(--slot4-accent)]">{globalContent.site.name.slice(0, 1)}</span>{globalContent.site.name.slice(1)}</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {[{ label: 'Home', href: '/' }, ...navItems.slice(0, 5)].map((item) => {
            const active = activePath === item.href || (item.href !== '/' && activePath.startsWith(`${item.href}/`))
            return (
              <Link key={item.href} href={item.href} className={`rounded-md px-3 py-2 text-sm font-extrabold transition ${active ? 'bg-[var(--slot4-accent)] text-white' : 'text-[var(--slot4-muted-text)] hover:bg-black/[0.04] hover:text-[var(--slot4-page-text)]'}`}>
                {item.label}
              </Link>
            )
          })}
        </div>

        <form action="/search" className="mx-auto hidden min-w-0 flex-1 justify-end md:flex">
          <label className="flex w-full max-w-xs items-center gap-2 rounded-md border border-black/[0.06] bg-[var(--slot4-page-bg)] px-3 py-2">
            <Search className="h-4 w-4 text-[var(--slot4-muted-text)]" />
            <input name="q" type="search" placeholder="Search..." className="min-w-0 flex-1 bg-transparent text-sm font-medium outline-none placeholder:text-[var(--slot4-soft-muted-text)]" />
          </label>
        </form>

        <div className="ml-auto flex shrink-0 items-center gap-2">
          {visibleSession ? (
            <>
              <Link href="/create" className="hidden items-center gap-1.5 rounded-md bg-[var(--slot4-accent-fill)] px-4 py-2 text-sm font-extrabold text-white transition hover:opacity-90 sm:inline-flex"><PlusCircle className="h-4 w-4" /> Write</Link>
              <span className="hidden items-center gap-1.5 rounded-md border border-black/[0.06] px-3 py-2 text-sm font-extrabold sm:inline-flex"><UserRound className="h-4 w-4 text-[var(--slot4-muted-text)]" /> {visibleSession.name}</span>
              <button type="button" onClick={logout} className="hidden items-center gap-1.5 rounded-md px-3 py-2 text-sm font-extrabold text-[var(--slot4-muted-text)] hover:bg-black/[0.04] hover:text-[var(--slot4-page-text)] sm:inline-flex"><LogOut className="h-4 w-4" /> Logout</button>
            </>
          ) : (
            <>
              <Link href="/login" className="hidden items-center gap-1.5 rounded-md px-3 py-2 text-sm font-extrabold text-[var(--slot4-muted-text)] hover:bg-black/[0.04] hover:text-[var(--slot4-page-text)] sm:inline-flex"><LogIn className="h-4 w-4" /> Login</Link>
              <Link href="/signup" className="hidden items-center gap-1.5 rounded-md bg-[var(--slot4-accent-fill)] px-4 py-2 text-sm font-extrabold text-white transition hover:opacity-90 sm:inline-flex"><UserPlus className="h-4 w-4" /> Sign up</Link>
            </>
          )}
          <button type="button" onClick={() => setOpen((v) => !v)} className="rounded-md border border-black/[0.06] p-2 lg:hidden" aria-label="Toggle menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-black/[0.06] bg-[var(--slot4-surface-bg)] px-4 py-4 lg:hidden">
          <form action="/search" className="mb-4 flex items-center gap-2 rounded-md border border-black/[0.06] bg-[var(--slot4-page-bg)] px-3 py-2">
            <Search className="h-4 w-4 text-[var(--slot4-muted-text)]" />
            <input name="q" type="search" placeholder="Search..." className="min-w-0 flex-1 bg-transparent text-sm outline-none" />
          </form>
          {visibleSession ? <div className="mb-3 rounded-md border border-black/[0.06] px-4 py-3 text-sm font-extrabold">Signed in as {visibleSession.name}</div> : null}
          <div className="grid gap-1.5">
            {[{ label: 'Home', href: '/' }, ...navItems, { label: 'About', href: '/about' }, { label: 'Contact', href: '/contact' }, ...(visibleSession ? [{ label: 'Write article', href: '/create' }] : [{ label: 'Login', href: '/login' }, { label: 'Sign up', href: '/signup' }])].map((item) => (
              <Link key={`${item.href}-${item.label}`} href={item.href} onClick={() => setOpen(false)} className="rounded-md border border-black/[0.06] px-4 py-3 text-sm font-extrabold transition hover:bg-black/[0.03]">
                {item.label}
              </Link>
            ))}
            {visibleSession ? <button type="button" onClick={() => { logout(); setOpen(false) }} className="rounded-md bg-[var(--slot4-accent-fill)] px-4 py-3 text-left text-sm font-extrabold text-white">Logout</button> : null}
          </div>
        </div>
      ) : null}
    </header>
  )
}
