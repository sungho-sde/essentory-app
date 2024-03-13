import {CounterAction} from './actions';
import {UPDATE_LOADING} from './modules/actionTypes';

type CounterState = {
  isLoading: boolean;
};

const initialState: CounterState = {
  isLoading: false,
};

const layouts = (
  state: CounterState = initialState,
  {type, payload}: CounterAction,
): CounterState => {
  switch (type) {
    case UPDATE_LOADING:
      return {
        ...state,
        isLoading: payload as boolean,
      };
    default:
      return state;
  }
};

export default layouts;
