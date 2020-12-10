<template>
  <transition name="fade" mode="out-in">
    <page-content
      :outer-scroll="true"
      show-back-button
      show-image
      :image-address="siteInfo.image"
      :title="siteInfo.title"
      :subtitle1="siteInfo.address"
      :subtitle2="siteInfo.contactName"
      search-title="All Sites"
      @back="sitesPage()">
      <template slot="default">
        <site-detail :site-info="siteInfo" />
      </template>
    </page-content>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue';
import { ISiteInformation } from '@/types';
import routes from '@/constants/routes';
import PageContent from '@/views/Components/PageContent.vue';
import SiteDetail from './SiteDetail.vue';

export default Vue.extend({
  name: 'SiteDetails',
  components: {
    PageContent,
    SiteDetail,
  },

  data() {
    return {
      siteInfo: {} as ISiteInformation,
    };
  },

  created() {
    this.siteInfo = this.$store.state.siteModule.siteInformation as ISiteInformation;
  },

  methods: {
    /**
    * Show the sites.
    */
    sitesPage() {
      this.$router.push({ name: routes.sites.name });
    },
  },
});
</script>

<style scoped>
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s ease;
}
</style>
