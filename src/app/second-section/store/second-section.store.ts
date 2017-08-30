import { InitSecondSection, SecondSectionAction, SECOND_SECTION_INIT } from './second-section.actions';
export interface ISecondSectionState {
  randomNum: number;
}

const initialSecondSectionState: ISecondSectionState = {
  randomNum: 0
};

export const secondSectionReducer = (state: ISecondSectionState, action: SecondSectionAction) => {
  switch (action.type) {
    case SECOND_SECTION_INIT:
      return Object.assign({}, state, {randomNum: action.payload});
    default:
      return state;
  }
};
