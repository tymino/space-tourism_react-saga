import { TypedUseSelectorHook, useSelector } from 'react-redux';
import pages from '../redux/reducers/pages';

const useTypedSelector: TypedUseSelectorHook<ReturnType<typeof pages>> = useSelector;

export default useTypedSelector;
