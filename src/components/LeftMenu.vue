<template>
  <v-navigation-drawer
    id="left-menu-dashboard"
    :value="show"
    :mini-variant="mini"
    mini-variant-width="80"
    :mobile-breakpoint="$vuetify.breakpoint.thresholds.sm"
    app
    left
    :temporary="temporary"
    clipped
    @input="updateShow">
    <v-list nav>
      <v-tooltip
        v-for="(item, index) in items"
        :key="index"
        right
        :disabled="!mini"
        :open-delay="uiConstants.tooltip_open_delay">
        <template v-slot:activator="{ on } ">
          <v-list-item
            link
            class="navMenu"
            active-class="navMenu__active"
            :to="{ name: item.to }"
            :exact="typeof item.exact === 'undefined' ? true : item.exact"
            :data-test="item.test"
            v-on="on"
            @click="onClickOutside">
            <v-list-item-icon>
              <v-icon color="primary darken-1">
                {{ item.icon }}
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content><v-list-item-title>{{ item.text }}</v-list-item-title></v-list-item-content>
          </v-list-item>
        </template>
        <span>{{ item.text }}</span>
      </v-tooltip>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from 'vue';
import routes from '@/constants/routes';
import ui from '@/constants/ui';
import { INavigationTab } from '@/types/interfaces/INavigationTab';

export default Vue.extend({
  name: 'LeftMenu',

  data() {
    return {
      leftMenu: true,
      routes,
      items: [
        {
          to: 'Home',
          icon: 'mdi-home',
          text: 'Main Page',
          test: 'home',
        },
        {
          to: 'Sites',
          icon: 'mdi-web',
          text: 'Sites',
          test: 'sites',
        },
      ] as Array<INavigationTab>,
    };
  },

  computed: {
    mini() {
      if (this.$vuetify.breakpoint.smAndDown) {
        return false;
      }
      return !this.$store.state.app.leftMenuExpanded;
    },

    temporary() {
      return this.$vuetify.breakpoint.smAndDown;
    },

    show() {
      if (this.$vuetify.breakpoint.smAndDown) {
        return this.$store.state.app.leftMenuVisible;
      }
      return true;
    },

    breakpoint() {
      return this.$vuetify.breakpoint.name;
    },

    uiConstants() {
      return ui;
    },
  },

  methods: {
    updateShow(value: boolean) {
      this.$store.commit('app/setProperties', {
        leftMenuVisible: value,
      });
    },

    onClickOutside() {
      this.$store.commit('app/setProperties', {
        leftMenuExpanded: false,
      });
    },
  },
});
</script>

<style scoped lang="scss">
#left-menu-dashboard {
  .v-list-item .v-list-item__title {
    font-weight: 400;
  }
}

.v-navigation-drawer--mini-variant {
  .navMenu__active::before {
    border-radius: 50%;
    width: 48px;
    height: 48px;
    margin: auto;
  }
}
</style>
