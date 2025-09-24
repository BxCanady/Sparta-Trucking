import { defineComponent, ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "quote",
  __ssrInlineRender: true,
  setup(__props) {
    const states = [
      "AL",
      "AK",
      "AZ",
      "AR",
      "CA",
      "CO",
      "CT",
      "DE",
      "FL",
      "GA",
      "HI",
      "ID",
      "IL",
      "IN",
      "IA",
      "KS",
      "KY",
      "LA",
      "ME",
      "MD",
      "MA",
      "MI",
      "MN",
      "MS",
      "MO",
      "MT",
      "NE",
      "NV",
      "NH",
      "NJ",
      "NM",
      "NY",
      "NC",
      "ND",
      "OH",
      "OK",
      "OR",
      "PA",
      "RI",
      "SC",
      "SD",
      "TN",
      "TX",
      "UT",
      "VT",
      "VA",
      "WA",
      "WV",
      "WI",
      "WY"
    ];
    const form = ref({
      access_key: "133aeb8f-ecc9-41ac-afc1-8c8876b6e5f3",
      // Company & Contact Info
      companyName: "",
      contactFirst: "",
      contactLast: "",
      // Address
      street1: "",
      street2: "",
      city: "",
      state: "",
      zip: "",
      // Phones and Fax
      businessPhone: "",
      cellPhone: "",
      fax: "",
      // Email & Commodity Info
      email: "",
      commodity: "",
      // Load Details
      tons: void 0,
      loadNumber: void 0,
      endDate: "",
      // Equipment Type
      equipment: "",
      // Pickup Location
      pickupCompany: "",
      pickupStreet1: "",
      pickupStreet2: "",
      pickupHours: "",
      pickupCity: "",
      pickupState: "",
      pickupZip: "",
      // Drop-off Location
      dropCompany: "",
      dropStreet1: "",
      dropStreet2: "",
      dropHours: "",
      dropCity: "",
      dropState: "",
      dropZip: "",
      // Additional Notes
      notes: ""
    });
    const result = ref("");
    const status = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "quote" }, _attrs))} data-v-f3feeb3f><h1 data-v-f3feeb3f>Request a Quote</h1><form novalidate data-v-f3feeb3f><fieldset class="stack" data-v-f3feeb3f><label data-v-f3feeb3f> Company Name* <input${ssrRenderAttr("value", form.value.companyName)} type="text" required data-v-f3feeb3f></label><label data-v-f3feeb3f> Contact Name* <div class="stack tight" data-v-f3feeb3f><input${ssrRenderAttr("value", form.value.contactFirst)} type="text" placeholder="First" required data-v-f3feeb3f><input${ssrRenderAttr("value", form.value.contactLast)} type="text" placeholder="Last" required data-v-f3feeb3f></div></label></fieldset><fieldset data-v-f3feeb3f><legend data-v-f3feeb3f>Address*</legend><label data-v-f3feeb3f> Street Address <input${ssrRenderAttr("value", form.value.street1)} type="text" required data-v-f3feeb3f></label><label data-v-f3feeb3f> Address Line 2 <input${ssrRenderAttr("value", form.value.street2)} type="text" data-v-f3feeb3f></label><div class="grid three" data-v-f3feeb3f><label data-v-f3feeb3f> City <input${ssrRenderAttr("value", form.value.city)} type="text" required data-v-f3feeb3f></label><label data-v-f3feeb3f> State <select required data-v-f3feeb3f><option value="" disabled data-v-f3feeb3f${ssrIncludeBooleanAttr(Array.isArray(form.value.state) ? ssrLooseContain(form.value.state, "") : ssrLooseEqual(form.value.state, "")) ? " selected" : ""}>Select</option><!--[-->`);
      ssrRenderList(states, (s) => {
        _push(`<option${ssrRenderAttr("value", s)} data-v-f3feeb3f${ssrIncludeBooleanAttr(Array.isArray(form.value.state) ? ssrLooseContain(form.value.state, s) : ssrLooseEqual(form.value.state, s)) ? " selected" : ""}>${ssrInterpolate(s)}</option>`);
      });
      _push(`<!--]--></select></label><label data-v-f3feeb3f> ZIP Code <input${ssrRenderAttr("value", form.value.zip)} type="text" inputmode="numeric" pattern="\\\\d{5}(-\\\\d{4})?" required data-v-f3feeb3f></label></div></fieldset><fieldset class="grid three" data-v-f3feeb3f><label data-v-f3feeb3f> Business Phone* <input${ssrRenderAttr("value", form.value.businessPhone)} type="tel" required data-v-f3feeb3f></label><label data-v-f3feeb3f> Cell Phone* <input${ssrRenderAttr("value", form.value.cellPhone)} type="tel" required data-v-f3feeb3f></label><label data-v-f3feeb3f> Fax <input${ssrRenderAttr("value", form.value.fax)} type="tel" data-v-f3feeb3f></label></fieldset><fieldset class="grid two" data-v-f3feeb3f><label data-v-f3feeb3f> Email* <input${ssrRenderAttr("value", form.value.email)} type="email" required data-v-f3feeb3f></label><label data-v-f3feeb3f> Commodity <input${ssrRenderAttr("value", form.value.commodity)} type="text" data-v-f3feeb3f></label></fieldset><fieldset class="grid three" data-v-f3feeb3f><label data-v-f3feeb3f> Expected delivery amount in tons <input${ssrRenderAttr("value", form.value.tons)} type="number" min="0" step="0.01" data-v-f3feeb3f></label><label data-v-f3feeb3f> Expected Load Number <input${ssrRenderAttr("value", form.value.loadNumber)} type="number" min="0" step="1" data-v-f3feeb3f></label><label data-v-f3feeb3f> Estimated End Date <input${ssrRenderAttr("value", form.value.endDate)} type="date" placeholder="mm/dd/yyyy" data-v-f3feeb3f></label></fieldset><fieldset class="grid two" data-v-f3feeb3f><label data-v-f3feeb3f> Type of equipment needed <select data-v-f3feeb3f><option value="" disabled data-v-f3feeb3f${ssrIncludeBooleanAttr(Array.isArray(form.value.equipment) ? ssrLooseContain(form.value.equipment, "") : ssrLooseEqual(form.value.equipment, "")) ? " selected" : ""}>Select</option><option data-v-f3feeb3f${ssrIncludeBooleanAttr(Array.isArray(form.value.equipment) ? ssrLooseContain(form.value.equipment, null) : ssrLooseEqual(form.value.equipment, null)) ? " selected" : ""}>Dry Van</option><option data-v-f3feeb3f${ssrIncludeBooleanAttr(Array.isArray(form.value.equipment) ? ssrLooseContain(form.value.equipment, null) : ssrLooseEqual(form.value.equipment, null)) ? " selected" : ""}>Flatbed</option><option data-v-f3feeb3f${ssrIncludeBooleanAttr(Array.isArray(form.value.equipment) ? ssrLooseContain(form.value.equipment, null) : ssrLooseEqual(form.value.equipment, null)) ? " selected" : ""}>Reefer</option><option data-v-f3feeb3f${ssrIncludeBooleanAttr(Array.isArray(form.value.equipment) ? ssrLooseContain(form.value.equipment, null) : ssrLooseEqual(form.value.equipment, null)) ? " selected" : ""}>Step Deck</option><option data-v-f3feeb3f${ssrIncludeBooleanAttr(Array.isArray(form.value.equipment) ? ssrLooseContain(form.value.equipment, null) : ssrLooseEqual(form.value.equipment, null)) ? " selected" : ""}>RGN/Lowboy</option><option data-v-f3feeb3f${ssrIncludeBooleanAttr(Array.isArray(form.value.equipment) ? ssrLooseContain(form.value.equipment, null) : ssrLooseEqual(form.value.equipment, null)) ? " selected" : ""}>Dump</option><option data-v-f3feeb3f${ssrIncludeBooleanAttr(Array.isArray(form.value.equipment) ? ssrLooseContain(form.value.equipment, null) : ssrLooseEqual(form.value.equipment, null)) ? " selected" : ""}>Tanker</option><option data-v-f3feeb3f${ssrIncludeBooleanAttr(Array.isArray(form.value.equipment) ? ssrLooseContain(form.value.equipment, null) : ssrLooseEqual(form.value.equipment, null)) ? " selected" : ""}>Other</option></select></label></fieldset><fieldset data-v-f3feeb3f><legend data-v-f3feeb3f>Load Pickup Location</legend><label data-v-f3feeb3f> Company Name <input${ssrRenderAttr("value", form.value.pickupCompany)} type="text" data-v-f3feeb3f></label><label data-v-f3feeb3f> Street Address <input${ssrRenderAttr("value", form.value.pickupStreet1)} type="text" data-v-f3feeb3f></label><label data-v-f3feeb3f> Address Line 2 <input${ssrRenderAttr("value", form.value.pickupStreet2)} type="text" data-v-f3feeb3f></label><label data-v-f3feeb3f> Loading Hours <input${ssrRenderAttr("value", form.value.pickupHours)} type="text" placeholder="e.g., Mon–Fri 8–4" data-v-f3feeb3f></label><div class="grid three" data-v-f3feeb3f><label data-v-f3feeb3f> City <input${ssrRenderAttr("value", form.value.pickupCity)} type="text" data-v-f3feeb3f></label><label data-v-f3feeb3f> State <select data-v-f3feeb3f><option value="" disabled data-v-f3feeb3f${ssrIncludeBooleanAttr(Array.isArray(form.value.pickupState) ? ssrLooseContain(form.value.pickupState, "") : ssrLooseEqual(form.value.pickupState, "")) ? " selected" : ""}>Select</option><!--[-->`);
      ssrRenderList(states, (s) => {
        _push(`<option${ssrRenderAttr("value", s)} data-v-f3feeb3f${ssrIncludeBooleanAttr(Array.isArray(form.value.pickupState) ? ssrLooseContain(form.value.pickupState, s) : ssrLooseEqual(form.value.pickupState, s)) ? " selected" : ""}>${ssrInterpolate(s)}</option>`);
      });
      _push(`<!--]--></select></label><label data-v-f3feeb3f> ZIP Code <input${ssrRenderAttr("value", form.value.pickupZip)} type="text" inputmode="numeric" pattern="\\\\d{5}(-\\\\d{4})?" data-v-f3feeb3f></label></div></fieldset><fieldset data-v-f3feeb3f><legend data-v-f3feeb3f>Load Drop-off Location</legend><label data-v-f3feeb3f> Company Name <input${ssrRenderAttr("value", form.value.dropCompany)} type="text" data-v-f3feeb3f></label><label data-v-f3feeb3f> Street Address <input${ssrRenderAttr("value", form.value.dropStreet1)} type="text" data-v-f3feeb3f></label><label data-v-f3feeb3f> Address Line 2 <input${ssrRenderAttr("value", form.value.dropStreet2)} type="text" data-v-f3feeb3f></label><label data-v-f3feeb3f> Loading Hours <input${ssrRenderAttr("value", form.value.dropHours)} type="text" placeholder="e.g., Mon–Fri 8–4" data-v-f3feeb3f></label><div class="grid three" data-v-f3feeb3f><label data-v-f3feeb3f> City <input${ssrRenderAttr("value", form.value.dropCity)} type="text" data-v-f3feeb3f></label><label data-v-f3feeb3f> State <select data-v-f3feeb3f><option value="" disabled data-v-f3feeb3f${ssrIncludeBooleanAttr(Array.isArray(form.value.dropState) ? ssrLooseContain(form.value.dropState, "") : ssrLooseEqual(form.value.dropState, "")) ? " selected" : ""}>Select</option><!--[-->`);
      ssrRenderList(states, (s) => {
        _push(`<option${ssrRenderAttr("value", s)} data-v-f3feeb3f${ssrIncludeBooleanAttr(Array.isArray(form.value.dropState) ? ssrLooseContain(form.value.dropState, s) : ssrLooseEqual(form.value.dropState, s)) ? " selected" : ""}>${ssrInterpolate(s)}</option>`);
      });
      _push(`<!--]--></select></label><label data-v-f3feeb3f> ZIP Code <input${ssrRenderAttr("value", form.value.dropZip)} type="text" inputmode="numeric" pattern="\\\\d{5}(-\\\\d{4})?" data-v-f3feeb3f></label><label data-v-f3feeb3f> Additional Notes / Comments <textarea rows="4" placeholder="Enter any additional notes or comments here" data-v-f3feeb3f>${ssrInterpolate(form.value.notes)}</textarea></label></div></fieldset><div class="actions" data-v-f3feeb3f><button type="submit" data-v-f3feeb3f>Submit Quote</button></div></form>`);
      if (result.value) {
        _push(`<p class="${ssrRenderClass(status.value)}" data-v-f3feeb3f>${ssrInterpolate(result.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/quote.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const quote = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f3feeb3f"]]);

export { quote as default };
//# sourceMappingURL=quote-jUPUrMOa.mjs.map
