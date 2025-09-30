<template>
  <main class="services-page">
    <header class="services-hero">
      <h1 class="services-title">Trucking & Freight Services</h1>
      <div class="linkbar">
        <nav class="services-nav" aria-label="Services">
          <a href="#reefer">Reefer</a>
          <a href="#flatbed">Flatbed</a>
          <a href="#tankers">Tankers</a>
          <a href="#oversize">Oversize</a>
          <a href="#land-clearing">Land Clearing</a>
          <a href="#freight-brokering">Freight Brokering</a>
        </nav>
      </div>
    </header>

    <section id="reefer" class="svc">
      <div class="svc-wrap">
        <h2 class="svc-title">Reefer Trucking</h2>
        <p class="svc-text">
          Temperature-controlled transport for perishable and sensitive goods
          with continuous monitoring and on-time delivery.
        </p>
        <NuxtLink to="/quote" class="svc-btn">Request Reefer Quote</NuxtLink>
      </div>
    </section>

    <section id="flatbed" class="svc alt">
      <div class="svc-wrap">
        <h2 class="svc-title">Flatbed Hauling</h2>
        <p class="svc-text">
          Secure transport for building materials, machinery, and irregular
          loads with proper tie-downs and routing.
        </p>
        <NuxtLink to="/quote" class="svc-btn">Request Flatbed Quote</NuxtLink>
      </div>
    </section>

    <section id="tankers" class="svc">
      <div class="svc-wrap">
        <h2 class="svc-title">Tanker Transport</h2>
        <p class="svc-text">
          Safe movement of liquids and bulk materials by certified operators
          following strict handling standards.
        </p>
        <NuxtLink to="/quote" class="svc-btn">Request Tanker Quote</NuxtLink>
      </div>
    </section>

    <section id="oversize" class="svc alt">
      <div class="svc-wrap">
        <h2 class="svc-title">Oversize / Heavy Haul</h2>
        <p class="svc-text">
          Specialized heavy and over-dimensional loads with permits, escorts,
          and route planning.
        </p>
        <NuxtLink to="/quote" class="svc-btn">Request Oversize Quote</NuxtLink>
      </div>
    </section>

    <section id="land-clearing" class="svc">
      <div class="svc-wrap">
        <h2 class="svc-title">Land Clearing</h2>
        <p class="svc-text">
          Professional land clearing services to prepare your site for
          construction, development, or agricultural use with efficiency and
          environmental responsibility.
        </p>
        <NuxtLink to="/quote" class="svc-btn">Request Service</NuxtLink>
      </div>
    </section>

    <section id="freight-brokering" class="svc alt">
      <div class="svc-wrap">
        <h2 class="svc-title">Freight Brokering</h2>
        <p class="svc-text">
          Licensed brokerage connecting shippers with vetted carriers for
          flexible capacity and end-to-end coordination.
        </p>
        <NuxtLink to="/quote" class="svc-btn"
          >Start a Brokerage Request</NuxtLink
        >
      </div>
    </section>
  </main>
</template>

<script setup>
import { useHead } from "#imports";

useHead({
  title: "Services | Sparta Trucking",
  meta: [
    {
      name: "description",
      content:
        "MBE/DBE certified trucking and freight brokering: Reefer, Flatbed, Tankers, Oversize, Waste Water Removal.",
    },
    {
      property: "og:title",
      content: "Trucking & Freight Services — Sparta Trucking",
    },
    {
      property: "og:description",
      content:
        "Reefer, Flatbed, Tankers, Oversize, Waste Water Removal, and Freight Brokering.",
    },
    { property: "og:type", content: "website" },
  ],
  link: [{ rel: "canonical", href: "https://www.spartatrucking.com/services" }],
});
</script>

<style>
html {
  scroll-behavior: smooth;
}

.services-page {
  background: #f8fafc;
  font-family: Arial, sans-serif;
  color: #0f172a;
}

.services-hero {
  max-width: 1100px;
  margin: 0 auto;
  padding: 48px 24px 8px;
  text-align: center;
}

.services-title {
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 16px;
  color: #0f172a;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.06);
}

.linkbar {
  position: sticky;
  top: 0;
  z-index: 50;
  background: #f8fafc;
  border-bottom: 1px solid rgba(15, 23, 42, 0.1);
  padding: 10px 16px;
}

.services-nav {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  justify-content: center;
}

.services-nav a {
  color: #1e293b;
  font-weight: 600;
  text-decoration: none;
  position: relative;
  padding: 6px 4px;
  transition: color 0.2s ease;
}

/* hover underline effect */
.services-nav a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -3px;
  width: 0%;
  height: 2px;
  background: #1e40af;
  transition: width 0.25s ease;
}

.services-nav a:hover,
.services-nav a:focus-visible {
  color: #ff9307;
}

.services-nav a:hover::after,
.services-nav a:focus-visible::after {
  width: 100%;
}

.svc {
  padding: 56px 24px;
  scroll-margin-top: 80px;
}

.svc.alt {
  background: #eef2f7;
}

.svc-wrap {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.svc-title {
  font-size: 1.8rem;
  font-weight: 800;
  margin-bottom: 10px;
  color: #111827;
}

.svc-text {
  font-size: 1.08rem;
  color: #374151;
  margin: 0 auto 22px;
  line-height: 1.7;
  max-width: 800px;
}

.svc-btn {
  background-color: #ff9307;
  color: #fff;
  font-weight: 600;
  padding: 12px 24px;
  border-radius: 6px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

.svc-btn:hover {
  background-color: #ff9307;
}

@media (max-width: 768px) {
  .services-title {
    font-size: 1.8rem;
  }
  .svc-title {
    font-size: 1.5rem;
  }
  .linkbar {
    padding: 8px 12px;
  }
}
</style>
