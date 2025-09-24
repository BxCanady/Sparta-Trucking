<template>
  <div>
    <!-- Hero Section -->
    <div class="hero-container">
      <!-- Background Video (desktop/tablet) -->
      <video autoplay loop muted playsinline class="video-bg">
        <source src="https://storage.googleapis.com/bgsparta/bg3.mp4" />
        Your browser does not support the video tag.
      </video>

      <!-- Fallback image if JS is disabled -->
      <noscript>
        <img
          src="/images/back-up.png"
          alt="Sparta Trucking background"
          class="noscript-bg"
        />
      </noscript>

      <!-- Top Branding Section -->
      <div class="branding-bar">
        <div class="branding-left">
          <img src="/images/s2logo.png" alt="Company Logo" class="logo-img" />
          <h1 class="logo-text">"Reliable trucking. Exceptional service."</h1>
        </div>
      </div>

      <!-- Centered Hero Content -->
      <div class="hero-content">
        <h2 class="hero-heading">Fast & Reliable Trucking Solutions</h2>
        <button @click="navigateToQuote" class="hero-button">
          Contact Us Today
        </button>
      </div>
    </div>

    <!-- About Section -->
    <About />
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import About from "@/components/About.vue";
import { useHead } from "#imports";

const router = useRouter();
const navigateToQuote = () => {
  router.push("/contact-us");
};

useHead({
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        url: "https://www.spartatrucking.com/",
        name: "Sparta Trucking",
        alternateName: "Sparta Freight & Logistics",
        description:
          "MBE/DBE certified trucking and freight brokering company. Specializing in Reefer, Flatbed, Tankers, Oversize, and Waste Water Removal.",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://www.spartatrucking.com/search?q={query}",
          "query-input": "required name=query",
        },
      }),
    },
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Sparta Trucking",
        url: "https://www.spartatrucking.com/",
        logo: "https://www.spartatrucking.com/images/s2logo.png",
        image: "https://www.spartatrucking.com/og-cover.jpg",
        description:
          "Sparta Trucking is MBE/DBE certified, offering freight brokering and trucking services including Reefer, Flatbed, Tankers, Oversize hauling, and Waste Water Removal.",
        telephone: "+1-XXX-XXX-XXXX",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Your City",
          addressRegion: "NC",
          postalCode: "XXXXX",
          addressCountry: "US",
        },
        areaServed: "United States",
        makesOffer: [
          { "@type": "Service", name: "Reefer Hauling" },
          { "@type": "Service", name: "Flatbed Hauling" },
          { "@type": "Service", name: "Tanker Transport" },
          { "@type": "Service", name: "Oversize / Heavy Haul" },
          { "@type": "Service", name: "Waste Water Removal" },
          { "@type": "Service", name: "Freight Brokering" },
        ],
      }),
    },
  ],
});
</script>

<style>
.hero-container {
  position: relative;
  height: 100vh;
  overflow: hidden;
  font-family: "Arial", sans-serif;

  /* Desktop default: no background image (video shows).
     We'll enable the backup image on mobile in the media query below. */
  background: none;
}

/* Full-bleed video */
.video-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1; /* behind other content */
}

/* noscript fallback image styling */
.noscript-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

/* Branding */
.branding-bar {
  position: absolute;
  top: 0;
  left: 0;
  right: 200px;
  width: auto;
  padding: 12px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  color: white;
  z-index: 10;
}
.branding-left {
  display: flex;
  align-items: center;
  gap: 12px;
}
.logo-img {
  height: 150px;
  width: auto;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
}
.logo-text {
  font-weight: bold;
  color: #fafaf9;
  font-family: "Arial Black", sans-serif;
  font-size: 1.1em;
  margin: 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
}

/* Hero Content */
.hero-content {
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  z-index: 10;
  padding: 0 20px;
}
.hero-heading {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.6);
}
.hero-button,
.quote-button {
  background-color: #ff9307;
  color: white;
  font-weight: 600;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.hero-button:hover,
.quote-button:hover {
  background-color: #1e40af;
}

/* ---------- Mobile: use backup PNG instead of video ---------- */
@media (max-width: 768px) {
  /* Hide video on mobile */
  .video-bg {
    display: none;
  }
  /* Show backup image as hero background */
  .hero-container {
    background: url("/images/back-up.png") center center / cover no-repeat;
  }
  /* Tweak layout a bit for small screens */
  .branding-bar {
    right: 0;
    padding: 10px 14px;
  }
  .logo-img {
    height: 80px;
  }
  .hero-heading {
    font-size: 1.6rem;
  }
  .hero-content {
    top: 68%;
  }
}
</style>
