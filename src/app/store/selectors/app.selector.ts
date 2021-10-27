
import { createSelector } from '@ngrx/store';

import { IAppState } from '../states/app.state';

const allDataState = (state: IAppState) => state;

export const selectAllData = createSelector(
  allDataState,
  (state: IAppState) => state ? state : null,
);
