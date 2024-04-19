import { configureStore } from '@reduxjs/toolkit';
import dashboardItemsReducer from '../redux/slices/selectedDashboardItemsSlice';
import tokenSliceReducer from './slices/tokenSlice';
import userSliceReducer from './slices/userSlice';


export const store = configureStore({
  reducer: {
    dashboardItems: dashboardItemsReducer,
    token: tokenSliceReducer,
    user: userSliceReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
