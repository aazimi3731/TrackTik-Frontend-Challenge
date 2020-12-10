/* eslint-disable max-len */
import Routes from '../constants/routes';

/* Home */
const HomeLayout = () => import(/* webpackChunkName: "home" */ '@/views/Pages/Home/Layout/HomeLayout.vue');

/* Sitess */
const SitesLayout = () => import(/* webpackChunkName: "sites" */ '@/views/Pages/Sites/Layout/SitesLayout.vue');
const SiteDetails = () => import(/* webpackChunkName: "siteDetail" */ '@/views/Pages/Sites/Components/SiteDetails.vue');

export default [
  {
    path: '',
    name: '',
    component: {
      render(c) { return c('router-view'); },
    },
    children: [
      {
        path: '',
        component: HomeLayout,
        name: Routes.home.name,
      },
      {
        path: Routes.sites.path,
        component: SitesLayout,
        name: Routes.sites.name,
      },
      {
        path: Routes.siteDetails.path,
        component: SiteDetails,
        name: Routes.siteDetails.name,
      },
    ],
  },
];
