import { LandFirstSectionAction, FIRST_SECTION_LANDED } from './first-section.actions';
export interface IFirstSectionState {
  selectedId: string;
}

const firstSectionInitialState: IFirstSectionState = {
  selectedId: 'f11'
};

export const firstSectionReducer =
  (state: IFirstSectionState,
    action: LandFirstSectionAction): IFirstSectionState => {
  switch (action.type) {
    case FIRST_SECTION_LANDED:
      return Object.assign({}, state, {selectedId: action.payload});
    default:
      return state;
  }
};
