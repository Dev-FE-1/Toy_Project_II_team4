import { configureStore } from '@reduxjs/toolkit';
import salaryAdReducer from '../slices/salaryAdSlice';
import scheduleReducer from '../slices/scheduleSlice';
import authReducer from '../slices/authSlice';
import salaryDtReducer from '../slices/salaryDtSlice';

export const store = configureStore({
  reducer: {
    schedules: scheduleReducer,
    salaryAd: salaryAdReducer,
    auth: authReducer,
    salaryDt: salaryDtReducer,
  },
  devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
