import { createSlice } from '@reduxjs/toolkit';
import { Film } from '../api/types';

type FilmsState = {
  activeFilm: Film | null;
};

const initialState: FilmsState = {
  activeFilm: null
};

const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    setActiveFilm: (state, action) => {
      state.activeFilm = action.payload;
    }
  }
});

export const { setActiveFilm } = filmsSlice.actions;
export default filmsSlice.reducer;
