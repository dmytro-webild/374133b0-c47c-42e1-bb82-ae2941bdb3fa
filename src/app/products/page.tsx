"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import ProductCardOne from '@/components/sections/product/ProductCardOne';

export default function ProductsPage() {
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
              { name: "Home", id: "/" },
              { name: "Affiliate Hub", id: "/" },
              { name: "Features", id: "/" },
              { name: "Pricing", id: "/" },
              { name: "Products", id: "/products" },
              { name: "Contact", id: "/" },
            ]}
            brandName="ADScookies.com"
            button={{ text: "Get Started", href: "/#contact" }}
          />
        </div>
        
        <div id="products" data-section="product">
          <ProductCardOne 
            title="Available Products"
            description="Explore our premium selection of affiliate marketing tools."
            gridVariant="four-items-2x2-equal-grid"
            animationType="slide-up"
            textboxLayout="default"
            products={[
              { id: "1", name: "Basic Affiliate Plan", price: "Free", imageSrc: "http://img.b2bpic.net/free-photo/tablet-with-graphics-blue-tones_1134-384.jpg" },
              { id: "2", name: "Pro Tracking Engine", price: "$49/mo", imageSrc: "http://img.b2bpic.net/free-photo/tablet-with-graphics-blue-tones_1134-384.jpg" },
              { id: "3", name: "Global SEO Tool", price: "$99/mo", imageSrc: "http://img.b2bpic.net/free-photo/serp-search-engine-result-page-concept_107791-17768.jpg" },
              { id: "4", name: "Enterprise Data API", price: "$299/mo", imageSrc: "http://img.b2bpic.net/free-photo/falling-binary-code_23-2152020924.jpg" }
            ]}
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