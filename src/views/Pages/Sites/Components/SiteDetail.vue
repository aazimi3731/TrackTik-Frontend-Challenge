<template>
  <div v-if="siteInfo" class="full-width">
    <v-row :class="`text-center pb-2 ${!$vuetify.breakpoint.xsOnly ? 'image' : ''}`" no-gutters>
      <v-img :src="siteInfo.image" color="white" data-test="site-detail-image" />
    </v-row>
    <v-row class="mb-5" align="start" no-gutters>
      <v-icon class="mx-3" color="black" size="36" data-test="site-detail-personalIcon">
        mdi-account
      </v-icon>
      <v-flex class="font-weight-bold pa-0" col="10">
        <div class="text-body-1 black--text" data-test="site-detail-name">
          {{ siteInfo.contactName }}
        </div>
        <div class="text-body-2 grey--text" data-test="site-detail-job">
          {{ siteInfo.contactJob }}
        </div>
      </v-flex>
    </v-row>
    <v-row class="mb-5" align="center" no-gutters>
      <v-icon class="mx-3" align="center" color="black" size="36" data-test="site-detail-phoneIcon">
        mdi-phone
      </v-icon>
      <v-flex class="font-weight-bold pa-0" col="10">
        <div class="text-body-1 black--text" data-test="site-detail-phone">
          {{ siteInfo.contactPhone }}
        </div>
      </v-flex>
    </v-row>
    <v-row class="mb-5" align="center" no-gutters>
      <v-icon class="mx-3" color="black" size="36" data-test="site-detail-emailIcon">
        mdi-email
      </v-icon>
      <v-flex class="font-weight-bold pa-0" col="10">
        <div class="text-body-1 black--text" data-test="site-detail-email">
          {{ siteInfo.contactEmail }}
        </div>
      </v-flex>
    </v-row>
    <v-row class="mb-5" align="center" no-gutters>
      <v-icon class="mx-3" color="black" size="36" data-test="site-detail-addressIcon">
        mdi-map-marker
      </v-icon>
      <v-flex class="font-weight-bold pa-0" col="10">
        <div class="text-body-1 black--text" data-test="site-detail-address">
          {{ siteInfo.contactAddress }}
        </div>
      </v-flex>
    </v-row>
  </div>
</template>

<script lang="ts">
import { ISiteInformation } from '@/types';
import Vue from 'vue';

export default Vue.extend({
  name: 'SiteDetail',

  props: {
    /** The index of current site in the list. */
    siteInfo: {
      type: Array as () => Array<ISiteInformation>,
      required: true,
      default: null,
    },
  },
});
</script>

<style scoped lang="scss">
.image {
  height: 50% !important;
  width: 50% !important;
  display: block !important;
  margin: auto !important;
}
</style>
