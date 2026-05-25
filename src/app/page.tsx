"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import PricingCardNine from '@/components/sections/pricing/PricingCardNine';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import { BarChart2, Globe, Lightbulb, Shield, ShieldCheck, ShoppingBag } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="compact"
        sizing="largeSmall"
        background="fluid"
        cardStyle="gradient-radial"
        primaryButtonStyle="flat"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        { name: "Home", id: "hero" },
        { name: "Affiliate Hub", id: "about" },
        { name: "Features", id: "features" },
        { name: "Pricing", id: "pricing" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="ADScookies.com"
      button={{ text: "Get Started", href: "#contact" }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardTestimonial
      background={{ variant: "gradient-bars" }}
      title="Maximize Shopify Conversions"
      description="Join the world’s fastest affiliate network. Get up to 30% recurring commission + global AI tracking. Trusted by 50k+ marketers on iOS, Android, Windows & Linux."
      testimonials={[
        { name: "Sarah J.", handle: "@sarah_marketer", testimonial: "Adscookies increased my conversions by 40% in just two months.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/positive-shaved-head-male-dressed-grey-suit-dark-grey-background_613910-11352.jpg" },
        { name: "Mark D.", handle: "@mark_shopify", testimonial: "The best tracking tool for Shopify. Truly global and reliable.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/successful-senior-businesswoman-eyeglasses_1262-5856.jpg" },
        { name: "Lisa T.", handle: "@lisa_sales", testimonial: "Seamless integration, excellent support, and highest commissions.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/cheerful-attractive-businesswoman-crossing-arms_1262-4724.jpg" },
        { name: "Tom B.", handle: "@tom_sales", testimonial: "Scaling my store has never been this easy with Adscookies.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/confident-middle-aged-businesswoman_74855-1573.jpg" },
        { name: "Anna P.", handle: "@anna_shop", testimonial: "Reliable data and high-quality affiliate insights.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/portrait-business-executive-using-digital-tablet_1170-1828.jpg" }
      ]}
      buttons={[{ text: "Claim Your Affiliate Deal", href: "#" }]}
      imageSrc="http://img.b2bpic.net/free-photo/tablet-with-graphics-blue-tones_1134-384.jpg"
      imageAlt="Shopify Marketing Dashboard"
      avatars={[
        { src: "http://img.b2bpic.net/free-photo/smiling-man-wearing-white-shirt_23-2152009541.jpg", alt: "Sarah J." },
        { src: "http://img.b2bpic.net/free-photo/happy-professional_1098-12931.jpg", alt: "Mark D." },
        { src: "http://img.b2bpic.net/free-photo/front-view-lawyer-portrait_23-2151202433.jpg", alt: "Lisa T." },
        { src: "http://img.b2bpic.net/free-photo/caucasian-man-blazer-sitting-desk-office-with-laptop-looking-camera_1098-20318.jpg", alt: "Tom B." },
        { src: "http://img.b2bpic.net/free-photo/confident-handsome-middle-aged-entrepreneur_1262-4871.jpg", alt: "Anna P." }
      ]}
      avatarText="Trusted by 50k+ marketers"
      marqueeItems={[
        { type: "text-icon", text: "Global Tracking", icon: Globe },
        { type: "text-icon", text: "AI Optimization", icon: Lightbulb },
        { type: "text-icon", text: "Secure Payments", icon: ShieldCheck },
        { type: "text-icon", text: "Shopify Integration", icon: ShoppingBag },
        { type: "text-icon", text: "Real-time Stats", icon: BarChart2 }
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="About Us"
      title="Leading Affiliate Marketing Platform"
      description="We provide the most robust suite of SEO-friendly tools for marketers operating on Shopify. Our platform is built for speed, transparency, and global reach."
      subdescription="Our mission is to help 50,000+ marketers scale across iOS, Android, and desktop ecosystems."
      icon={Shield}
      imageSrc="http://img.b2bpic.net/free-photo/global-air-travel-connectivity_23-2152005459.jpg"
      mediaAnimation="slide-up"
      imageAlt="Global connection map"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyOne
      useInvertedBackground={false}
      title="Engineered for Performance"
      description="Advanced tools to track, optimize, and convert traffic."
      accordionItems={[
        { id: "1", title: "Global AI Tracking", content: "Real-time insights powered by AI for accurate conversion monitoring across 10+ countries." },
        { id: "2", title: "SEO Friendly Tools", content: "Built-in audit tools to ensure your affiliate links maximize your search visibility." },
        { id: "3", title: "Multi-Platform Support", content: "Fully optimized for iOS, Android, Windows, and Linux environments." }
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/serp-search-engine-result-page-concept_107791-17768.jpg"
      mediaAnimation="slide-up"
      imageAlt="SEO search tool"
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="bento-grid"
      useInvertedBackground={false}
      metrics={[
        { id: "1", value: "50k+", description: "Active Marketers" },
        { id: "2", value: "30%", description: "Recurring Commission" },
        { id: "3", value: "10+", description: "Countries Supported" },
        { id: "4", value: "99.9%", description: "Uptime Guaranteed" }
      ]}
      title="Data That Drives Success"
      description="Transparent metrics to track your affiliate growth."
    />
  </div>

  <div id="socialProof" data-section="socialProof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={["Google", "Bing", "DuckDuckGo", "Shopify", "iOS", "Android", "Windows"]}
      title="Trusted Globally"
      description="Supporting high-performance marketers across all major channels."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardNine
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      plans={[
        { id: "basic", title: "Starter", price: "$0", period: "forever", features: ["Basic Tracking", "Email Support", "1 Affiliate Product"], button: { text: "Get Started" }, imageSrc: "http://img.b2bpic.net/free-photo/falling-binary-code_23-2152020924.jpg", imageAlt: "ai data tracking" },
        { id: "pro", title: "Professional", price: "$49", period: "/mo", features: ["Advanced AI Tracking", "SEO Audit Tools", "Unlimited Products"], button: { text: "Upgrade Now" }, imageSrc: "http://img.b2bpic.net/free-photo/tablet-with-graphics-blue-tones_1134-384.jpg", imageAlt: "ai data tracking" },
        { id: "enterprise", title: "Enterprise", price: "$199", period: "/mo", features: ["Dedicated Account Manager", "Priority Support", "API Access"], button: { text: "Contact Us" }, imageSrc: "http://img.b2bpic.net/free-photo/global-air-travel-connectivity_23-2152005459.jpg", imageAlt: "ai data tracking" }
      ]}
      title="Flexible Pricing Plans"
      description="Choose the perfect plan to grow your marketing business."
    />
  </div>

  <div id="testimonial" data-section="testimonial">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      testimonials={[
        { id: "1", name: "Sarah Johnson", role: "CEO", company: "TechCorp", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/cheerful-young-businesswoman-wearing-eyeglasses_1262-4761.jpg" },
        { id: "2", name: "Michael Chen", role: "CTO", company: "InnovateLab", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/portrait-business-woman-corporate-office-sitting-desk_482257-8055.jpg" },
        { id: "3", name: "Emily Rodriguez", role: "Marketing Director", company: "GrowthCo", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/factory-inspector-suit-monitoring-solar-panel-production-output_482257-125982.jpg" },
        { id: "4", name: "David Kim", role: "Product Manager", company: "StartupXYZ", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/happy-successful-businessman-posing-outside_74855-2004.jpg" },
        { id: "5", name: "Alex Smith", role: "Founder", company: "Agency.io", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/happy-executive-looking-information_1098-2091.jpg" }
      ]}
      title="Customer Stories"
      description="Success stories from our global community."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        { id: "1", title: "How do I get started?", content: "Sign up for a free account, connect your shopify store, and start sharing your unique affiliate links." },
        { id: "2", title: "Is it global?", content: "Yes, we support multi-country operations including US, UK, DE, FR, and many more." },
        { id: "3", title: "Can I use AI tracking?", content: "Our AI tracking comes built-in with every pro and enterprise plan to ensure accuracy." }
      ]}
      title="Frequently Asked Questions"
      description="Everything you need to know about scaling your affiliate revenue."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{ variant: "plain" }}
      tag="Get in touch"
      title="Ready to Start Earning?"
      description="Join thousands of successful affiliate marketers today. Your free trial is just one click away."
      imageSrc="http://img.b2bpic.net/free-photo/business-people-working-laptop_53876-20853.jpg"
      mediaAnimation="slide-up"
      imageAlt="Modern office workspace"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="ADScookies.com"
      columns={[
        { title: "Company", items: [{ label: "Privacy Policy", href: "#" }, { label: "Terms of Service", href: "#" }, { label: "GDPR & CCPA", href: "#" }] },
        { title: "Resources", items: [{ label: "iOS App", href: "#" }, { label: "Android App", href: "#" }, { label: "Windows/Linux", href: "#" }] }
      ]}
      copyrightText="© 2026 Adscookies.com — Global Affiliate Gateway. All trademarks reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
