<template>
  <nav class="navbar" role="navigation" aria-label="Main Navigation">
    <div class="logo">
      <h1 class="logo-text">SPARTA TRUCKING LLC</h1>
    </div>

    <button
      class="hamburger"
      @click="toggleMenu"
      :aria-expanded="isMenuOpen.toString()"
      aria-controls="primary-nav"
      aria-label="Toggle navigation menu"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>

    <ul id="primary-nav" :class="['nav-links', { active: isMenuOpen }]">
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/services">Services</NuxtLink></li>

      <!-- Client Forms dropdown -->
      <li
        class="dropdown"
        @click.stop="toggleForms"
        @keyup.enter.stop="toggleForms"
      >
        <span
          class="dropdown-toggle"
          role="button"
          tabindex="0"
          :aria-expanded="isFormsOpen.toString()"
          aria-haspopup="true"
        >
          Client Forms
        </span>
        <ul class="dropdown-menu" :class="{ open: isFormsOpen }" @click.stop>
         
          <li>
            <a href="/coi.pdf" target="_blank" rel="noopener" class="download-link">
              Download Certificate of Insurance (COI)
            </a>
          </li>
          <li>
            <a href="/credit-form.pdf" target="_blank" rel="noopener" class="download-link">
              Download Credit Form
            </a>
          </li>
        </ul>
      </li>

      <!-- Capability Statement dropdown (single PDF) -->
      <li
        class="dropdown"
        @click.stop="toggleCap"
        @keyup.enter.stop="toggleCap"
      >
        <span
          class="dropdown-toggle"
          role="button"
          tabindex="0"
          :aria-expanded="isCapOpen.toString()"
          aria-haspopup="true"
        >
          Capability Statement
        </span>
        <ul class="dropdown-menu" :class="{ open: isCapOpen }" @click.stop>
         
          <li>
            <a
              href="/Sparta-Capability-Statement.pdf"
              target="_blank"
              rel="noopener"
              class="download-link"
              download
            >
              Download Capability Statement (PDF)
            </a>
          </li>
        </ul>
      </li>

      <li><NuxtLink to="/contact-us">Contact Us</NuxtLink></li>

      <li class="cta-button">
        <NuxtLink to="/quote" class="button">Get an Online Quote</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isMenuOpen: false,
      isFormsOpen: false,
      isCapOpen: false
    }
  },
  mounted() {
    document.addEventListener('click', this.handleOutsideClick)
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleOutsideClick)
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
      if (!this.isMenuOpen) {
        this.isFormsOpen = false
        this.isCapOpen = false
      }
    },
    toggleForms() {
      if (window.matchMedia('(max-width: 768px)').matches) {
        this.isFormsOpen = !this.isFormsOpen
        if (this.isFormsOpen) this.isCapOpen = false
      }
    },
    toggleCap() {
      if (window.matchMedia('(max-width: 768px)').matches) {
        this.isCapOpen = !this.isCapOpen
        if (this.isCapOpen) this.isFormsOpen = false
      }
    },
    handleOutsideClick(e) {
      const nav = this.$el
      if (!nav.contains(e.target)) {
        this.isMenuOpen = false
        this.isFormsOpen = false
        this.isCapOpen = false
      }
    }
  }
}
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f4e1d2;
  padding: 10px 20px;
  font-family: Arial, sans-serif;
  box-shadow: 0 6px 18px rgba(0,0,0,0.08);
}

.logo-text {
  font-weight: bold;
  color: #ff9307;
  font-family: 'Arial Black', sans-serif;
  font-size: 1.2em;
  margin: 0;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
}

/* Hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 4px;
  background: transparent;
  border: 0;
  padding: 6px;
}
.hamburger span {
  width: 25px;
  height: 3px;
  background-color: #4b2e2e;
  display: block;
}

/* Links */
.nav-links {
  list-style: none;
  display: flex;
  gap: 15px;
  margin: 0;
  padding: 0;
  align-items: center;
}

.nav-links li a,
.dropdown-toggle {
  text-decoration: none;
  color: #ff9307;
  font-weight: 600;
  font-family: Arial, sans-serif;
  cursor: pointer;
}
.nav-links li a:hover,
.dropdown-toggle:hover {
  color: #ffffff;
}

/* Dropdown */
.dropdown {
  position: relative;
  user-select: none;
}
.dropdown-toggle {
  display: inline-block;
  padding: 6px 0;
}

/* Base dropdown panel (mobile default = closed; desktop uses fade w/ hide delay) */
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: rgba(128, 128, 128, 0.7);
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  list-style: none;
  padding: 10px 12px;
  margin: 6px 0 0 0;
  z-index: 1000;
  border-radius: 6px;
  min-width: 260px;

  /* For desktop fade + delay: start hidden */
  opacity: 0;
  visibility: hidden;
  pointer-events: none;

  /* Transition with HIDE delay only (visibility waits 1.2s to hide) */
  transition:
    opacity .25s ease,
    visibility 0s linear 2.2s;
}

.dropdown-menu li { padding: 0; margin: 0; }

.download-prompt {
  margin: 0 0 8px 0;
  color: #fff;
  font-weight: 700;
  font-size: 0.9rem;
  white-space: normal;
}

.download-link {
  display: block;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  background: #fafafa;
  color: #4b2e2e;
  font-weight: 600;
  transition: background 0.2s ease, color 0.2s ease;
  white-space: normal;     /* wrap nicely */
  word-break: break-word;  /* avoid overflow on long text */
}
.download-link:hover {
  background: #4b2e2e;
  color: #fff;
}

/* Desktop: hover to open (with delay-before-hide) */
@media (min-width: 769px) {
  /* Show immediately on hover: override delays so it appears right away */
  .dropdown:hover .dropdown-menu {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
    transition:
      opacity .25s ease,
      visibility 0s; /* no delay when showing */
  }
}

/* CTA */
.cta-button .button {
  background-color: #4b2e2e;
  color: #fff;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
}
.cta-button .button:hover {
  background-color: #7b4e4e;
}

/* Mobile */
@media (max-width: 768px) {
  .hamburger { display: flex; }

  .nav-links {
    flex-direction: column;
    position: absolute;
    top: 60px; /* below sticky bar */
    left: 0;
    width: 100%;
    background-color: #f4e1d2;
    display: none;
    padding: 10px 0;
    gap: 0;
    border-top: 1px solid rgba(0,0,0,0.05);
    box-shadow: 0 12px 18px rgba(0,0,0,0.08);
  }
  .nav-links.active { display: flex; }

  .nav-links li {
    width: 100%;
    text-align: center;
    padding: 10px 0;
  }

  /* Mobile dropdown: controlled by .open class (no hover) */
  .dropdown-menu {
    position: static;
    box-shadow: none;
    padding: 8px 12px 12px;
    margin-top: 6px;
    background: #f4e1d2;

    /* For mobile, just toggle display via the .open class */
    display: none;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
    transition: none;
  }
  .dropdown-menu.open { display: block; }
}
</style>
