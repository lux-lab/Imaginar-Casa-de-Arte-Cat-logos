/**
 * @file ArtworkDetailModal.tsx
 * @description Fullscreen-like modal displaying a large artwork image with details and carousel navigation.
 */

import React from 'react'
import type { ArtworkCardProps } from './ArtworkCard'
import { X, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react'

/**
 * Props for the ArtworkDetailModal component.
 */
interface ArtworkDetailModalProps {
  /** Collection of artworks available in the carousel. */
  artworks: ArtworkCardProps[]
  /** Index of the currently active artwork. */
  activeIndex: number
  /** Called when the modal should be closed. */
  onClose: () => void
  /** Navigate to the previous artwork in the carousel. */
  onPrevious: () => void
  /** Navigate to the next artwork in the carousel. */
  onNext: () => void
}

/**
 * ArtworkDetailModal renders a large overlay with an artwork preview
 * and metadata to the right, plus carousel controls for browsing.
 */
export function ArtworkDetailModal({
  artworks,
  activeIndex,
  onClose,
  onPrevious,
  onNext,
}: ArtworkDetailModalProps) {
  const artwork = artworks[activeIndex]

  if (!artwork) return null

  /**
   * WhatsApp deep link with prefilled message including artwork details,
   * price (if available) and image URL.
   */
  const phoneNumber = '593984069709'
  const whatsappLines: string[] = [
    'Hola, estoy interesado/a en la siguiente obra:',
    '',
    `Título: ${artwork.title}`,
    `Artista: ${artwork.artist}`,
    `Detalles: ${artwork.year}${artwork.medium ? `, ${artwork.medium}` : ''}`,
  ]

  if (artwork.price) {
    whatsappLines.push(`Precio: ${artwork.price}`)
  }

  whatsappLines.push('', `Imagen: ${artwork.imageUrl}`)

  const whatsappMessage = whatsappLines.join('\n')
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    whatsappMessage,
  )}`

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6 sm:px-6"
      role="dialog"
      aria-modal="true"
      aria-label={`Detalle de ${artwork.title}`}
      onClick={onClose}
    >
      <div
        className="relative flex h-[90vh] w-[90vw] flex-col overflow-hidden rounded-lg bg-white shadow-xl sm:flex-row"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute right-3 top-3 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-700 shadow-sm hover:bg-white"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Image side */}
        <div className="relative flex-1 bg-neutral-100">
          <div className="h-full w-full">
            <img
              src={artwork.imageUrl}
              alt={artwork.title}
              className="h-full w-full object-contain p-4 sm:p-6"
            />
          </div>

          {/* Carousel controls over image on larger screens */}
          <div className="pointer-events-none absolute inset-y-1/2 left-0 right-0 flex -translate-y-1/2 items-center justify-between px-3 sm:px-4">
            <button
              type="button"
              onClick={onPrevious}
              aria-label="Anterior"
              className="pointer-events-auto inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-neutral-800 shadow-sm hover:bg-white"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={onNext}
              aria-label="Siguiente"
              className="pointer-events-auto inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-neutral-800 shadow-sm hover:bg-white"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Info side */}
        <aside className="flex w-full flex-col justify-between border-t border-neutral-200 p-4 text-sm text-neutral-800 sm:w-80 sm:border-l sm:border-t-0 sm:p-5">
          <div className="space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-neutral-500">
              Obra
            </p>
            <h2 className="text-base font-semibold text-neutral-900">
              {artwork.title}
            </h2>
            <p className="text-sm text-neutral-700">{artwork.artist}</p>
            <p className="text-xs text-neutral-600">{artwork.year}</p>
            {artwork.medium && (
              <p className="mt-2 text-xs text-neutral-700">
                {artwork.medium}
              </p>
            )}
            {artwork.price && (
              <p className="mt-2 text-sm font-semibold text-neutral-900">
                Precio: {artwork.price}
              </p>
            )}
          </div>

          <div className="mt-4 space-y-3 border-t border-neutral-200 pt-3 text-xs text-neutral-700">
            <p>Adquiere tu obra a través de Imaginar Casa de Arte.</p>
            <p className="font-medium text-neutral-900">
              Contacto: +593 984069709
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-3 py-1.5 text-xs font-medium text-white hover:bg-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              <MessageCircle className="mr-1.5 h-3.5 w-3.5" />
              Contactar por WhatsApp
            </a>

            <div className="flex items-center justify-between pt-1 text-[11px] text-neutral-500">
              <span>
                {activeIndex + 1} / {artworks.length}
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={onPrevious}
                  className="rounded-full border border-neutral-300 px-2 py-1 text-[11px] font-medium text-neutral-700 hover:border-neutral-500 hover:text-neutral-900"
                >
                  Anterior
                </button>
                <button
                  type="button"
                  onClick={onNext}
                  className="rounded-full border border-neutral-300 px-2 py-1 text-[11px] font-medium text-neutral-700 hover:border-neutral-500 hover:text-neutral-900"
                >
                  Siguiente
                </button>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
