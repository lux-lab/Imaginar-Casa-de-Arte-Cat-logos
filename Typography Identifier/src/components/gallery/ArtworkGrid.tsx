/**
 * @file ArtworkGrid.tsx
 * @description Responsive grid for displaying a curated selection of artworks in a marketplace-style layout,
 * with a fullscreen modal carousel for viewing details.
 */

import React, { useState } from 'react'
import { ArtworkCard, type ArtworkCardProps } from './ArtworkCard'
import { ArtworkDetailModal } from './ArtworkDetailModal'

/**
 * ArtworkGrid component renders a responsive grid of artwork cards, and
 * manages a modal carousel to show each piece in larger format with details.
 */
export function ArtworkGrid() {
  const artworks: ArtworkCardProps[] = [
    {
      title: 'Ceiba',
      artist: 'Lux Monsalve/ 2025',
      year: '90cm x 3cm',
      medium: 'Aluminio fundido',
      price: '200$',
      imageUrl:
        'https://pub-cdn.sider.ai/u/U03VHXYV6Y/web-coder/6894d831d30e3e771cc5c90d/resource/05cbcf57-5b3d-49bf-a777-b6328807baaf.jpg',
    },
    {
      title: 'Flor de Agave',
      artist: 'Lux Monsalve/ 2025',
      year: '170cm x 240cm',
      medium: 'Papel de agava, acero',
      price: '1500$',
      imageUrl:
        'https://pub-cdn.sider.ai/u/U03VHXYV6Y/web-coder/6894d831d30e3e771cc5c90d/resource/167158e3-ff87-4511-901a-afa471b4f82b.png',
    },
    {
      title: 'Priapo',
      artist: 'Lux Monsalve/ 2025',
      year: '120cm x 170cm',
      medium: 'Carbon, seniza, fragmentos del paisaje y acero',
      price: '800$',
      imageUrl:
        'https://pub-cdn.sider.ai/u/U03VHXYV6Y/web-coder/6894d831d30e3e771cc5c90d/resource/6c219ca6-71dd-4e10-8e89-3dcfa527b3d4.jpg',
    },
    {
      title: 'Cáliz',
      artist: 'Lux Monsalve/ 2025',
      year: '15cm x 33cm',
      medium: 'Acero forjado',
      price: '300$',
      imageUrl:
        'https://pub-cdn.sider.ai/u/U03VHXYV6Y/web-coder/6894d831d30e3e771cc5c90d/resource/69517978-d586-472d-82cd-da07cc6b4188.jpg',
    },
    {
      title: 'Púas',
      artist: 'Lux Monsalve/ 2025',
      year: '200cm x 100cm',
      medium: 'Impresión digital, fotogrametría',
      price: '1200$',
      imageUrl:
        'https://pub-cdn.sider.ai/u/U03VHXYV6Y/web-coder/6894d831d30e3e771cc5c90d/resource/b93c66de-97bc-45cb-bbb3-c6fb40b32a28.jpg',
    },
    {
      title: 'Cartografía Divina',
      artist: 'Lux Monsalve/ 2025',
      year: '70cm x 40cm',
      medium: 'Carbon, seniza, fragmentos del paisaje y acero',
      price: '380$',
      imageUrl:
        'https://pub-cdn.sider.ai/u/U03VHXYV6Y/web-coder/6894d831d30e3e771cc5c90d/resource/00c73ae2-2785-4abc-9d08-cc83707b59d5.png',
    },
  ]

  /** Index of the artwork currently open in the modal; null when closed. */
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  /**
   * Opens the detail modal at the given artwork index.
   */
  const handleOpen = (index: number) => {
    setActiveIndex(index)
  }

  /**
   * Closes the detail modal.
   */
  const handleClose = () => {
    setActiveIndex(null)
  }

  /**
   * Moves to the previous artwork in the carousel.
   */
  const handlePrevious = () => {
    if (activeIndex === null) return
    setActiveIndex(activeIndex === 0 ? artworks.length - 1 : activeIndex - 1)
  }

  /**
   * Moves to the next artwork in the carousel.
   */
  const handleNext = () => {
    if (activeIndex === null) return
    setActiveIndex(activeIndex === artworks.length - 1 ? 0 : activeIndex + 1)
  }

  return (
    <section className="space-y-4">
      <header className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-base font-medium text-neutral-900">
            Obras de la colección y curaduría de Imaginar Casa de Arte
          </h2>
          <p className="mt-0.5 text-xs text-neutral-600">
            Adquiere tu obra a través de Imaginar Casa de Arte
          </p>
        </div>
        <div className="flex items-center gap-4 text-xs text-neutral-600">
          <button className="underline-offset-4 hover:underline">
            Sort: Featured
          </button>
          <button className="underline-offset-4 hover:underline">Filter</button>
        </div>
      </header>

      <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {artworks.map((artwork, index) => (
          <ArtworkCard
            key={artwork.title}
            {...artwork}
            onClick={() => handleOpen(index)}
          />
        ))}
      </div>

      {activeIndex !== null && (
        <ArtworkDetailModal
          artworks={artworks}
          activeIndex={activeIndex}
          onClose={handleClose}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      )}
    </section>
  )
}
