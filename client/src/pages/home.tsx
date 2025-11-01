import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import AudienceSection from "@/components/audience-section";
import GallerySection from "@/components/gallery-section";
import BlogSection from "@/components/blog-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import { SectionTransition, FadeInWhenVisible } from "@/components/page-transition";

export default function Home() {
  // Handle URL hash scrolling on page load
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            const navHeight = 80;
            const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
            const targetPosition = elementTop - navHeight;
            
            window.scrollTo({
              top: targetPosition,
              behavior: "smooth"
            });
          }
        }, 200); // Reduced delay for faster response
      }
    };

    handleHashScroll();
    window.addEventListener('hashchange', handleHashScroll);
    
    return () => window.removeEventListener('hashchange', handleHashScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <SectionTransition>
        <HeroSection />
      </SectionTransition>
      <FadeInWhenVisible>
        <AboutSection />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <GallerySection />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <AudienceSection />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <BlogSection />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <ContactSection />
      </FadeInWhenVisible>
      <Footer />
    </div>
  );
}
