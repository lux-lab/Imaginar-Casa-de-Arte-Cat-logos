/**
 * @file Home.tsx
 * @description Gallery-inspired home page with marketplace hero, artwork grid, news carousel, and studio about section.
 */

import React from 'react'
import { PageShell } from '../components/layout/PageShell'
import { TopBar } from '../components/layout/TopBar'
import { ArtworkGrid } from '../components/gallery/ArtworkGrid'
import { NewsCarousel } from '../components/home/NewsCarousel'

/**
 * HeroSection component renders the main headline and introduction, inspired by gallery marketplaces.
 */
function HeroSection() {
  return (
    <section className="border-b border-neutral-200 pb-8 pt-8 sm:pt-10">
      <div className="grid gap-8 sm:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)]">
        <div className="space-y-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-neutral-500">
            Imaginar Casa de Arte
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            Colecciona obra de artistas emergentes en Ecuador 
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-neutral-700">
           Inefable: Lux Monsalve obra dispoible.
          </p>
        </div>
        <div className="space-y-2 text-xs text-neutral-600">
          <p className="font-medium text-neutral-800">Imaginar Casa de Arte</p>
          <p>
            Taller de enmarcado especializado en marcos prsonalizados para artistas, galerías y coleccionistas privados.
          </p>
          <p>Ecuador</p>
        </div>
      </div>
    </section>
  )
}

/**
 * AboutSection component presents the studio "About us" information in a clean editorial block.
 */
function AboutSection() {
  return (
    <section className="mt-10 border-t border-neutral-200 pt-8">
      <article className="max-w-3xl space-y-3">
        <header>
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-neutral-500">
            Studio information
          </p>
          <h2 className="mt-1 text-base font-medium text-neutral-900"> Imaginar Casa de Arte</h2>
        </header>
        <div className="space-y-3 text-sm leading-relaxed text-neutral-700">
          <p>
            
          </p>
          <p>
            Taller de enmarcado especializado en marcos prsonalizados para artistas, galerías y coleccionistas privados.
          </p>
        </div>
      </article>
    </section>
  )
}

/**
 * HomePage component composes the layout, top bar, news carousel, hero, artwork grid, and about section.
 */
export default function HomePage() {
  return (
    <PageShell>
      <TopBar />
      <main className="pb-16">
        <NewsCarousel />
        <HeroSection />
        <div className="mt-8">
          <ArtworkGrid />
        </div>
        <AboutSection />
      </main>
    </PageShell>
  )
}
