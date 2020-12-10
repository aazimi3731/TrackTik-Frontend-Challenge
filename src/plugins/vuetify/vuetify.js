import '@mdi/font/css/materialdesignicons.css';
import 'roboto-fontface/css/roboto/roboto-fontface.css';

import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import light from './light-theme';
import dark from './dark-theme';

Vue.use(Vuetify);

export const options = {
  theme: {
    themes: {
      light,
      dark,
    },
  },
  icons: {
    iconfont: 'mdi', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4'
  },
};

export default new Vuetify(options);
