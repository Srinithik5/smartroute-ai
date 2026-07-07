import { Nav } from './sections/Nav';
import { Hero } from './sections/Hero';
import { LogosStrip } from './sections/LogosStrip';
import { Features } from './sections/Features';
import { Workflow } from './sections/Workflow';
import { Stats } from './sections/Stats';
import { Testimonials } from './sections/Testimonials';
import { Faq } from './sections/Faq';
import { Cta } from './sections/Cta';
import { Footer } from './sections/Footer';

export default function LandingPage() {
  return (
    <div className="w-full">
      <Nav />
      <Hero />
      <LogosStrip />
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