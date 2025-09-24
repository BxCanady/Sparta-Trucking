import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { _ as _imports_0$1 } from './virtual_public-D54a4TOD.mjs';
import { useRouter } from 'vue-router';
import { u as useHead, _ as _export_sfc, a as __nuxt_component_0 } from './server.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import 'vue-bundle-renderer/runtime';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const _imports_0 = publicAssetsURL("/images/back-up.png");
const _sfc_main$1 = {
  __name: "About",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "About Sparta Trucking | Reliable Freight Solutions",
      meta: [
        {
          name: "description",
          content: "Sparta Trucking offers asset-based freight brokerage combining reliable fleet ownership with flexible carrier networks, optimizing southern freight logistics with cost-effective solutions."
        },
        {
          name: "keywords",
          content: "Sparta Trucking, asset-based freight broker, MBE, DBE, Freight services, Reefer, Flatbed, Tankers, Oversize, Waste Water Removal, Southern freight shipping, Logistics expertise"
        },
        {
          name: "author",
          content: "Sparta Trucking"
        },
        {
          property: "og:title",
          content: "About Sparta Trucking | Reliable Freight Solutions"
        },
        {
          property: "og:description",
          content: "Sparta Trucking guarantees reliable, cost-effective freight and brokering solutions with flexible capacity and deep southern logistics knowledge."
        },
        {
          property: "og:url",
          content: "https://www.spartatrucking.com"
        },
        {
          property: "og:type",
          content: "website"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "about-section",
        "aria-label": "About Sparta Trucking"
      }, _attrs))} data-v-dcd91072><div class="about-wrap" data-v-dcd91072><div class="about-badge" role="status" aria-live="polite" data-v-dcd91072> MBE / DBE Certified </div><img${ssrRenderAttr("src", _imports_0$1)} alt="Sparta Trucking Logo" class="about-logo" loading="lazy" width="auto" height="120" data-v-dcd91072><h2 class="about-title" data-v-dcd91072>About Sparta Trucking</h2><p class="about-text" data-v-dcd91072> Sparta Trucking offers shippers the best of both worlds through our asset-based freight brokerage model. Unlike traditional carriers limited to their own fleet or brokers without direct control, we own and operate our own trucks while also leveraging a network of trusted third-party carriers. This hybrid approach guarantees stable capacity, reliable service, and flexible logistics solutions tailored especially for southern freight shipping. </p><p class="about-text" data-v-dcd91072> Our deep expertise in southern freight lanes, combined with real-time insights from our drivers, enables us to avoid delays and optimize routes for cost savings. We prioritize your shipments on our own fleet during peak demand and source competitive rates from our carrier network to offer flexible and cost-effective pricing, whether you ship full truckloads (FTL) or less than truckloads (LTL). </p><p class="about-text" data-v-dcd91072> Partnering with Sparta Trucking means gaining a logistics expert committed to reliability, transparency, and customer-first service. </p><div class="about-specialties" aria-label="Our specialties" data-v-dcd91072><div class="pill" data-v-dcd91072>Reefer</div><div class="pill" data-v-dcd91072>Flatbed</div><div class="pill" data-v-dcd91072>Tankers</div><div class="pill" data-v-dcd91072>Oversize</div><div class="pill" data-v-dcd91072>Waste Water Removal</div><div class="pill" data-v-dcd91072>Freight Brokering</div></div><div class="about-cta" data-v-dcd91072><a href="https://www.spartatrucking.com" target="_blank" rel="noopener noreferrer" class="about-link" aria-label="Visit Sparta Trucking Website" data-v-dcd91072> www.spartatrucking.com </a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/quote",
        class: "quote-button",
        "aria-label": "Get a Quote from Sparta Trucking"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Get a Quote `);
          } else {
            return [
              createTextVNode(" Get a Quote ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="social-links" aria-label="Connect with Sparta Trucking on social media" data-v-dcd91072><h3 class="about-title" data-v-dcd91072>Connect On</h3><a href="https://www.facebook.com/share/1773jPWjxd/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="social-icon" data-v-dcd91072><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#4267B2" viewBox="0 0 24 24" aria-hidden="true" data-v-dcd91072><path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-3v-3h3v-2c0-3 1.8-5 4.5-5 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 1-2 2v2h3l-.5 3h-2.5v7A10 10 0 0 0 22 12" data-v-dcd91072></path></svg><span class="social-label" data-v-dcd91072>Facebook</span></a><a href="https://www.linkedin.com/in/quintin-galloway-675b922b9" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="social-icon" data-v-dcd91072><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#0077B5" viewBox="0 0 24 24" aria-hidden="true" data-v-dcd91072><path d="M4.98 3a2.5 2.5 0 1 1 0 5A2.5 2.5 0 0 1 4.98 3zM2 8.66h6v12H2zM17.93 8.66a3.48 3.48 0 0 0-2.14.7v-.7h-6v12h6v-6.6a3.47 3.47 0 0 1 2.14-2c.7 0 1.4.43 1.4 1.5v7.1h6v-7.7c0-3.63-1.8-5.12-4.8-5.12z" data-v-dcd91072></path></svg><span class="social-label" data-v-dcd91072>LinkedIn</span></a></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/About.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const About = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-dcd91072"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
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
            description: "MBE/DBE certified trucking and freight brokering company. Specializing in Reefer, Flatbed, Tankers, Oversize, and Waste Water Removal.",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://www.spartatrucking.com/search?q={query}",
              "query-input": "required name=query"
            }
          })
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
            description: "Sparta Trucking is MBE/DBE certified, offering freight brokering and trucking services including Reefer, Flatbed, Tankers, Oversize hauling, and Waste Water Removal.",
            telephone: "+1-XXX-XXX-XXXX",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Your City",
              addressRegion: "NC",
              postalCode: "XXXXX",
              addressCountry: "US"
            },
            areaServed: "United States",
            makesOffer: [
              { "@type": "Service", name: "Reefer Hauling" },
              { "@type": "Service", name: "Flatbed Hauling" },
              { "@type": "Service", name: "Tanker Transport" },
              { "@type": "Service", name: "Oversize / Heavy Haul" },
              { "@type": "Service", name: "Waste Water Removal" },
              { "@type": "Service", name: "Freight Brokering" }
            ]
          })
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="hero-container"><video autoplay loop muted playsinline class="video-bg"><source src="https://storage.googleapis.com/bgsparta/bg3.mp4"> Your browser does not support the video tag. </video><noscript><img${ssrRenderAttr("src", _imports_0)} alt="Sparta Trucking background" class="noscript-bg"></noscript><div class="branding-bar"><div class="branding-left"><img${ssrRenderAttr("src", _imports_0$1)} alt="Company Logo" class="logo-img"><h1 class="logo-text">&quot;Reliable trucking. Exceptional service.&quot;</h1></div></div><div class="hero-content"><h2 class="hero-heading">Fast &amp; Reliable Trucking Solutions</h2><button class="hero-button"> Contact Us Today </button></div></div>`);
      _push(ssrRenderComponent(About, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-lZr0lBSm.mjs.map
