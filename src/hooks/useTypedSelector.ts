import { TypedUseSelectorHook, useSelector } from 'react-redux';
import reducer from '../redux/reducer';

const useTypedSelector: TypedUseSelectorHook<ReturnType<typeof reducer>> = useSelector;

export default useTypedSelector;