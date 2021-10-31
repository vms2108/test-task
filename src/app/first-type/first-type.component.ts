import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {IVariantState} from '../store/states/variant.state';
import {Store} from '@ngrx/store';
import {IAppState} from '../store/states/app.state';
import {Variant} from '../common/models/variant';
import {VariantService} from '../common/services/variant.service';

@Component({
  selector: 'app-first-type',
  templateUrl: './first-type.component.html',
  styleUrls: ['./first-type.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class FirstTypeComponent implements OnInit {
  variant$: Observable<IVariantState> = this.store.select(state => state.variant);
  public variant: Variant = null;
  public currencySign: string = null;

  constructor(
    private store: Store<IAppState>,
    private variantService: VariantService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
  }

  public ngOnInit(): void {
    this.variant$.subscribe(res => {
      this.variant = res.variant;
      this.currencySign = this.variantService.getCurrency(this.variant.currency);
      this.changeDetectorRef.markForCheck();
    });
  }

}
