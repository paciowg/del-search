<template>
  <div>
    <form @submit.prevent="formSubmit" class="text-center">
      <label for="search-text-input" class="block tablet:inline">Search by ID or Text:</label>
      <input id="search-text-input" v-model="text" class="input" type="text" />
      <button type="submit" class="button w-24" :disabled="loading">
        <template v-if="loading">
          <i class="fas fa-spinner fa-spin"></i>
        </template>
        <template v-else>Search</template>
      </button>
    </form>

    <section v-if="loading" class="text-center">Found {{ total }} results so far...</section>

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

<script>
import api from '@/api'

// Using a global will persist the object across routes.
const DATA = {
  text: '',
  searched: false,
  loading: false,
  total: 0,
  results: [],
}

export default {
  data () {
    return DATA
  },

  methods: {
    async formSubmit () {
      if (this.loading) {
        return
      }

      this.loading = true
      this.searched = false
      this.total = 0

      const measureApi = new api.Measure()

      measureApi.on('count', num => (this.total += num))

      const measures = await measureApi.search({ text: this.text })
      this.results = measures

      this.loading = false
      this.searched = true
    },
  },
}
</script>
