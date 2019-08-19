<template>
  <div>
    <form @submit.prevent="formSubmit">
      <input v-model="text" class="input" type="text" placeholder="Search..." />
      <button type="submit" class="button" :disabled="loading">
        <template v-if="loading">
          <i class="fas fa-spinner fa-spin"></i>
        </template>
        <template v-else>Search</template>
      </button>
    </form>

    <section v-if="searched && results.length === 0">No results found.</section>

    <section v-for="result in results" :key="result.id">
      <h2 class="text-lg font-bold">{{ result.id }}: {{ result.title }}</h2>
      <p>{{ result.description }}</p>

      <blockquote>
        <section v-for="answer in result.relatedArtifact" :key="`${answer.resource}--${answer.label}`">
          <span class="font-bold">{{ answer.resource }}:</span>
          {{ answer.label }} - {{ answer.display }}
        </section>
      </blockquote>
    </section>
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

export default Vue.extend({
  data (): IData {
    return {
      text: '',
      searched: false,
      loading: false,
      results: []
    }
  },

  methods: {
    async formSubmit () {
      this.loading = true
      this.searched = false

      const response = await api.measure.search({ text: this.text })
      this.results = response

      this.loading = false
      this.searched = true
    }
  }
})
</script>
