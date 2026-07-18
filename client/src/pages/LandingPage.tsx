import { LandingNav } from '@/components/landing/LandingNav';
import { Hero } from '@/components/landing/Hero';
import { TrustStrip } from '@/components/landing/TrustStrip';
import { Features } from '@/components/landing/Features';
import { Workflow } from '@/components/landing/Workflow';
import { Stats } from '@/components/landing/Stats';
import { Testimonials } from '@/components/landing/Testimonials';
import { Faq } from '@/components/landing/Faq';
import { Cta } from '@/components/landing/Cta';
import { Footer } from '@/components/landing/Footer';

export function LandingPage() {
  return (
    <div className="w-full">
      <LandingNav />
      <Hero />
      <TrustStrip />
      <Features />
      <Workflow />
      <Stats />
      <Testimonials />
      <Faq />
      <Cta />
      <Footer />
    </div>
  );
}