import Hero from '@/components/features/Hero';
import HomeStory from '@/components/features/HomeStory';
import Testimonials from '@/components/features/Testimonials';
import Stats from '@/components/features/Stats';
import Gallery from '@/components/features/Gallery';
import CTA from '@/components/features/CTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <HomeStory />
      <Stats />
      <Testimonials />
      <Gallery />
      <CTA />
    </main>
  );
}