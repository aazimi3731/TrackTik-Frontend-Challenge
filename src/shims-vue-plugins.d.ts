/* eslint-disable @typescript-eslint/interface-name-prefix */
import VueRouter, { Route } from 'vue-router';
import { Store } from 'vuex';
import { Toasted } from 'vue-toasted';

declare module 'vue/types/vue' {
  interface Vue {
    $router: VueRouter;
    $route: Route;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    $store: Store<any>;
    $toasted: Toasted;
  }
}
