import {updateLoading} from '@store/layouts/actions';
import {RootState} from '@typedef/store/store.types';
import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';

function useLoading() {
  const dispatch = useDispatch();

  const isLoading = useSelector((state: RootState) => state.layouts.isLoading);

  const __updateLoadingFromHooks = useCallback(
    (diff: boolean) => dispatch(updateLoading(diff)),
    [dispatch],
  );

  return {
    isLoading,
    __updateLoadingFromHooks,
  };
}
export default useLoading;
