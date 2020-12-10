<template>
  <div>
    <v-app-bar color="blue" app clipped-right clipped-left class="elevation-2">
      <v-app-bar-nav-icon class="mr-auto" data-test="left-menu-trigger" @click.stop="handleLeftMenu">
        <v-icon color="black" size="36">
          mdi-menu
        </v-icon>
      </v-app-bar-nav-icon>
      <v-toolbar-title class="mr-auto">
        <span class="text-h5 white--text" data-test="appHeader-title">Scheduling</span>
      </v-toolbar-title>

      <v-btn v-if="iconGridShow" class="mr-4" icon data-test="grid-show-trigger" @click="changeItemsShow">
        <v-icon color="black" size="36">
          {{ $store.state.app.itemsGridShow ? 'mdi-format-list-bulleted-square' : 'mdi-view-comfy' }}
        </v-icon>
      </v-btn>

      <v-btn class="mr-1" icon data-test="right-menu-trigger">
        <v-avatar color="white" size="36">
          <span class="text-h5 font-weight-bold black--text">D</span>
        </v-avatar>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import routes from '@/constants/routes';

export default Vue.extend({
  name: 'Header',

  computed: {
    iconGridShow() {
      return this.$route.name === routes.sites.name && !this.$vuetify.breakpoint.xsOnly;
    },
  },

  mounted() {
    if (this.$vuetify.breakpoint.mobile) {
      this.$store.commit('app/setProperties', {
        itemsGridShow: false,
      });
    }
  },

  methods: {
    handleLeftMenu() {
      if (this.$vuetify.breakpoint.smAndDown) {
        this.$store.commit('app/setProperties', {
          leftMenuVisible: !this.$store.state.app.leftMenuVisible,
        });
      }

      this.$store.commit('app/setProperties', {
        leftMenuExpanded: !this.$store.state.app.leftMenuExpanded,
      });
    },

    changeItemsShow() {
      this.$store.commit('app/setProperties', {
        itemsGridShow: !this.$store.state.app.itemsGridShow,
      });
    },
  },
});
</script>

<style scoped lang="scss">
  .v-app-bar__nav-icon {
    margin-left: 0px!important;
  }
</style>
