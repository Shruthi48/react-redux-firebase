import { combineReducers } from 'redux';
import { reducer as formReducer }  from 'redux-form';
import  PostReducer  from './PostReducer';
import StatesReducer from './StatesReducer';
import CitiesReducer from './CitiesReducer';
import AreasReducer from './AreasReducer';

const rootReducer = combineReducers({
    form: formReducer,
    posts: PostReducer,
    states: StatesReducer,
    cities: CitiesReducer,
    areas: AreasReducer
});

export default rootReducer;