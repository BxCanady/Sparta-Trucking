<template>
  <section class="quote">
    <h1>Request a Quote</h1>

    <form @submit.prevent="onSubmit" novalidate>
      <fieldset class="stack">
        <label>
          Company Name*
          <input v-model="form.companyName" type="text" required />
        </label>

        <label>
          Contact Name*
          <div class="stack tight">
            <input v-model="form.contactFirst" type="text" placeholder="First" required />
            <input v-model="form.contactLast" type="text" placeholder="Last" required />
          </div>
        </label>
      </fieldset>

      <fieldset>
        <legend>Address*</legend>
        <label>
          Street Address
          <input v-model="form.street1" type="text" required />
        </label>
        <label>
          Address Line 2
          <input v-model="form.street2" type="text" />
        </label>

        <div class="grid three">
          <label>
            City
            <input v-model="form.city" type="text" required />
          </label>

          <label>
            State
            <select v-model="form.state" required>
              <option value="" disabled>Select</option>
              <option v-for="s in states" :key="s" :value="s">{{ s }}</option>
            </select>
          </label>

          <label>
            ZIP Code
            <input v-model="form.zip" type="text" inputmode="numeric" pattern="\\d{5}(-\\d{4})?" required />
          </label>
        </div>
      </fieldset>

      <fieldset class="grid three">
        <label>
          Business Phone*
          <input v-model="form.businessPhone" type="tel" required />
        </label>
        <label>
          Cell Phone*
          <input v-model="form.cellPhone" type="tel" required />
        </label>
        <label>
          Fax
          <input v-model="form.fax" type="tel" />
        </label>
      </fieldset>

      <fieldset class="grid two">
        <label>
          Email*
          <input v-model="form.email" type="email" required />
        </label>
        <label>
          Commodity
          <input v-model="form.commodity" type="text" />
        </label>
      </fieldset>

      <fieldset class="grid three">
        <label>
          Expected delivery amount in tons
          <input v-model.number="form.tons" type="number" min="0" step="0.01" />
        </label>
        <label>
          Expected Load Number
          <input v-model.number="form.loadNumber" type="number" min="0" step="1" />
        </label>
        <label>
          Estimated End Date
          <input v-model="form.endDate" type="date" placeholder="mm/dd/yyyy" />
        </label>
      </fieldset>

      <fieldset class="grid two">
        <label>
          Type of equipment needed
          <select v-model="form.equipment">
            <option value="" disabled>Select</option>
            <option>Dry Van</option>
            <option>Flatbed</option>
            <option>Reefer</option>
            <option>Step Deck</option>
            <option>RGN/Lowboy</option>
            <option>Dump</option>
            <option>Tanker</option>
            <option>Other</option>
          </select>
        </label>
      </fieldset>

      <fieldset>
        <legend>Load Pickup Location</legend>
        <label>
          Company Name
          <input v-model="form.pickupCompany" type="text" />
        </label>
        <label>
          Street Address
          <input v-model="form.pickupStreet1" type="text" />
        </label>
        <label>
          Address Line 2
          <input v-model="form.pickupStreet2" type="text" />
        </label>
        <label>
          Loading Hours
          <input v-model="form.pickupHours" type="text" placeholder="e.g., Mon–Fri 8–4" />
        </label>

        <div class="grid three">
          <label>
            City
            <input v-model="form.pickupCity" type="text" />
          </label>
          <label>
            State
            <select v-model="form.pickupState">
              <option value="" disabled>Select</option>
              <option v-for="s in states" :key="'p-'+s" :value="s">{{ s }}</option>
            </select>
          </label>
          <label>
            ZIP Code
            <input v-model="form.pickupZip" type="text" inputmode="numeric" pattern="\\d{5}(-\\d{4})?" />
          </label>
        </div>
      </fieldset>

      <fieldset>
        <legend>Load Drop-off Location</legend>
        <label>
          Company Name
          <input v-model="form.dropCompany" type="text" />
        </label>
        <label>
          Street Address
          <input v-model="form.dropStreet1" type="text" />
        </label>
        <label>
          Address Line 2
          <input v-model="form.dropStreet2" type="text" />
        </label>
        <label>
          Loading Hours
          <input v-model="form.dropHours" type="text" placeholder="e.g., Mon–Fri 8–4" />
        </label>

        <div class="grid three">
          <label>
            City
            <input v-model="form.dropCity" type="text" />
          </label>
          <label>
            State
            <select v-model="form.dropState">
              <option value="" disabled>Select</option>
              <option v-for="s in states" :key="'d-'+s" :value="s">{{ s }}</option>
            </select>
          </label>
          <label>
            ZIP Code
            <input v-model="form.dropZip" type="text" inputmode="numeric" pattern="\\d{5}(-\\d{4})?" />
          </label>
          <label>
  Additional Notes / Comments
  <textarea v-model="form.notes" rows="4" placeholder="Enter any additional notes or comments here"></textarea>
</label>
        </div>
      </fieldset>

      <div class="actions">
        <button type="submit">Submit Quote</button>
      </div>
    </form>

    <!-- Feedback message -->
    <p v-if="result" :class="status">{{ result }}</p>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const states = [
  'AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL',
  'IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT',
  'NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI',
  'SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'
]

const form = ref({
  access_key: '133aeb8f-ecc9-41ac-afc1-8c8876b6e5f3',
// Company & Contact Info
  companyName: '',
  contactFirst: '',
  contactLast: '',

  // Address
  street1: '',
  street2: '',
  city: '',
  state: '',
  zip: '',

  // Phones and Fax
  businessPhone: '',
  cellPhone: '',
  fax: '',

  // Email & Commodity Info
  email: '',
  commodity: '',

  // Load Details
  tons: undefined as number | undefined,
  loadNumber: undefined as number | undefined,
  endDate: '',

  // Equipment Type
  equipment: '',

  // Pickup Location
  pickupCompany: '',
  pickupStreet1: '',
  pickupStreet2: '',
  pickupHours: '',
  pickupCity: '',
  pickupState: '',
  pickupZip: '',

  // Drop-off Location
  dropCompany: '',
  dropStreet1: '',
  dropStreet2: '',
  dropHours: '',
  dropCity: '',
  dropState: '',
  dropZip: '',

  // Additional Notes
  notes: '',
})

const result = ref('')
const status = ref('')

const onSubmit = async () => {
  result.value = 'Submitting...'
  try {
    const response = await $fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: { ...form.value }
    })
    result.value = response.message
    status.value = response.status === 200 ? 'success' : 'error'

    if (status.value === 'success') {
      // Reset all form fields except access_key after successful submission
      Object.keys(form.value).forEach(key => {
        form.value[key] = key === 'access_key' ? form.value[key] : ''
      })
    }
  } catch (error) {
    status.value = 'error'
    result.value = 'Something went wrong!'
    console.error(error)
  }
}
</script>

<style scoped>
.quote {
  max-width: 880px;
  margin: 0 auto;
  padding: 2rem 1rem 4rem;
}
h1 {
  margin-bottom: 1rem;
  text-align: center;
}
form {
  display: grid;
  gap: 1.25rem;
}
fieldset {
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 1rem;
  display: grid;
  gap: 0.75rem;
}
legend {
  padding: 0 0.25rem;
  font-weight: 600;
}
label {
  display: grid;
  gap: 0.5rem;
  font-size: 0.95rem;
}
input, select {
  padding: 0.7rem 0.8rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 1rem;
  width: 100%;
}
.stack {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.stack.tight {
  gap: 0.5rem;
}
.grid.three {
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
}
.actions {
  display: flex;
  justify-content: center;
}
button {
  background: #b30000;
  color: #fff;
  border: 0;
  border-radius: 10px;
  padding: 0.9rem 1.5rem;
  font-weight: 600;
  cursor: pointer;
}
button:hover {
  filter: brightness(0.95);
}
.success {
  color: green;
  margin-top: 1rem;
  text-align: center;
}
.error {
  color: red;
  margin-top: 1rem;
  text-align: center;
}
@media (max-width: 820px) {
  .grid.two,
  .grid.three {
    grid-template-columns: 1fr;
  }
}
</style>
