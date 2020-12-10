/* eslint-disable import/no-extraneous-dependencies */
import {
  createLocalVue as clv,
  mount as m,
  shallowMount as sm,
} from '@vue/test-utils';
import '@testing-library/jest-dom';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import deepmerge from 'deepmerge';

import Vue from 'vue';

const vuetify = new Vuetify({
  mocks: {
    $vuetify: {
      goTo: jest.fn(),
    },
  },
});

Vue.use(Vuetify);

export const createLocalVue = () => {
  const localVue = clv();
  localVue.use(Vuetify);
  localVue.use(Vuex);

  return localVue;
};

const mocks = {
  $router: {
    replace: jest.fn(),
    push: jest.fn(),
    go: jest.fn(),
  },
  $route: { params: { id: 'id' } },
};

export const mount = (Component, options) => {
  if (!options.localVue) {
    throw new Error('Must pass in localVue instance.');
  }

  document.body.setAttribute('data-app', true);

  return m(Component, {
    stubs: ['router-link', 'router-view'],
    vuetify,
    sync: false,
    ...options,
  });
};

export const shallowMount = (Component, options) => {
  if (!options.localVue) {
    throw new Error('Must pass in localVue instance.');
  }

  document.body.setAttribute('data-app', true);

  return sm(Component, {
    stubs: ['router-link', 'router-view'],
    vuetify,
    sync: false,
    ...options,
  });
};
