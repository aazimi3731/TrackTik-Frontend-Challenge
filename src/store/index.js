// Lib imports
import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';
import Site from './modules/site';
import App from './modules/app';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state,
  getters,
  mutations,
  actions,
  modules: {
    app: App,
    siteModule: Site,
  },
});
