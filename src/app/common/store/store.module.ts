import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../../environments/environment';
import { reducers } from './reducers';

const devOnlyModules = environment.production ? [] : [
    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ]

@NgModule({
    imports: [
      StoreModule.forRoot(reducers),
      EffectsModule.forRoot([]),
      ...devOnlyModules
    ]
  })
export class CargoManiaStoreModule {
}
