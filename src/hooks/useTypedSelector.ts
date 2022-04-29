import { TypedUseSelectorHook, useSelector } from 'react-redux';
import rootReducer from '../redux/reducers';

const useTypedSelector: TypedUseSelectorHook<ReturnType<typeof rootReducer>> = useSelector;

export default useTypedSelector;