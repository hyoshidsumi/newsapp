import { configureStore } from '@reduxjs/toolkit';
// redux-persistent
import { combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import userReducer from './userSlice';

const persistConfig1 = {
    key: 'root',
    storage: AsyncStorage
}

const rootReducer1 = combineReducers({
    user: userReducer,
});

const persistedReducer1 = persistReducer(persistConfig1, rootReducer1);

export const store1 = configureStore({
    reducer: persistedReducer1,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor1 = persistStore(store1);