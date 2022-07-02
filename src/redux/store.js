/* eslint-disable prettier/prettier */
import {applyMiddleware, createStore} from 'redux';
import ReduxThunk from 'redux-thunk';
import Rootreducer from './rootReducers';

const store = createStore(Rootreducer, applyMiddleware(ReduxThunk));

export default store;
