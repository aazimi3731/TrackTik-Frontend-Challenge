<template>
  <v-row class="full-width justify-end" no-gutters>
    <v-img :src="site.image" class="mr-auto" color="white" max-width="100" size="48" :data-test="`site-image-${index}`" />
    <v-flex class="font-weight-bold pa-0 ml-3" sm="12" md="10">
      <div class="text-body-1 black--text" :data-test="`site-title-${index}`">
        {{ site.title }}
      </div>
      <div class="text-body-2 black--text" :data-test="`site-address-${index}`">
        {{ site.completeAddress }}
      </div>
      <div class="text-body-2 black--text" :data-test="`site-contact-${index}`">
        {{ site.contact }}
      </div>
    </v-flex>
    <v-flex class="pa-0" shrink justify="left" align-self-center sm="12" md="2">
      <v-tooltip :open-delay="ui.tooltip_open_delay" bottom>
        <template v-slot:activator="{ on }">
          <v-btn
            icon
            height="24"
            class="mr-2"
            :data-test="`site-button-${index}`"
            v-on="on"
            @click="siteDetails(site)">
            <v-icon size="24" color="grey darken-2">
              mdi-chevron-right
            </v-icon>
          </v-btn>
        </template>
        <span>show: site detail</span>
      </v-tooltip>
    </v-flex>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
import ui from '@/constants/ui';
import routes from '@/constants/routes';
import { ISite } from '@/types';

export default Vue.extend({
  name: 'SiteList',

  props: {
    /** The current site in the list. */
    site: {
      type: Object,
      default: null,
    },
    /** The index of current site in the list. */
    index: {
      type: Number,
      default: 0,
    },
  },

  data() {
    return {
      ui,
    };
  },

  methods: {
    /**
    * Show the site details.
    */
    siteDetails(site: ISite) {
      this.$store.commit('siteModule/setProperties', { siteInformation: site });
      this.$router.push({ name: routes.siteDetails.name });
    },
  },
});
</script>
