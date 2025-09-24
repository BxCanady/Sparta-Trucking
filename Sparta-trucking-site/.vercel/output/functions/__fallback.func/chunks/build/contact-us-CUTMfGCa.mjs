import { _ as _export_sfc, u as useHead, a as __nuxt_component_0 } from './server.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-D54a4TOD.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue-router';

const _sfc_main = {
  __name: "contact-us",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Contact Us | Sparta Trucking",
      meta: [
        { name: "description", content: "Contact Sparta Trucking Admin, Dispatch, and Sales. MBE/DBE certified carrier specializing in Reefer, Flatbed, Tankers, Oversize, and Waste Water Removal." },
        { property: "og:title", content: "Contact Sparta Trucking" },
        { property: "og:description", content: "Admin: 888-426-6023 x1 · Dispatch: 888-426-6023 x2 · Sales: 888-426-6023 x3 · office@spartatrucking.com" },
        { property: "og:type", content: "website" }
      ],
      link: [{ rel: "canonical", href: "https://www.spartatrucking.com/contact-us" }]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "contact" }, _attrs))} data-v-7e0a8da0><section class="hero" data-v-7e0a8da0><img${ssrRenderAttr("src", _imports_0)} alt="Sparta Trucking Logo" class="logo" data-v-7e0a8da0><h1 data-v-7e0a8da0>Contact Sparta Trucking</h1><p data-v-7e0a8da0>MBE/DBE Certified · Reefer · Flatbed · Tankers · Oversize · Waste Water Removal</p></section><section class="cards" data-v-7e0a8da0><article class="card" data-v-7e0a8da0><h2 data-v-7e0a8da0>Admin Department</h2><ul class="list" data-v-7e0a8da0><li data-v-7e0a8da0><a href="tel:18884266023" data-v-7e0a8da0>Office: 888-426-6023 x 1</a></li><li data-v-7e0a8da0><a href="tel:19855174322" data-v-7e0a8da0>Cell: 985-517-4322</a></li><li data-v-7e0a8da0><a href="tel:14046606991" data-v-7e0a8da0>Cell: 404-660-6991</a></li><li data-v-7e0a8da0><a href="mailto:office@spartatrucking.com" data-v-7e0a8da0>office@spartatrucking.com</a></li><li data-v-7e0a8da0>Hours: Mon–Fri, 9:00 AM–5:00 PM CST</li></ul><div class="actions" data-v-7e0a8da0><a class="btn primary" href="tel:18884266023" data-v-7e0a8da0>Call Admin</a><a class="btn" href="mailto:office@spartatrucking.com" data-v-7e0a8da0>Email Admin</a></div></article><article class="card" data-v-7e0a8da0><h2 data-v-7e0a8da0>Dispatch</h2><ul class="list" data-v-7e0a8da0><li data-v-7e0a8da0><a href="tel:18884266023" data-v-7e0a8da0>Direct Line: 888-426-6023 x 2</a></li><li data-v-7e0a8da0><a href="mailto:dispatch@spartatrucking.com" data-v-7e0a8da0>dispatch@spartatrucking.com</a></li><li data-v-7e0a8da0>After-Hours Support Available</li></ul><div class="actions" data-v-7e0a8da0>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "btn",
        to: "/quote"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Request a Load Quote`);
          } else {
            return [
              createTextVNode("Request a Load Quote")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a class="btn" href="mailto:dispatch@spartatrucking.com" data-v-7e0a8da0>Email Dispatch</a></div></article><article class="card" data-v-7e0a8da0><h2 data-v-7e0a8da0>Sales &amp; Brokerage</h2><ul class="list" data-v-7e0a8da0><li data-v-7e0a8da0><a href="tel:18884266023" data-v-7e0a8da0>Sales: 888-426-6023 x 3</a></li><li data-v-7e0a8da0><a href="mailto:sales@spartatrucking.com" data-v-7e0a8da0>sales@spartatrucking.com</a></li><li data-v-7e0a8da0>Capacity Planning • Carrier Vetting • Contract Rates</li></ul><div class="actions" data-v-7e0a8da0>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "btn",
        to: "/services"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`View Services`);
          } else {
            return [
              createTextVNode("View Services")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "btn",
        to: "/quote"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Start a Brokerage Request`);
          } else {
            return [
              createTextVNode("Start a Brokerage Request")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></article><article class="card" data-v-7e0a8da0><h2 data-v-7e0a8da0>Compliance &amp; Certifications</h2><ul class="list" data-v-7e0a8da0><li data-v-7e0a8da0>MBE/DBE Certified</li><li data-v-7e0a8da0>Safety-First Operations</li><li data-v-7e0a8da0>Temperature-Controlled, Flatbed, Tanker, Oversize, Waste Water</li></ul><div class="badges" data-v-7e0a8da0><span class="badge" data-v-7e0a8da0>MBE</span><span class="badge" data-v-7e0a8da0>DBE</span><span class="badge" data-v-7e0a8da0>Insured</span></div></article></section><section class="social-links-section" data-v-7e0a8da0><div class="social-links" data-v-7e0a8da0><h2 data-v-7e0a8da0>Connect With Us</h2><a href="https://www.facebook.com/share/1773jPWjxd/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="social-icon" data-v-7e0a8da0><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#4267B2" viewBox="0 0 24 24" aria-hidden="true" data-v-7e0a8da0><path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-3v-3h3v-2c0-3 1.8-5 4.5-5 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 1-2 2v2h3l-.5 3h-2.5v7A10 10 0 0 0 22 12" data-v-7e0a8da0></path></svg><span class="social-label" data-v-7e0a8da0>Facebook</span></a><a href="https://www.linkedin.com/in/quintin-galloway-675b922b9" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="social-icon" data-v-7e0a8da0><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#0077B5" viewBox="0 0 24 24" aria-hidden="true" data-v-7e0a8da0><path d="M4.98 3a2.5 2.5 0 1 1 0 5A2.5 2.5 0 0 1 4.98 3zM2 8.66h6v12H2zM17.93 8.66a3.48 3.48 0 0 0-2.14.7v-.7h-6v12h6v-6.6a3.47 3.47 0 0 1 2.14-2c.7 0 1.4.43 1.4 1.5v7.1h6v-7.7c0-3.63-1.8-5.12-4.8-5.12z" data-v-7e0a8da0></path></svg><span class="social-label" data-v-7e0a8da0>LinkedIn</span></a></div></section><section class="cta" data-v-7e0a8da0><div class="cta-wrap" data-v-7e0a8da0><h3 data-v-7e0a8da0>Ready to move your freight?</h3><p data-v-7e0a8da0>Tell us about your load and timeline. We’ll get back to you fast.</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "btn lg primary",
        to: "/quote"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Request a Quote`);
          } else {
            return [
              createTextVNode("Request a Quote")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section class="quote-block" data-v-7e0a8da0><blockquote data-v-7e0a8da0>“Be not afraid of growing slowly; be afraid only of standing still.”</blockquote></section></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact-us.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contactUs = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7e0a8da0"]]);

export { contactUs as default };
//# sourceMappingURL=contact-us-CUTMfGCa.mjs.map
