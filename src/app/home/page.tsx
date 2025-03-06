'use client';

import Hero from '@/components/features/Hero';
import Features from '@/components/features/Features';
import Stats from '@/components/features/Stats';
import Testimonials from '@/components/features/Testimonials';
import Gallery from '@/components/features/Gallery';
import BlogGrid from '@/components/features/BlogGrid';
import CTA from '@/components/features/CTA';

export default function HomePage() {
  return (
    <main className="bg-white">
      <Hero />
      <div className="relative z-10">
        <Features />
        <Stats />
        <Gallery />
        <Testimonials />
        <BlogGrid />
        <CTA />
      </div>
    </main>
  );
} 