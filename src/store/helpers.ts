import Vue from 'vue';
import _get from 'lodash/get';

export function setVuexProperty(state: object, key: string, value: unknown) {
  const split = key.split('.');
  const path = split.slice(0, split.length - 1).join('.');
  const property = split[split.length - 1];

  if (!path) {
    Vue.set(state, property, value);
  } else {
    Vue.set(_get(state, path), property, value);
  }
}

export function setVuexProperties(state: object, props: object) {
  Object.keys(props).forEach((key) => {
    setVuexProperty(state, key, props[key as keyof typeof state]);
  });
}

export function resetVuexModuleState(state: object, getDefaultState: () => object) {
  const defaultState = getDefaultState();
  Object.keys(state).forEach((key) => {
    if (!Object.prototype.hasOwnProperty.call(defaultState, key)) {
      delete state[key as keyof typeof state];
    }
  });
  Object.assign(state, defaultState);
}
