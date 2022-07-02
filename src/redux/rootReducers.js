/* eslint-disable prettier/prettier */
import {combineReducers} from 'redux';
import movieReducer from './reducers/movieReducer';

const Rootreducer = combineReducers({
  movieReducer,
});

export default Rootreducer;
