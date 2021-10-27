import { IVariantState, initialIVariantState } from '../states/variant.state';

import { EVariantActions, VariantActions } from '../actions/variant.actions';

export function variantReducers(
  state = initialIVariantState,
  action: VariantActions,
): IVariantState {
  switch (action.type) {
    case EVariantActions.GetVariantSuccess: {
      if (state.variant) {
        return {
          ...state,
          variant: state.variant,
        };
      }
      return {
        ...state,
        variant: action.payload,
      };
    }

    default : return state;
  }
}
