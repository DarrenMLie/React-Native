import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'  (defaults to localStorage for web & old storage syntax)
import AsyncStorage from '@react-native-async-storage/async-storage' 

import reducer from './reducers'
// create store & persistor
const persistConfig = {
  key: 'root',
  // storage,
  storage: AsyncStorage,
}
 
const persistedReducer = persistReducer(persistConfig, reducer)
 
export const store = createStore(persistedReducer)
export const persistor = persistStore(store)
