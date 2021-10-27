import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';

import { IAppState } from '../states/app.state';

import { variantReducers } from './variant.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  variant: variantReducers
};
