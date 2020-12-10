import { ISite, ISiteInformation } from '@/types';

export interface ISiteState {
  sites: Array<ISite>,
  site: ISite,
  siteInformation: ISiteInformation,
};

