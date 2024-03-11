import {updateAuth} from '@store/auth/actions';
import {AuthTypes} from '@typedef/store/auth.types';
import {RootState} from '@typedef/store/store.types';
import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';

function useAuth() {
  const dispatch = useDispatch();

  const uid = useSelector((state: RootState) => state.auth.data.uid);

  const __updateAuthFromHooks = useCallback(
    (diff: AuthTypes) => dispatch(updateAuth(diff)),
    [dispatch],
  );

  return {
    uid,
    __updateAuthFromHooks,
  };
}
export default useAuth;
