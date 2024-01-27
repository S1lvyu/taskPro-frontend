import { useSelector } from 'react-redux';
import { getBoardIsLoading} from '../redux/selectors';

export const useIsBoardsLoading = () => useSelector(getBoardIsLoading);