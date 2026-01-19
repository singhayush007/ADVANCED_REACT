import {createStore} from 'redux';
import rootReducer from './reducer/index.js';
import session from 'redux-persist/lib/storage';
import {persistStore , persistReducer} from 'redux-persist'


const persistConfig = {
    key: 'mystore',
    storage: session,
    blackList: ['productReducer']
}


const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(
    persistedReducer
);

export default store;