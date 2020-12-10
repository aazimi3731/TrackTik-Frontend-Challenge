<template>
  <v-container fluid class="full-width pa-0 mx-0">
    <v-layout
      v-for="(site, index) in sites"
      :key="index"
      row
      class="list justify-end ma-0 px-4 pt-3 pb-4"
      no-gutters>
      <site-list
        :site="siteInformation(site)"
        :index="index"
        :data-test="`siteItem-${index}`" />
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { ISite, ISiteInformation } from '@/types';
import SiteList from './SiteList.vue';

export default Vue.extend({
  name: 'SitesList',

  components: {
    SiteList,
  },

  props: {
    sites: {
      type: Array,
      required: true,
      default: null,
    },
  },

  methods: {
    siteInformation(site: ISite): ISiteInformation {
      return this.$store.getters['siteModule/getSiteInformation'](site);
    },
  },
});
</script>

<style scoped lang="scss">
.list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  border-bottom: 1px solid black;
}
</style>
