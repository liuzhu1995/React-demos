/**
 * @Description: Store
 * @author LiuZhu
 * @date 2019/3/28
*/
import {createStore, combineReducers} from 'redux'
import {reducer as todoReducer} from './todos';
import {reducer as filterReducer} from './filter';

const reducer = combineReducers({
  todos: todoReducer,
  filter: filterReducer
});

export default createStore(reducer);