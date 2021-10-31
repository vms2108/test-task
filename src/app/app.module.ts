import { SecondTypeComponent } from './second-type/second-type.component';
import { VariantEffects } from './store/effects/variant.effects';
import { appReducers } from './store/reducers/app.reducers';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FirstTypeComponent } from './first-type/first-type.component';
import { VariantService } from './common/services/variant.service';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { CountdownComponent } from './countdown/countdown.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstTypeComponent,
    SecondTypeComponent,
    CountdownComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    EffectsModule.forRoot([
      VariantEffects,
    ]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [
    VariantService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
