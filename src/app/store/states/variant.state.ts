import { Variant } from '../../common/models/variant';


export interface IVariantState {
  variant: Variant | null;
  type?: 'FirstType' | 'SecondType';
  title?: string;
  price?: number;
  currency?: string;
}

export const initialIVariantState: IVariantState = {
  variant: null,
};
