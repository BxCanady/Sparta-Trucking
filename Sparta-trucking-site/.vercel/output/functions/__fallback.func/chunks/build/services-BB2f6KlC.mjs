import { u as useHead, a as __nuxt_component_0 } from './server.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "services",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Services | Sparta Trucking",
      meta: [
        {
          name: "description",
          content: "MBE/DBE certified trucking and freight brokering: Reefer, Flatbed, Tankers, Oversize, Waste Water Removal."
        },
        {
          property: "og:title",
          content: "Trucking & Freight Services — Sparta Trucking"
        },
        {
          property: "og:description",
          content: "Reefer, Flatbed, Tankers, Oversize, Waste Water Removal, and Freight Brokering."
        },
        { property: "og:type", content: "website" }
      ],
      link: [
        { rel: "canonical", href: "https://www.spartatrucking.com/services" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "services-page" }, _attrs))}><header class="services-hero"><h1 class="services-title">Trucking &amp; Freight Services</h1><div class="linkbar"><nav class="services-nav" aria-label="Services"><a href="#reefer">Reefer</a><a href="#flatbed">Flatbed</a><a href="#tankers">Tankers</a><a href="#oversize">Oversize</a><a href="#waste-water-removal">Waste Water Removal</a><a href="#freight-brokering">Freight Brokering</a></nav></div></header><section id="reefer" class="svc"><div class="svc-wrap"><h2 class="svc-title">Reefer Trucking</h2><p class="svc-text"> Temperature-controlled transport for perishable and sensitive goods with continuous monitoring and on-time delivery. </p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/quote",
        class: "svc-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Request Reefer Quote`);
          } else {
            return [
              createTextVNode("Request Reefer Quote")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section id="flatbed" class="svc alt"><div class="svc-wrap"><h2 class="svc-title">Flatbed Hauling</h2><p class="svc-text"> Secure transport for building materials, machinery, and irregular loads with proper tie-downs and routing. </p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/quote",
        class: "svc-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Request Flatbed Quote`);
          } else {
            return [
              createTextVNode("Request Flatbed Quote")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section id="tankers" class="svc"><div class="svc-wrap"><h2 class="svc-title">Tanker Transport</h2><p class="svc-text"> Safe movement of liquids and bulk materials by certified operators following strict handling standards. </p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/quote",
        class: "svc-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Request Tanker Quote`);
          } else {
            return [
              createTextVNode("Request Tanker Quote")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section id="oversize" class="svc alt"><div class="svc-wrap"><h2 class="svc-title">Oversize / Heavy Haul</h2><p class="svc-text"> Specialized heavy and over-dimensional loads with permits, escorts, and route planning. </p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/quote",
        class: "svc-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Request Oversize Quote`);
          } else {
            return [
              createTextVNode("Request Oversize Quote")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section id="waste-water-removal" class="svc"><div class="svc-wrap"><h2 class="svc-title">Waste Water Removal</h2><p class="svc-text"> Reliable collection and hauling services with compliant disposal and documented chain of custody. </p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/quote",
        class: "svc-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Request Service`);
          } else {
            return [
              createTextVNode("Request Service")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section id="freight-brokering" class="svc alt"><div class="svc-wrap"><h2 class="svc-title">Freight Brokering</h2><p class="svc-text"> Licensed brokerage connecting shippers with vetted carriers for flexible capacity and end-to-end coordination. </p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/quote",
        class: "svc-btn"
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
      _push(`</div></section></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=services-BB2f6KlC.mjs.map
