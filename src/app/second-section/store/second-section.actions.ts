import { Action } from '@ngrx/store';

export const SECOND_SECTION_INIT = '[second] section init';

export class InitSecondSection implements Action {
  readonly type = SECOND_SECTION_INIT;
  constructor(public payload: number) {}
}

export type SecondSectionAction = InitSecondSection;
