import Hero from '@/components/Hero';
import JourneySteps from '@/components/JourneySteps';
import TypeCards from '@/components/TypeCards';
import Community from '@/components/Community';
import PricingPlans from '@/components/PricingPlans';
import TypeDetail from '@/components/TypeDetail';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <JourneySteps />
      <Community />
      <TypeCards />
      <PricingPlans />
      <TypeDetail />
      <Footer />
    </>
  );
}
