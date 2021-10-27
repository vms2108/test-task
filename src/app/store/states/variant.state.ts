import { Variant } from '../../common/models/variant';


export interface IVariantState {
  variant: Variant | null;
}

export const initialIVariantState: IVariantState = {
  variant: null,
};
