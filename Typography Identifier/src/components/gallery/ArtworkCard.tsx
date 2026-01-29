/**
 * @file ArtworkCard.tsx
 * @description Card component for displaying a single artwork in the gallery grid, styled in a clean marketplace-like format.
 */

import React from 'react'

/**
 * Props for the ArtworkCard component.
 */
export interface ArtworkCardProps {
  /** Artwork title. */
  title: string
  /** Artist name. */
  artist: string
  /** Year of the work or dimensions/brief info. */
  year: string
  /** Medium or short description. */
  medium: string
  /** Image URL for the artwork. */
  imageUrl: string
  /** Display price for the artwork, e.g. "1500$". */
  price?: string
  /** Optional click handler to open detail view or modal. */
  onClick?: () => void
}

/**
 * ArtworkCard component displays an individual artwork with image and marketplace-style metadata.
 * The entire card can be clicked to trigger a detail view.
 */
export function ArtworkCard({
  title,
  artist,
  year,
  medium,
  imageUrl,
  price,
  onClick,
}: ArtworkCardProps) {
  return (
    <article className="h-full">
      <button
        type="button"
        onClick={onClick}
        className="group flex h-full flex-col text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
      >
        <div className="relative overflow-hidden bg-neutral-100">
          <div className="aspect-[4/5]">
            <img
              src={imageUrl}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-[1.02]"
            />
          </div>
        </div>
        <div className="mt-2 flex flex-1 flex-col">
          <p className="text-sm font-semibold text-neutral-900">{artist}</p>
          <p className="mt-0.5 text-sm text-neutral-800">{title}</p>
          <p className="mt-0.5 text-xs text-neutral-600">
            {year}
            {medium ? `, ${medium}` : ''}
          </p>
          {price && (
            <p className="mt-1 text-xs font-semibold text-neutral-900">
              {price}
            </p>
          )}
        </div>
      </button>
    </article>
  )
}
