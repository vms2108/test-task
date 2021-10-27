import { VariantService } from './../../common/services/variant.service';
import { UpdateVariant, EVariantActions, GetVariantSuccess, GetSpecialVariant } from './../actions/variant.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class VariantEffects {

  public updateVariant = createEffect(() => {
    return this.actions.pipe(
      ofType<UpdateVariant>(EVariantActions.UpdateVariant),
      switchMap(() => this.variantService.getVariant()),
      switchMap(variant => {
        return of(new GetVariantSuccess(variant));
      }),
    );
  });

  constructor(
    private actions: Actions,
    private variantService: VariantService,
  ) {}
}
