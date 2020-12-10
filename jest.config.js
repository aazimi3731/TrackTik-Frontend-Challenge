const Vue = require('vue');
const Vuetify = require('vuetify');

Vue.use(Vuetify);

module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  collectCoverage: false,
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!src/template/**',
    '!src/plugins/**',
    '!src/router/**',
    '!src/test/**',
    '!src/main.js', // No need to cover bootstrap file
  ],

  testEnvironmentOptions: {
    // Allow test environment to fire onload event
    // See https://github.com/jsdom/jsdom/issues/1816#issuecomment-355188615
    resources: 'usable',
  },
};
