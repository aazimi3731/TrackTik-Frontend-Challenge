import { ActionContext } from 'vuex';
import { ISite } from '@/types';
import { SiteService } from '@/services';
import { setVuexProperty, setVuexProperties, resetVuexModuleState } from '@/store/helpers';
import { IRootState, ISiteState } from '@/store/types';

const getDefaultState = (): ISiteState => ({
  sites: [],
  site: {
    id: '',
    clientId: '',
    title: '',
    createdAt: 'Sun Apr 26 2020 12:03:38 GMT+0000 (UTC)',
    updatedAt: 'Sat Dec 05 2020 15:43:57 GMT+0000 (UTC)',
    contacts: {
      main: {
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        jobTitle: '',
        address: {
          zipCode: '',
          city: '',
          street: '',
          country: 'Canada',
          state: 'QC',
        },
      },
    },
    address: {
      zipCode: '',
      city: '',
      street: '',
      country: 'Canada',
      state: 'QC',
    },
    images: [],
    tags: [],
  },
  siteInformation: {
    id: '',
    title: '',
    image: '',
    completeAddress: '',
    address: '',
    tags: '',
    contact: '',
    contactName: '',
    contactJob: '',
    contactPhone: '',
    contactEmail: '',
    contactAddress: '',
  },
});

const moduleState = getDefaultState();

const getters = {
  sites: (state: ISiteState) => state.sites,
  site: (state: ISiteState) => state.site,
  siteInformation: (state: ISiteState) => state.siteInformation,
  getSiteInformation: () => (site: ISite) => {
    const contactName = `${site.contacts.main.firstName} ${site.contacts.main.lastName}`;
    const contact = `${contactName}, ${site.contacts.main.jobTitle}`;
    const address = `${site.address.state} ${site.address.zipCode} , ${site.address.country}`;
    const completeAddress = `${site.address.street}, ${site.address.city}, ${address}`;
    let contactAddress = `${site.contacts.main.address.street}, ${site.contacts.main.address.city}, `;
    contactAddress += `${site.contacts.main.address.state} ${site.contacts.main.address.zipCode} , ${site.contacts.main.address.country}`;
    return {
      id: site.id,
      title: site.title,
      image: site.images[0],
      completeAddress,
      address,
      tags: site.tags.join(', '),
      contact,
      contactName,
      contactJob: site.contacts.main.jobTitle,
      contactPhone: site.contacts.main.phoneNumber,
      contactEmail: site.contacts.main.email,
      contactAddress,
    };
  },
};

const mutations = {
  setProperties: (state: ISiteState, props: ISiteState) => {
    setVuexProperties(state, props);
  },

  setProperty: (state: ISiteState, { key, value }: { key: keyof ISiteState; value: ISiteState }) => {
    setVuexProperty(state, key, value);
  },

  setSite(state: ISiteState, payload: ISite) {
    state.site = payload;
  },

  resetState(state: ISiteState) {
    resetVuexModuleState(state, getDefaultState);
  },
};

const actions = {
  fetchSite: async (context: ActionContext<ISiteState, IRootState>, { siteId }: { siteId: string }) => {
    const siteRes = await SiteService.getById(siteId);

    if (!siteRes.success) throw siteRes;

    const { data } = siteRes;

    context.commit('setProperties', {
      site: data,
    });
  },

  fetchSites: async (context: ActionContext<ISiteState, IRootState>) => {
    const sitesRes = await SiteService.getAll();

    if (!sitesRes.success) throw sitesRes;

    const { data } = sitesRes;

    context.commit('setProperties', {
      sites: data,
    });

    return data;
  },
};

export default {
  namespaced: true,
  state: moduleState,
  getters,
  mutations,
  actions,
};
