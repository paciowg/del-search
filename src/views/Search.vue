<template>
  <div>
    <section v-if="loading" class="text-center">
      <i class="text-gray-500 fas fa-spinner fa-spin fa-4x"></i>
    </section>

    <form v-else @submit.prevent="formSubmit" class="text-center">
      <select v-model="library">
        <option value>All Forms</option>
        <option v-for="library in libraries" :key="library.key" :value="library.key">{{ library.text }}</option>
      </select>
      <input placeholder="Search by ID or Text" v-model="text" type="text" />
      <button type="submit" class="w-24" :disabled="searching">
        <i v-if="searching" class="fas fa-spinner fa-spin"></i>
        <template v-else>Search</template>
      </button>
    </form>

    <section v-if="searching" class="text-center">Found {{ total }} results so far...</section>

    <section v-if="searched && results.length">
      <table>
        <tr>
          <th class="desktop:w-56">ID</th>
          <th>Title</th>
          <th class="desktop:w-56">Forms</th>
        </tr>
        <tr v-for="measure in results" :key="measure.id">
          <td class="whitespace-no-wrap">
            <router-link :to="{ name: 'detail', params: { id: measure.id }}">{{ measure.id }}</router-link>
          </td>
          <td>{{ measure.title }}</td>
          <td>
            <span v-for="lib in measure.libraries" :key="lib.id">
              {{ lib.name }} {{ lib.version }}
              <br />
            </span>
          </td>
        </tr>
      </table>
    </section>

    <section v-if="searched && !results.length" class="text-center">No results found.</section>
  </div>
</template>

<script>
import api from '@/api';

// Using a global will persist the object across routes.
const DATA = {
  text: '',
  loading: true,
  searched: false,
  searching: false,
  total: 0,
  library: '',
  libraries: [],
  results: [],
};


export default {
  data() {
    return DATA;
  },

  created() {
    this.fetchLibraryOptions();
  },

  methods: {
    async fetchLibraryOptions() {
      this.loading = true;

      const data = await api.library.search();

      this.libraries = data.map(resource => ({
        key: `Library/${resource.id}`,
        text: `${resource.name} ${resource.version}`,
      }));

      this.loading = false;
    },

    getFormNames(measure) {
      return measure.libraries.map(l => `${l.name} ${l.version}`).join(', ');
    },

    async formSubmit() {
      if (this.searching) {
        return;
      }

      this.searching = true;
      this.searched = false;
      this.total = 0;

      // Update count on searching.
      api.measure.emitter.on('count', num => { this.total += num; });

      // Build search params.
      const params = {
        'description:contains': this.text,
      };
      if (this.library) {
        params['depends-on'] = this.library;
      }

      // And search!
      const measures = await api.measure.search(params);
      this.results = measures;

      this.searching = false;
      this.searched = true;
    },
  },
};
</script>
