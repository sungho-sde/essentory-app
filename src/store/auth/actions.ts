import {AuthTypes} from '@typedef/store/auth.types';
import {UPDATE_AUTH} from './modules/actionTypes';

export const updateAuth = (payload: AuthTypes) => ({
  type: UPDATE_AUTH,
  payload,
});

export type CounterAction = ReturnType<typeof updateAuth>;
