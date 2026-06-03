'use client'

import { useEffect, useMemo, useState, type CSSProperties } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, Search, UserPlus, LogIn, X, PlusCircle, UserRound } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableNavbar() {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const { session, logout } = useEditableLocalAuthSession()
  const navVars = { '--editable-nav-bg': '#2a2a2a', '--editable-nav-text': '#ffffff', '--editable-nav-active': '#fb7a21', '--editable-nav-active-text': '#ffffff', '--editable-cta-bg': '#fb7a21', '--editable-cta-text': '#ffffff', '--editable-search-bg': '#ffffff', '--editable-border': 'rgba(31,31,31,0.12)', '--editable-container': '1120px' } as CSSProperties
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
    <header style={navVars} className="sticky top-0 z-50 bg-white text-[#1f1f1f] shadow-sm">
      <div className="hidden border-t-4 border-[#fb7a21] bg-white sm:block">
        <div className="mx-auto flex h-10 w-full max-w-[var(--editable-container)] items-center justify-between px-4 text-[11px] font-bold uppercase text-neutral-500 sm:px-6 lg:px-8">
          <span>{globalContent.site.tagline}</span>
          <div className="flex items-center gap-4">
            <Link href="/about" className="hover:text-[#fb7a21]">About</Link>
            <Link href="/contact" className="hover:text-[#fb7a21]">Contact</Link>
            <Link href="/search" className="hover:text-[#fb7a21]">Search</Link>
          </div>
        </div>
      </div>
      <div className="mx-auto flex min-h-[92px] w-full max-w-[var(--editable-container)] items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex shrink-0 items-center gap-3">
          <span className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-lg border border-[var(--editable-border)] bg-white shadow-sm transition-transform group-hover:-rotate-2">
            <img src="/favicon.png?v=20260413" alt={globalContent.site.name} className="h-full w-full scale-[1.32] object-cover" />
          </span>
          <span className="hidden min-w-0 sm:block">
            <span className="block max-w-[220px] truncate text-2xl font-black tracking-normal"><span className="text-[#fb7a21]">{globalContent.site.name.slice(0, 1)}</span>{globalContent.site.name.slice(1)}</span>
            <span className="block max-w-[220px] truncate text-[11px] font-bold uppercase text-neutral-500">{globalContent.nav?.tagline || SITE_CONFIG.tagline}</span>
          </span>
        </Link>

        <form action="/search" className="mx-auto hidden min-w-0 flex-1 justify-end md:flex">
          <label className="relative flex w-full max-w-md items-center rounded-md border border-[var(--editable-border)] bg-[var(--editable-search-bg)] px-4 py-3 shadow-sm">
            <Search className="h-4 w-4 opacity-55" />
            <input name="q" type="search" placeholder="Search articles" className="min-w-0 flex-1 bg-transparent px-3 text-sm font-semibold text-neutral-900 outline-none placeholder:text-neutral-400" />
          </label>
        </form>
      </div>

      <nav className="bg-[var(--editable-nav-bg)] text-[var(--editable-nav-text)]">
        <div className="mx-auto flex min-h-14 w-full max-w-[var(--editable-container)] items-center px-4 sm:px-6 lg:px-8">
          <div className="hidden items-stretch self-stretch lg:flex">
            <Link href="/" className={`inline-flex items-center px-4 text-sm font-black ${activePath === '/' ? 'bg-[var(--editable-nav-active)] text-white' : 'border-l border-white/10 hover:bg-white/5'}`}>Home</Link>
          {navItems.slice(0, 5).map((item) => {
            const active = activePath === item.href || activePath.startsWith(`${item.href}/`)
            return (
              <Link key={item.href} href={item.href} className={`inline-flex items-center border-l border-white/10 px-4 text-sm font-black transition ${active ? 'bg-[var(--editable-nav-active)] text-[var(--editable-nav-active-text)]' : 'hover:bg-white/5'}`}>
                {item.label}
              </Link>
            )
          })}
          </div>

        <div className="ml-auto flex shrink-0 items-center gap-2 py-2">
          {visibleSession ? (
            <>
              <span className="hidden items-center gap-2 rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm font-black sm:inline-flex"><UserRound className="h-4 w-4" /> {visibleSession.name}</span>
              <Link href="/create" className="hidden items-center gap-2 rounded-md bg-[var(--editable-cta-bg)] px-4 py-2.5 text-sm font-black text-[var(--editable-cta-text)] shadow-sm sm:inline-flex"><PlusCircle className="h-4 w-4" /> Create</Link>
              <button type="button" onClick={logout} className="hidden items-center gap-2 rounded-md px-3 py-2 text-sm font-black hover:bg-white/5 sm:inline-flex">Logout</button>
            </>
          ) : (
            <>
              <Link href="/login" className="hidden items-center gap-2 rounded-md px-3 py-2 text-sm font-black hover:bg-white/5 sm:inline-flex"><LogIn className="h-4 w-4" /> Login</Link>
              <Link href="/signup" className="hidden items-center gap-2 rounded-md bg-[var(--editable-cta-bg)] px-4 py-2.5 text-sm font-black text-[var(--editable-cta-text)] shadow-sm sm:inline-flex"><UserPlus className="h-4 w-4" /> Sign up</Link>
            </>
          )}
          <button type="button" onClick={() => setOpen((value) => !value)} className="rounded-md border border-white/20 bg-white p-2 text-neutral-900 lg:hidden" aria-label="Toggle menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        </div>

      {open ? (
        <div className="border-t border-white/10 bg-[var(--editable-nav-bg)] px-4 py-4 lg:hidden">
          <form action="/search" className="mb-4 flex rounded-md border border-white/15 bg-white px-3 py-2 text-neutral-900">
            <Search className="mt-1 h-4 w-4 opacity-55" />
            <input name="q" type="search" placeholder="Search articles" className="min-w-0 flex-1 bg-transparent px-3 text-sm outline-none" />
          </form>
          <div className="grid gap-2">
            {[{ label: 'Home', href: '/' }, ...navItems, { label: 'Contact', href: '/contact' }, ...(visibleSession ? [{ label: `Signed in as ${visibleSession.name}`, href: '/create' }, { label: 'Create', href: '/create' }] : [{ label: 'Login', href: '/login' }, { label: 'Sign up', href: '/signup' }])].map((item) => (
              <Link key={`${item.href}-${item.label}`} href={item.href} onClick={() => setOpen(false)} className="rounded-md border border-white/10 bg-white px-4 py-3 text-sm font-black text-neutral-900">
                {item.label}
              </Link>
            ))}
            {visibleSession ? <button type="button" onClick={() => { logout(); setOpen(false) }} className="rounded-md border border-white/10 bg-[#fb7a21] px-4 py-3 text-left text-sm font-black text-white">Logout</button> : null}
          </div>
        </div>
      ) : null}
      </nav>
    </header>
  )
}
