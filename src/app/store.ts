import { configureStore } from '@reduxjs/toolkit';
import { swapiApi } from './features/api/swapiApi';
import sidebarReducer from './features/slices/sidebarSlice';
import filmsReducer from './features/slices/activeFilmSlice';

export const store = configureStore({
  reducer: {
    [swapiApi.reducerPath]: swapiApi.reducer,
    sidebar: sidebarReducer,
    films: filmsReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(swapiApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
