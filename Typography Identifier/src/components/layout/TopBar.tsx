/**
 * @file TopBar.tsx
 * @description Top navigation bar inspired by contemporary gallery sites: slim bar with wordmark, navigation, and search.
 */

import React from 'react'
import { Search } from 'lucide-react'

/**
 * TopBar component renders the primary site navigation with a wordmark and key actions.
 */
export function TopBar() {
  return (
    <header className="sticky top-0 z-20 border-b border-neutral-200 bg-white/80 backdrop-blur-sm">
      <div className="flex h-14 w-full items-center justify-between pl-0 pr-4 sm:h-16 sm:px-6 lg:px-8">
        {/* Brand / wordmark */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-28 items-center justify-center px-2">
            <img
              src="https://pub-cdn.sider.ai/u/U03VHXYV6Y/web-coder/6894d831d30e3e771cc5c90d/resource/e217b27a-8297-42e3-a2df-d1ead087305f.png"
              alt="Site logo"
              className="max-h-full w-auto object-contain"
            />
          </div>
        </div>

        {/* Navigation + actions */}
        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-4 text-xs text-neutral-700 sm:flex">
            <button className="transition-colors hover:text-neutral-900">Artworks</button>
            <button className="transition-colors hover:text-neutral-900">Artists</button>
            <button className="transition-colors hover:text-neutral-900">Exhibitions</button>
            <button className="transition-colors hover:text-neutral-900">About</button>
          </nav>

          <div className="flex items-center gap-4">
            <button
              className="hidden items-center gap-1 text-xs text-neutral-600 hover:text-neutral-900 sm:flex"
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
              <span>Search</span>
            </button>
            <button className="text-xs text-neutral-700 hover:text-neutral-900">Log in</button>
            <button className="rounded-full border border-neutral-900 px-3 py-1 text-xs font-medium tracking-wide text-neutral-900 hover:bg-neutral-900 hover:text-white">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
