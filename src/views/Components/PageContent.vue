<template>
  <div
    v-resize="onResize"
    :class="{'outer-scroll': outerScroll, 'pageContent grey lighten-4': true}"
    v-bind="$attrs"
    class="pa-0">
    <div class="d-flex flex-grow-1 flex-column fill-height">
      <v-card class="full-width" flat tile>
        <v-toolbar color="blue" dark flat class="headerToolbar">
          <v-icon v-if="showBackButton" class="mr-3" color="white" size="36" data-test="pageContent-backButton" @click="$emit('back')">
            mdi-chevron-left
          </v-icon>

          <v-img v-if="showImage" :src="imageAddress" class="mr-3" color="white" max-width="50" size="36" data-test="pageContent-headerImage" />

          <v-toolbar-title :class="{'ml-auto': !showImage && !showBackButton, 'mr-auto': true}">
            <div class="text-subtitle1 white--text" data-test="page-title">
              {{ title }}
            </div>
            <div v-if="subtitle1 != ''" class="text-subtitle2 black--text text-wrap" data-test="page-subtitle1">
              {{ subtitle1 }}
            </div>
            <div v-if="subtitle2 != ''" class="text-subtitle2 black--text text-wrap" data-test="page-subtitle2">
              {{ subtitle2 }}
            </div>
          </v-toolbar-title>
        </v-toolbar>

        <v-toolbar v-if="searchSection" color="white" dark flat class="flex-grow-0 searchToolbar">
          <v-toolbar-title class="mr-auto">
            <div class="text-body-1 font-weight-bold black--text" data-test="page-searchTitle">
              {{ searchTitle }}
            </div>
          </v-toolbar-title>

          <v-icon class="mr-3" color="grey" size="30" data-test="pageContent-filterButton">
            mdi-filter-variant
          </v-icon>

          <v-toolbar-items>
            <v-text-field
              v-if="showSearch"
              v-model="search"
              class="pageContent__search"
              data-test="pageContent-search"
              filled
              flat
              height="25"
              label="quick search"
              background-color="primary"
              single-line
              hide-details
              clearable
              @input="emitSearchEvent" />
          </v-toolbar-items>
          <v-icon class="ml-2" color="black" size="24" data-test="pageContent-searchButton" @click="activeSearchField">
            mdi-magnify
          </v-icon>
        </v-toolbar>

        <div id="scrollAnchor" class="pageContentCard__content">
          <div class="full-width">
            <slot name="default" />
          </div>
        </div>
      </v-card>
    </div>
    <!--
    <filter-toolbar
      :filter-key="filterKey"
      :filter-options="filterOptions"
      @update:selectedFilter="this.$emit('update:appliedFilter', filters);" />
    -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
// import FilterToolbar from '@/components/FilterToolbar/FilterToolbar.vue';
import { IFilterOption } from '@/types';

export default Vue.extend({
  name: 'PageContent',

  components: {
    // FilterToolbar,
  },

  props: {
    /**
     * This is the title of page content section
     */
    title: {
      type: String,
      required: true,
    },
    /**
     * This is the smaller than title that appears below title
     */
    subtitle1: {
      type: String,
      default: '',
    },
    /**
     * This is the smaller than title that appears below subtitle1
     */
    subtitle2: {
      type: String,
      default: '',
    },
    /**
     * This is the title of the search section
     */
    searchTitle: {
      type: String,
      default: '',
    },
    /**
     * Whether or not to show the image
     */
    showImage: {
      type: Boolean,
      default: false,
    },
    /**
     * The image aggress
     */
    imageAddress: {
      type: String,
      default: '',
    },
    /**
     * Data test attribute to put on the add button
     */
    addButtonDataTest: {
      type: String,
      default: 'pageContent__addBtn',
    },
    /**
     * Whether or not to show the search section
     */
    searchSection: {
      type: Boolean,
      default: false,
    },
    /**
     * Turn on/off outerScroll mode. When on, the inner content is not scrollable. but the card itself is
     */
    outerScroll: {
      type: Boolean,
      default: false,
    },
    /**
     * Whether or not to show the back button
     */
    showBackButton: {
      type: Boolean,
      default: false,
    },
    filterKey: {
      type: String,
      default: '',
    },
    filterOptions: {
      type: Array as () => Array<IFilterOption>,
      default: null,
    },
  },

  data() {
    return {
      showSearch: false,
      showFilter: false,
      search: '',
    };
  },

  /**
   * Will open a new window containing an contextual help
   * @public
   */
  methods: {
    /**
    * Change the arrangement of the items such as sites from grid view to list view
    * when the size of the element is smaller than a mobile size.
    */
    onResize(): void {
      if (this.$vuetify.breakpoint.xsOnly) {
        this.$store.commit('app/setProperties', {
          itemsGridShow: false,
        });
      }
    },

    emitSearchEvent() {
      this.$emit('search', this.search);
    },

    activeSearchField() {
      this.showSearch = !this.showSearch;
      this.search = '';
      this.emitSearchEvent();
    },
  },
});
</script>

<style lang="scss" scoped>
.outer-scroll {
  &.pageContent {
    overflow-y: auto;
    max-height: 100%;
    border: 1px solid black !important;
  }
  & .pageContentCard__content {
    overflow-y: unset;
  }
}

.v-toolbar__items {
  align-items: center;
}

.pageContent__search {
  & ::v-deep .v-input__slot {
    min-height: 25px !important;
  }
  & ::v-deep .v-label {
    top: 2px;
  }
  & ::v-deep .v-input__append-inner {
    padding: 0px !important;
    margin: 0px !important;
  }
}

.text-wrap {
  word-break: break-all;
  word-wrap: break-word;
}

.headerToolbar {
  height:unset !important;
  min-height: 100% !important;
  & ::v-deep .v-toolbar__content {
    height:unset !important;
    min-height: 70px !important;
  }
}

.searchToolbar {
  height: 37px !important;
  border-top: 3px solid black !important;
  border-bottom: 2px solid black !important;
  & ::v-deep .v-toolbar__content {
    height: 30px !important;
  }
}
</style>
