<template>
  <div class="filterToolbar__container">
    <filter-panel
      v-on="$listeners"
      :show.sync="showFilterPanel"
      :filter-key="filterKey"
      :filter-options="filterOptions"
      :selected-filter.sync="selectedFilter" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import FilterPanel from './FilterPanel.vue';

import { IFilterOption } from '@/types';

export default Vue.extend({
  name: 'FilterToolbar',
  components: {
    FilterPanel,
  },
  props: {
    filterKey: {
      type: String,
      required: true,
    },
    filterOptions: {
      type: Array as () => Array<IFilterOption>,
      required: true,
    },
  },

  data() {
    return {
      showFilterPanel: false,
      selectedFilter: {},
    };
  },
  watch: {
    selectedFilter(newValue) {
      const filters: Array<string> = [];
      this.$emit('update:selectedFilter', filters);
    },
  },
});
</script>

<style scoped lang="scss">
.filterToolbar__container {
  position: relative;
  border-bottom: 1px solid;
  border-color: grey;

  & ::v-deep .v-btn {
    margin-right: 12px;
    color: grey;
  }

  & ::v-deep .v-btn:last-child {
    margin-right: 0;
  }
}
</style>
