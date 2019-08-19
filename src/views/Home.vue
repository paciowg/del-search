<template>
  <div>
    <form @submit.prevent="formSubmit" class="text-center">
      <label for="search-text-input" class="block tablet:inline">Search by ID or Text:</label>
      <input id="search-text-input" v-model="text" class="input" type="text" />
      <button type="submit" class="button" :disabled="loading">
        <template v-if="loading">
          <i class="fas fa-spinner fa-spin"></i>
        </template>
        <template v-else>Search</template>
      </button>
    </form>

    <section v-if="searched && results.length">
      <table>
        <tr>
          <th>ID</th>
          <th>Title</th>
        </tr>
        <tr v-for="measure in results" :key="measure.id">
          <td class="whitespace-no-wrap">
            <router-link :to="{ name: 'detail', params: { id: measure.id }}">{{ measure.id }}</router-link>
          </td>
          <td>{{ measure.title }}</td>
        </tr>
      </table>
    </section>

    <section v-if="searched && !results.length" class="text-center">No results found.</section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { R4 } from '@Ahryman40k/ts-fhir-types'

import api from '@/api'

interface IData {
  text: string
  searched: boolean
  loading: boolean
  results: Array<R4.IMeasure>
}

// Using a global will persist the object across routes.
const DATA: IData = {
  text: '',
  searched: false,
  loading: false,
  results: []
}

export default Vue.extend({
  data (): IData {
    return DATA
  },

  methods: {
    async formSubmit () {
      this.loading = true
      this.searched = false

      const measures = await api.measure.search({ text: this.text })
      this.results = measures

      this.loading = false
      this.searched = true
    }
  }
})
</script>
