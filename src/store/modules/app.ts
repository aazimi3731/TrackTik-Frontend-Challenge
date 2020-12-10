import { IAppState } from '@/store/types';
import { setVuexProperties } from '@/store/helpers';

const getDefaultState = (): IAppState => ({
  leftMenuExpanded: false,
  leftMenuVisible: false,
  itemsGridShow: true,
});

const moduleState = getDefaultState();

const mutations = {
  setProperties: (state: IAppState, props: IAppState) => {
    setVuexProperties(state, props);
  },
};

const getters = {
};

const actions = {
};

export default {
  namespaced: true,
  state: moduleState,
  mutations,
  getters,
  actions,
};
