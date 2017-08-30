import { IAppState } from './app.store';
import { ActionReducerMap } from '@ngrx/store';

import { ISecondSectionState } from './../second-section/store/second-section.store';
import { IFirstSectionState } from './../first-section/store/first-section.store';
import { AppAction, APP_INIT_ACTION, APP_START_ACTION } from './app.actions';

export interface IAppState {
  modelState: IModelState;
}

interface IModelState {
  id: number;
}

const modelStateReducer = (state: IModelState, action: AppAction): IModelState => {
  switch (action.type) {
    case APP_INIT_ACTION:
      return Object.assign({}, state, {id: action.payload});
    default:
      return state;
  }
};


export const appReducerMap: ActionReducerMap<IAppState> = {
  modelState: modelStateReducer
};
