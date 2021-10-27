import { IVariantState, initialIVariantState } from './variant.state';
import { RouterReducerState } from '@ngrx/router-store';


export interface IAppState {
  router?: RouterReducerState;
  variant: IVariantState;
  // lifeTimeProduct:
}

export const initialAppState: IAppState = {
  variant: initialIVariantState,

};

export function getInitialState(): IAppState {
  return initialAppState;
}
