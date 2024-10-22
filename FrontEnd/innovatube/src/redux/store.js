
import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './slices/globalStates';
import userReducer from './slices/userSlices';
import videoReducer from './slices/videoSlices'

const store = configureStore({
  reducer: {
    loginSession: loginReducer,
    userData: userReducer,
    videoData: videoReducer
  },
});

export default store;