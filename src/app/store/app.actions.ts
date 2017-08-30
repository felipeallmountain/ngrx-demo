import { Action } from '@ngrx/store';

export const APP_INIT_ACTION = '[app] init action';
export const APP_START_ACTION = '[app] start action';

export class AppInitAction implements Action {
  readonly type = APP_INIT_ACTION;
  constructor(public payload: number) {}
}

export class AppStartAction implements Action {
  readonly type = APP_START_ACTION;
}

export type AppAction = AppInitAction | AppStartAction;
