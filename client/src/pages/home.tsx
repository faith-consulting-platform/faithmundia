import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ClientTypesSection from "@/components/client-types-section";
import ExpertiseSection from "@/components/expertise-section";
import PackagesSection from "@/components/packages-section";
import SocialProofSection from "@/components/social-proof-section";
import ContactFormSection from "@/components/contact-form-section";
import Footer from "@/components/footer";

export default function Home() {
  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId || '');
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="font-inter bg-background text-foreground antialiased">
      <Navigation />
      <HeroSection />
      <ClientTypesSection />
      <ExpertiseSection />
      <PackagesSection />
      <SocialProofSection />
      <ContactFormSection />
      <Footer />
    </div>
  );
}
