<template>
  <!-- App.vue -->
  <v-app class="full-width ma-0 pa-0 grey lighten-4">
    <app-header />
    <LeftMenu :mini.sync="miniLeftMenu" :show.sync="showLeftMenu" />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Vue from 'vue';
import AppHeader from './components/AppHeader.vue';
import LeftMenu from './components/LeftMenu.vue';

export default Vue.extend({
  name: 'App',

  components: {
    AppHeader,
    LeftMenu,
  },

  data() {
    return {
      showLeftMenu: true,
      miniLeftMenu: true,
    };
  },
});
</script>
