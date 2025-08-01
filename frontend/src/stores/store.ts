import { configureStore } from '@reduxjs/toolkit';
import styleReducer from './styleSlice';
import mainReducer from './mainSlice';
import authSlice from './authSlice';

import usersSlice from "./users/usersSlice";
import coursesSlice from "./courses/coursesSlice";
import enrollmentsSlice from "./enrollments/enrollmentsSlice";
import studentsSlice from "./students/studentsSlice";
import rolesSlice from "./roles/rolesSlice";
import permissionsSlice from "./permissions/permissionsSlice";

export const store = configureStore({
  reducer: {
    style: styleReducer,
    main: mainReducer,
    auth: authSlice,

users: usersSlice,
courses: coursesSlice,
enrollments: enrollmentsSlice,
students: studentsSlice,
roles: rolesSlice,
permissions: permissionsSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
