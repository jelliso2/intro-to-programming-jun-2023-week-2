import { Routes } from '@angular/router';
import { CounterComponent } from './counter.component';
import { FEATURE_NAME, reducers } from './state';
import { provideState } from '@ngrx/store';

export const COUNTER_ROUTES: Routes = [
  {
    path: '',
    component: CounterComponent,
    providers: [provideState(FEATURE_NAME, reducers)],
  },
];
