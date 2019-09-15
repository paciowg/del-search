<template>
  <div>
    <section>
      <router-link :to="{name:'search'}">
        <i class="fas fa-chevron-left"></i>
        Back to Search
      </router-link>
    </section>

    <section v-if="loading" class="text-center">
      <i class="text-gray-500 fas fa-spinner fa-spin fa-4x"></i>
    </section>

    <template v-else>
      <section>
        <table>
          <tr>
            <th class="w-32">Item ID</th>
            <td>{{ measure.id }}</td>
          </tr>
          <tr>
            <th>Short Name</th>
            <td>{{ measure.title }}</td>
          </tr>
          <tr>
            <th>Text</th>
            <td>{{ measure.description }}</td>
          </tr>
          <tr>
            <th>Status</th>
            <td>{{ measure.status | startCase }}</td>
          </tr>
        </table>
      </section>
      <section v-for="(set) in measure.answerSets" :key="set.library.id">
        <h2
          class="text-lg font-bold"
        >{{ set.library.name }} {{ set.library.version }} ({{ set.library.status | startCase }})</h2>
        <table>
          <tr>
            <th class="w-48">Label</th>
            <th>Display</th>
            <th class="w-64">LOINC</th>
          </tr>
          <tr v-for="answer in set.answers" :key="answer.label">
            <td class="w-32">{{ answer.label }}</td>
            <td>{{ answer.display }}</td>
            <td>
              <a v-if="answer.url" :href="answer.url" target="loinc">{{ answer.url }}</a>
            </td>
          </tr>
        </table>
      </section>
    </template>
  </div>
</template>

<script>
import startCase from 'lodash.startcase';

import api from '@/api';

export default {
  props: {
    id: { type: String, required: true },
  },

  data() {
    return {
      loading: true,
      measure: null,
    };
  },

  async created() {
    await this.getMeasure();
  },

  filters: {
    startCase,
  },

  methods: {
    async getMeasure() {
      this.loading = true;

      const measure = await api.measure.getById(this.id);
      this.measure = measure;

      this.loading = false;
    },
  },
};
</script>
