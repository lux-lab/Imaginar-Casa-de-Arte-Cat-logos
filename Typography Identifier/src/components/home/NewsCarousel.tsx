/**
 * @file NewsCarousel.tsx
 * @description Editorial-style image carousel for studio news, with straight-edged images (no rounded corners),
 * text on the left and image on the right, and automatic slide changes every 7 seconds.
 */

import React, { useEffect, useState } from 'react'

/**
 * Slide definition for the news carousel.
 */
interface NewsSlide {
  /** Short label or category for the slide. */
  tag: string
  /** Main title text. */
  title: string
  /** Supporting description. */
  description: string
  /** Image URL shown on the visual side of the carousel. */
  imageUrl: string
}

/**
 * NewsCarousel component renders a minimal carousel for studio highlights,
 * ensuring all images have straight edges and the layout shows text on the left
 * and the image on the right. The carousel auto-advances every 7 seconds.
 */
export function NewsCarousel() {
  const slides: NewsSlide[] = [
    {
      tag: 'Studio',
      title: 'Imaginar Casa de Arte · Taller y galería',
      description:
        'Espacio dedicado a la obra contemporánea y al enmarcado especializado para artistas, galerías y coleccionistas.',
      imageUrl:
        'https://pub-cdn.sider.ai/u/U03VHXYV6Y/web-coder/6894d831d30e3e771cc5c90d/resource/0b53eeab-1fb6-4bb0-83c3-84682aeb8682.png',
    },
    {
      tag: 'Exhibición',
      title: 'Lux Monsalve · Nuevas piezas en colección',
      description:
        'Esculturas y obras en papel que exploran la relación entre cuerpo, paisaje y materia, disponibles a través de Imaginar Casa de Arte.',
      imageUrl:
        'https://pub-cdn.sider.ai/u/U03VHXYV6Y/web-coder/6894d831d30e3e771cc5c90d/resource/5c6c76e5-9ee4-4626-8ce8-869aea4f86a5.png',
    },
    {
      tag: 'Servicio',
      title: 'Enmarcado a medida para artistas y galerías',
      description:
        'Asesoría personalizada en materiales, conservación y montaje para realzar cada pieza en su contexto expositivo.',
      imageUrl:
        'https://pub-cdn.sider.ai/u/U03VHXYV6Y/web-coder/6894d831d30e3e771cc5c90d/resource/0aac7fa6-442a-40d8-b257-be6922f308bb.png',
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  /**
   * Move to the previous slide, looping from first to last.
   */
  const goPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? slides.length - 1 : current - 1,
    )
  }

  /**
   * Move to the next slide, looping from last to first.
   */
  const goNext = () => {
    setActiveIndex((current) =>
      current === slides.length - 1 ? 0 : current + 1,
    )
  }

  /**
   * Automatically advance the carousel every 7 seconds.
   */
  useEffect(() => {
    const AUTO_ADVANCE_MS = 7000

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) =>
        current === slides.length - 1 ? 0 : current + 1,
      )
    }, AUTO_ADVANCE_MS)

    return () => {
      window.clearInterval(intervalId)
    }
  }, [slides.length])

  const activeSlide = slides[activeIndex]

  return (
    <section className="border-b border-neutral-200 pb-6 pt-4">
      <div className="mb-3 flex items-center justify-between text-xs text-neutral-600">
        <span className="font-medium uppercase tracking-[0.22em] text-neutral-500">
          Noticias
        </span>
        <span>
          {String(activeIndex + 1).padStart(2, '0')} /{' '}
          {String(slides.length).padStart(2, '0')}
        </span>
      </div>

      <div className="grid items-stretch gap-5 sm:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)]">
        {/* Text side (left) */}
        <div className="flex flex-col justify-between text-sm text-neutral-800">
          <div className="space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-neutral-500">
              {activeSlide.tag}
            </p>
            <h2 className="text-base font-medium text-neutral-900">
              {activeSlide.title}
            </h2>
            <p className="text-xs leading-relaxed text-neutral-700">
              {activeSlide.description}
            </p>
          </div>

          <div className="mt-4 flex items-center justify-between text-[11px] text-neutral-600">
            <div className="flex items-center gap-1.5">
              {slides.map((_, index) => (
                <span
                  key={index}
                  className={
                    'h-[2px] w-5 bg-neutral-300 transition-colors' +
                    (index === activeIndex ? ' bg-neutral-900' : '')
                  }
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={goPrevious}
                className="border border-neutral-300 px-2 py-1 text-[11px] font-medium text-neutral-700 hover:border-neutral-500 hover:text-neutral-900"
              >
                Anterior
              </button>
              <button
                type="button"
                onClick={goNext}
                className="border border-neutral-300 px-2 py-1 text-[11px] font-medium text-neutral-700 hover:border-neutral-500 hover:text-neutral-900"
              >
                Siguiente
              </button>
            </div>
          </div>
        </div>

        {/* Image side (right) – no rounded classes applied */}
        <div className="relative h-52 bg-neutral-100 sm:h-60 md:h-72">
          <img
            src={activeSlide.imageUrl}
            alt={activeSlide.title}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
