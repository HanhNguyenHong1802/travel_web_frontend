import {createStore, combineReducers,applyMiddleware} from 'redux';
import { Authentication } from './authentication';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            user: Authentication,
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}