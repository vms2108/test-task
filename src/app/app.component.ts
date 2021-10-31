import {Component, OnInit} from '@angular/core';
import {Store } from '@ngrx/store';
import { IAppState } from './store/states/app.state';
import {EVariantActions} from './store/actions/variant.actions';
import {Observable} from 'rxjs';
import { Variant } from './common/models/variant';
import {IVariantState} from './store/states/variant.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  variant$: Observable<IVariantState> = this.store.select(state => state.variant);
  public variant: Variant = null;

  constructor(
    private store: Store<IAppState>
  ) {
  }

  ngOnInit(): void {
    this.store.dispatch({type: EVariantActions.UpdateVariant});

    this.variant$.subscribe(res => {
      this.variant = res.variant;
    });
  }

}
