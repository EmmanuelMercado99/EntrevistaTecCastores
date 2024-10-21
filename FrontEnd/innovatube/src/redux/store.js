
import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './slices/globalStates';

const store = configureStore({
  reducer: {
    loginSession: loginReducer,
  },
});

export default store;