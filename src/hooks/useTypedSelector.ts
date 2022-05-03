import { TypedUseSelectorHook, useSelector } from 'react-redux';
import reducer from '../redux/reducers';

const useTypedSelector: TypedUseSelectorHook<ReturnType<typeof reducer>> = useSelector;

export default useTypedSelector;
