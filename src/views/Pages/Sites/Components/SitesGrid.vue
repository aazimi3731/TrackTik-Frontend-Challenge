<template>
  <v-container fluid class="full-width pa-0 mx-0">
    <div
      v-for="(arrangeSite, index) in arrangeSites"
      :key="index">
      <v-row
        class="ma-0 px-4 pt-3 pb-4"
        no-gutters>
        <v-col
          v-for="(site, jndex) in arrangeSite"
          :key="jndex"
          class="pa-0"
          xs="12"
          sm="4">
          <site-grid
            v-if="site"
            :site="site"
            :index="index * 3 + jndex + 1"
            :data-test="`siteItem-${index * 3 + jndex + 1}`" />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { ISite, ISiteInformation } from '@/types';
import SiteGrid from './SiteGrid.vue';

export default Vue.extend({
  name: 'SitesGrid',

  components: {
    SiteGrid,
  },

  props: {
    sites: {
      type: Array,
      required: true,
      default: null,
    },
  },

  computed: {
    arrangeSites() {
      const arrangedSites = [];
      let k = 0;

      for (let i = 0; i < this.sites.length; i += 3) {
        let l = k * 3;
        arrangedSites[k] = [];

        for (let j = 0; j < 3; j += 1) {
          if (this.sites[l]) {
            arrangedSites[k][j] = this.siteInformation(this.sites[l] as ISite);
          }
          l += 1;
        }
        k += 1;
      }
      return arrangedSites;
    },
  },

  methods: {
    siteInformation(site: ISite): ISiteInformation {
      return this.$store.getters['siteModule/getSiteInformation'](site);
    },
  },
});
</script>
