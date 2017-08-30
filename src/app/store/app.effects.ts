import { APP_START_ACTION, AppStartAction } from './app.actions';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class AppEffects {

  constructor(private actions: Actions) {}

  // @Effect()
  // getAppData$: Observable<Action> = this.actions
  //   .ofType(APP_START_ACTION)
  //   .switchMap(() => {
      
  //   })

}
