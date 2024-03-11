import {AuthTypes} from '@typedef/store/auth.types';
import {CounterAction} from './actions';
import {UPDATE_AUTH} from './modules/actionTypes';

type CounterState = {
  data: AuthTypes;
};

const initialState: CounterState = {
  data: {
    uid: '',
    displayName: '',
    id: '',
    profileImage: null,
    status: 'Deactive',
    email: '',
    createdAt: new Date(),
  },
};

const auth = (
  state: CounterState = initialState,
  {type, payload}: CounterAction,
): CounterState => {
  switch (type) {
    case UPDATE_AUTH:
      return {
        ...state,
        data: payload as AuthTypes,
      };

    default:
      return state;
  }
};

export default auth;
