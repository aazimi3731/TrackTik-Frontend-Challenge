<template>
  <transition name="fade" mode="out-in">
    <page-content title="TrackTik Front-End Test">
      <template slot="default">
        <div :class="`${!$vuetify.breakpoint.xsOnly ? 'imageGroup' : ''}`">
          <v-img
            src="https://www.tracktik.com/wp-content/uploads/2019/09/security-desk-min.jpg"
            data-test="home-image1" />
          <v-img
            src="@/assets/img/video-bg-guarding-suite-1024x575.jpg"
            data-test="home-image2" />
          <v-img
            src="@/assets/img/guard-tour-system-mobile-main-e1478528365909-1.png"
            data-test="home-image3" />
        </div>
      </template>
    </page-content>
  </transition>
</template>

<script lang='ts'>
import Vue from 'vue';
import PageContent from '@/views/Components/PageContent.vue';

export default Vue.extend({
  name: 'HomeLayout',
  components: {
    PageContent,
  },
});
</script>

<style>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s ease;
}

.imageGroup {
  height: 50% !important;
  width: 50% !important;
  display: block !important;
  margin: auto !important;
}
</style>
