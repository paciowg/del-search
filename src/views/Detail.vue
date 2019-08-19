<template>
  <div>
    <section>
      <router-link :to="{name:'home'}">
        <i class="fas fa-chevron-left"></i>
        Back to Search
      </router-link>
    </section>
    <section v-if="measure">
      <table>
        <tr>
          <th>Item ID</th>
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
          <td>{{ titleCase(measure.status) }}</td>
        </tr>
      </table>
    </section>
    <template v-if="answerSets">
      <section v-for="(answers, questionnaire) in answerSets" :key="questionnaire">
        <h2 class="text-lg font-bold">{{ questionnaire }}</h2>
        <table>
          <tr>
            <th>Label</th>
            <th>Display</th>
          </tr>
          <tr v-for="answer in answers" :key="answer.label">
            <td>{{ answer.label }}</td>
            <td>{{ answer.display }}</td>
          </tr>
        </table>
      </section>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import groupBy from 'lodash.groupby'
import { R4 } from '@Ahryman40k/ts-fhir-types'

import api from '@/api'

interface IAnswerSets {
  [questionnaire: string]: Array<R4.IRelatedArtifact>
}

interface IData {
  measure: R4.IMeasure | null
  answerSets: IAnswerSets | null
}

export default Vue.extend({
  props: {
    id: { type: String, required: true }
  },

  data (): IData {
    return {
      measure: null,
      answerSets: null
    }
  },

  async created () {
    await this.getMeasure()
  },

  methods: {
    titleCase (str: string): string {
      const words = str
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      return words.join(' ')
    },

    async getMeasure () {
      const measure = await api.measure.getById(this.id)
      this.measure = measure

      // Find all relatedArtifact objects with type of 'documentation'
      // and resource startswith 'Library/Questionnaire'.
      // Tansform them into the 'answerSets' object where the key is the
      // questionnaire ID and the value is a list of possible answers.
      const validArtifacts = (this.measure.relatedArtifact || []).filter(a => {
        return a.type === 'documentation' && a.resource && a.resource.startsWith('Library/Questionnaire')
      })
      if (validArtifacts.length) {
        this.answerSets = groupBy(validArtifacts, 'resource')
      }
    }
  }
})
</script>
