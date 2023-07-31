import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userSlice from './reducer/userSlice';

const reducer = combineReducers({
  userSlice,
});

export const setupStore = () => {
  return configureStore({
    devTools: true,
    reducer: reducer,
  });
};

export type RootState = ReturnType<typeof reducer>;

export type RootStore = ReturnType<typeof setupStore>;

export type AppDispatch = RootStore['dispatch'];
