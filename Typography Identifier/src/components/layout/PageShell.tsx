/**
 * @file PageShell.tsx
 * @description High-level layout wrapper providing a full-width, white background and page-level padding.
 */

import React, { type ReactNode } from 'react'

/**
 * Props for the PageShell layout component.
 */
export interface PageShellProps {
  /** Main page content to render inside the layout. */
  children: ReactNode
}

/**
 * PageShell component provides a full-width white background and horizontal padding
 * while allowing each section to extend across the entire page width.
 */
export function PageShell({ children }: PageShellProps) {
  return (
    <div className="min-h-screen bg-white text-neutral-900 antialiased px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  )
}
