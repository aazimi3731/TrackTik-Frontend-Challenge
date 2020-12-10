<template>
  <transition name="fade" mode="out-in">
    <page-content
      :outer-scroll="true"
      title="Sites"
      :search-section="true"
      search-title="All Sites"
      filter-key="sites"
      :filter-options="filterOptions"
      @search="searchSites"
      @update:appliedFilter="onApplyFilter">
      <template slot="default">
        <div v-if="this.$store.state.app.itemsGridShow">
          <sites-grid :sites="sites" />
        </div>
        <div v-else>
          <sites-list :sites="sites" />
        </div>
      </template>
    </page-content>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue';
import { ISite, IFilterOption, EFilterType } from '@/types';
import { SiteService } from '@/services';
import PageContent from '@/views/Components/PageContent.vue';
import SitesGrid from '../Components/SitesGrid.vue';
import SitesList from '../Components/SitesList.vue';

export default Vue.extend({
  name: 'SitesLayout',

  components: {
    PageContent,
    SitesGrid,
    SitesList,
  },

  data() {
    return {
      sites: [] as Array<ISite>,
    };
  },

  computed: {
    // Set filter options.
    filterOptions(): Array<IFilterOption> {
      return [{
        key: 'title',
        type: EFilterType.Text,
        label: 'Site Name',
      }, {
        key: 'address.city',
        type: EFilterType.Text,
        label: 'City',
      }, {
        key: 'address.country',
        type: EFilterType.Text,
        label: 'Country',
      }, {
        key: 'clientId',
        type: EFilterType.Text,
        label: 'Client',
      }];
    },
  },

  async created() {
    this.sites = await this.$store.dispatch('siteModule/fetchSites');
  },

  methods: {
    async searchSites(search: string): Promise<void> {
      const siteRes = await SiteService.getSearch(search);

      if (!siteRes.success) throw siteRes;

      this.sites = siteRes.data;

      this.$store.commit('siteModule/setProperties', {
        sites: this.sites,
      });
    },

    // I have not time to complete filtering sites. I did only some procesures of filtering
    // the sites list.
    async onApplyFilter(filterOptions: Array<IFilterOption>): Promise<void> {
      const filtersList = [] as Array<Record<string, string>>;

      // Currently, the following statement is not correct. It is needed to be modified.
      filterOptions.forEach((option) => {
        filtersList.push({ text: option.key, value: option.key });
      });

      const res = await SiteService.getFilter(filtersList);

      if (res.success) {
        this.sites = res.data.items;
      }
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
