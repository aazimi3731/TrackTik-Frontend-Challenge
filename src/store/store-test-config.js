import Vuex from 'vuex';
import _cloneDeep from 'lodash/cloneDeep';
import deepmerge from 'deepmerge';
import Vue from 'vue';
import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';
import Site from './modules/site';
import App from './modules/app';

Vue.use(Vuex);

const testConfig = {
  state,
  getters,
  mutations,
  actions,
  modules: {
    app: App,
    siteModule: Site,
  },
};

export default (overrides = {}) => {
  const baseConfig = _cloneDeep(testConfig);

  const mergedConfig = deepmerge(baseConfig, overrides, {
    arrayMerge: (dest, source) => source,
  });

  return new Vuex.Store(mergedConfig);
};
