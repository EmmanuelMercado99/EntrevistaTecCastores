
import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './slices/globalStates';
import userReducer from './slices/userSlices';

const store = configureStore({
  reducer: {
    loginSession: loginReducer,
    userData: userReducer
  },
});

export default store;