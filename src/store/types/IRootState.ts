import { IAppState } from './IAppState';
import { ISiteState } from './ISiteState';

export interface IRootState {
  app: IAppState;
  siteModule: ISiteState;
}
