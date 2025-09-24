<template>
  <section class="about-section">
    <div class="about-wrap">
      <div class="about-badge">MBE / DBE Certified</div>

      <!-- Company Logo -->
      <img
        src="/images/s2logo.png"
        alt="Sparta Trucking Logo"
        class="about-logo"
      />

      <h2 class="about-title">About Sparta Trucking</h2>

      <p class="about-text">
        Sparta Trucking delivers safe, reliable, and cost-effective freight solutions with
        a customer-first mindset. As a certified MBE/DBE carrier, we bring accountability,
        transparent communication, and on-time performance to every load.
      </p>

      <p class="about-text">
        In addition to our core trucking services, we also offer
        <span class="font-semibold text-white">Freight Brokering</span>,
        connecting shippers with trusted carriers to ensure seamless logistics
        solutions from start to finish.
      </p>

      <div class="about-specialties">
        <div class="pill">Reefer</div>
        <div class="pill">Flatbed</div>
        <div class="pill">Tankers</div>
        <div class="pill">Oversize</div>
        <div class="pill">Waste Water Removal</div>
        <div class="pill">Freight Brokering</div>
      </div>

      <div class="about-cta">
        <a
          href="https://www.spartatrucking.com"
          target="_blank"
          rel="noopener noreferrer"
          class="about-link"
        >
          www.spartatrucking.com
        </a>
        <router-link to="/quote" class="quote-button">Get a Quote</router-link>
      </div>

      <!-- Social Media Links -->
      <div class="social-links">
        <h3 class="about-title">Connect On</h3>

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
    </div>
  </section>
</template>

<style>
.about-section {
  position: relative;
  background: #0f172a;
  color: #ffffff;
  padding: 72px 24px;
  font-family: 'Arial', sans-serif;
}

.about-wrap {
  max-width: 1100px;
  margin: 0 auto;
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 32px;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(4px);
  text-align: center;
}

.about-badge {
  display: inline-block;
  font-weight: 800;
  letter-spacing: 0.5px;
  background: linear-gradient(90deg, #ff9307, #1e40af);
  color: #0f172a;
  padding: 8px 14px;
  border-radius: 999px;
  box-shadow: 1px 1px 4px rgba(0,0,0,0.25);
  margin-bottom: 16px;
}

.about-logo {
  height: 120px;
  width: auto;
  margin: 0 auto 20px auto;
  display: block;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
  border-radius: 12px;
  background: #fff;
  padding: 8px;
}

.about-title {
  font-size: 2rem;
  font-weight: bold;
  margin: 8px 0 16px 0;
  text-shadow: 2px 2px 6px rgba(0,0,0,0.6);
}

.about-text {
  font-size: 1.05rem;
  line-height: 1.7;
  color: #e5e7eb;
  margin-bottom: 20px;
}

.about-specialties {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-bottom: 28px;
}

.pill {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #fafafa;
  padding: 10px 14px;
  border-radius: 999px;
  font-weight: 600;
  box-shadow: 1px 1px 4px rgba(0,0,0,0.2);
}

.about-cta {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-top: 20px;
}

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
  text-decoration: none;
}

.quote-button:hover {
  background-color: #1e40af;
}

.about-link {
  color: #93c5fd;
  text-decoration: none;
  font-weight: 700;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.25);
}

.about-link:hover {
  text-decoration: underline;
}

/* Social Media Links Styling */
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
}

.social-icon svg {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: rgba(255, 147, 7, 0.2);
  box-shadow: 1px 1px 4px rgba(0,0,0,0.3);
  padding: 8px;
  transition: background-color 0.3s ease;
}

.social-icon:hover svg {
  background-color: #ff9307;
}

.social-label {
  margin-top: 6px;
  font-size: 0.85rem;
  color: #fff;
  font-weight: 600;
  text-align: center;
}

@media (max-width: 768px) {
  .about-title {
    font-size: 1.6rem;
  }
  .about-wrap {
    padding: 24px;
  }
}
</style>

<script setup>
</script>
