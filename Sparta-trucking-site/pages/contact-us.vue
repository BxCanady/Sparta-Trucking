<template>
  <main class="contact">
    <section class="hero">
      <img src="/images/s2logo.png" alt="Sparta Trucking Logo" class="logo" />
      <h1>Contact Sparta Trucking</h1>
      <p>MBE/DBE Certified · Reefer · Flatbed · Tankers · Oversize · Waste Water Removal</p>
    </section>

    <section class="cards">
      <article class="card">
        <h2>Admin Department</h2>
        <ul class="list">
          <li><a href="tel:18884266023">Office: 888-426-6023 x 1</a></li>
          <li><a href="tel:19855174322">Cell: 985-517-4322</a></li>
          <li><a href="tel:14046606991">Cell: 404-660-6991</a></li>
          <li><a href="mailto:office@spartatrucking.com">office@spartatrucking.com</a></li>
          <li>Hours: Mon–Fri, 9:00 AM–5:00 PM CST</li>
        </ul>
        <div class="actions">
          <a class="btn primary" href="tel:18884266023">Call Admin</a>
          <a class="btn" href="mailto:office@spartatrucking.com">Email Admin</a>
        </div>
      </article>

      <article class="card">
        <h2>Dispatch</h2>
        <ul class="list">
          <li><a href="tel:18884266023">Direct Line: 888-426-6023 x 2</a></li>
          <li><a href="mailto:dispatch@spartatrucking.com">dispatch@spartatrucking.com</a></li>
          <li>After-Hours Support Available</li>
        </ul>
        <div class="actions">
          <NuxtLink class="btn" to="/quote">Request a Load Quote</NuxtLink>
          <a class="btn" href="mailto:dispatch@spartatrucking.com">Email Dispatch</a>
        </div>
      </article>

      <article class="card">
        <h2>Sales & Brokerage</h2>
        <ul class="list">
          <li><a href="tel:18884266023">Sales: 888-426-6023 x 3</a></li>
          <li><a href="mailto:sales@spartatrucking.com">sales@spartatrucking.com</a></li>
          <li>Capacity Planning • Carrier Vetting • Contract Rates</li>
        </ul>
        <div class="actions">
          <NuxtLink class="btn" to="/services">View Services</NuxtLink>
          <NuxtLink class="btn" to="/quote">Start a Brokerage Request</NuxtLink>
        </div>
      </article>

      <article class="card">
        <h2>Compliance & Certifications</h2>
        <ul class="list">
          <li>MBE/DBE Certified</li>
          <li>Safety-First Operations</li>
          <li>Temperature-Controlled, Flatbed, Tanker, Oversize, Waste Water</li>
        </ul>
        <div class="badges">
          <span class="badge">MBE</span>
          <span class="badge">DBE</span>
          <span class="badge">Insured</span>
        </div>
      </article>
    </section>

    <!-- Social Media Links Section -->
    <section class="social-links-section">
     
      <div class="social-links">
        <h2>Connect With Us</h2>
        <a
          href="https://www.facebook.com/share/1773jPWjxd/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          class="social-icon"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#4267B2" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-3v-3h3v-2c0-3 1.8-5 4.5-5 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 1-2 2v2h3l-.5 3h-2.5v7A10 10 0 0 0 22 12"/>
          </svg>
          <span class="social-label">Facebook</span>
        </a>

        <a
          href="https://www.linkedin.com/in/quintin-galloway-675b922b9"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          class="social-icon"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#0077B5" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4.98 3a2.5 2.5 0 1 1 0 5A2.5 2.5 0 0 1 4.98 3zM2 8.66h6v12H2zM17.93 8.66a3.48 3.48 0 0 0-2.14.7v-.7h-6v12h6v-6.6a3.47 3.47 0 0 1 2.14-2c.7 0 1.4.43 1.4 1.5v7.1h6v-7.7c0-3.63-1.8-5.12-4.8-5.12z"/>
          </svg>
          <span class="social-label">LinkedIn</span>
        </a>
      </div>
    </section>

    <section class="cta">
      <div class="cta-wrap">
        <h3>Ready to move your freight?</h3>
        <p>Tell us about your load and timeline. We’ll get back to you fast.</p>
        <NuxtLink class="btn lg primary" to="/quote">Request a Quote</NuxtLink>
      </div>
    </section>

    <section class="quote-block">
      <blockquote>“Be not afraid of growing slowly; be afraid only of standing still.”</blockquote>
    </section>
  </main>
</template>

<script setup>
import { useHead } from '#imports'

useHead({
  title: 'Contact Us | Sparta Trucking',
  meta: [
    { name: 'description', content: 'Contact Sparta Trucking Admin, Dispatch, and Sales. MBE/DBE certified carrier specializing in Reefer, Flatbed, Tankers, Oversize, and Waste Water Removal.' },
    { property: 'og:title', content: 'Contact Sparta Trucking' },
    { property: 'og:description', content: 'Admin: 888-426-6023 x1 · Dispatch: 888-426-6023 x2 · Sales: 888-426-6023 x3 · office@spartatrucking.com' },
    { property: 'og:type', content: 'website' }
  ],
  link: [{ rel: 'canonical', href: 'https://www.spartatrucking.com/contact-us' }]
})
</script>

<style scoped>
.contact {
  background: #f8fafc;
  color: #0f172a;
  min-height: 100%;
}
.hero {
  max-width: 980px;
  margin: 0 auto;
  padding: 48px 16px 16px;
  text-align: center;
}
.logo {
  width: 200px;
  height: auto;
  margin: 0 auto 12px;
  display: block;
}
.hero h1 {
  font-size: 2.2rem;
  font-weight: 800;
  margin: 6px 0 8px;
}
.hero p {
  color: #334155;
  font-weight: 600;
}

.cards {
  max-width: 1100px;
  margin: 16px auto 24px;
  padding: 0 16px;
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(12, 1fr);
}
.card {
  grid-column: span 6;
  background: #ffffff;
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 14px;
  padding: 20px;
  box-shadow: 0 6px 20px rgba(2, 6, 23, 0.06);
  display: grid;
  gap: 12px;
}
.card h2 {
  font-size: 1.25rem;
  font-weight: 800;
  margin: 0 0 4px;
}
.list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 8px;
}
.list a {
  color: #1e40af;
  text-decoration: none;
  font-weight: 600;
}
.list a:hover {
  text-decoration: underline;
}
.badges {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.badge {
  background: #ff9307;
  color: #fff;
  font-weight: 700;
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 0.85rem;
  box-shadow: 0 2px 6px rgba(0,0,0,0.12);
}
.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
}
.btn {
  appearance: none;
  background: #0f172a;
  color: #fff;
  text-decoration: none;
  padding: 10px 14px;
  border-radius: 10px;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform .08s ease, filter .2s ease, background-color .2s ease;
}
.btn:hover {
  filter: brightness(1.05);
  transform: translateY(-1px);
}
.btn.primary {
  background: #ff9307;
}
.btn.lg {
  padding: 12px 18px;
}

.social-links {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.social-links .about-title {
  margin-bottom: 12px;
}

.social-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60px;
  text-decoration: none;
  cursor: pointer;
  color: inherit;
}

/* Social icon SVG styling */
.social-icon svg {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: rgba(255, 147, 7, 0.2);
  box-shadow: 1px 1px 4px rgba(0,0,0,0.3);
  padding: 8px;
  transition: background-color 0.3s ease;
}

/* Background color on hover */
.social-icon:hover svg {
  background-color: #ff9307;
}

/* Label styling with underline on hover */
.social-label {
  margin-top: 6px;
  font-size: 0.85rem;
  color: #fff;
  font-weight: 600;
  text-align: center;
  transition: text-decoration 0.2s ease;
}

/* Add underline to label and link on hover */
.social-icon:hover,
.social-icon:hover .social-label {
  text-decoration: underline;
  color: #ff9307; /* Optional highlight color matching brand */
}

@media (max-width: 768px) {
  .about-title {
    font-size: 1.6rem;
  }
  .about-wrap {
    padding: 24px;
  }
}

.cta {
  background: linear-gradient(135deg, rgba(179,0,0,0.95), #b30000 60%, #ff9307 120%);
  padding: 36px 16px;
  color: #fff;
}
.cta-wrap {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}
.cta-wrap h3 {
  font-size: 1.6rem;
  font-weight: 800;
  margin-bottom: 6px;
}
.cta-wrap p {
  opacity: 0.95;
  margin-bottom: 14px;
}

.quote-block {
  padding: 28px 16px 56px;
  text-align: center;
}
.quote-block blockquote {
  font-size: 1.2rem;
  font-weight: 700;
  color: #0f172a;
  background: #fff;
  display: inline-block;
  padding: 16px 20px;
  border-left: 6px solid #ff9307;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(2,6,23,0.06);
}

@media (max-width: 980px) {
  .card { grid-column: span 12; }
}
</style>
