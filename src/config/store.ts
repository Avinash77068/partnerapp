import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

// Import your reducers here
// import someReducer from './someSlice';

const rootReducer = combineReducers({
  // Add your reducers here
  // some: someReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
