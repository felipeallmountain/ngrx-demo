import { Action } from '@ngrx/store';

export const FIRST_SECTION_LANDED = '[first-section] first section landed';

export class LandFirstSectionAction implements Action {
  readonly type = FIRST_SECTION_LANDED;

  constructor(public payload: string) {}
}
