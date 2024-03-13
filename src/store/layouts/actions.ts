import {UPDATE_LOADING} from './modules/actionTypes';

export const updateLoading = (payload: boolean) => ({
  type: UPDATE_LOADING,
  payload,
});

export type CounterAction = ReturnType<typeof updateLoading>;
