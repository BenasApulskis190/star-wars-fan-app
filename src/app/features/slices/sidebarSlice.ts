import { createSlice } from '@reduxjs/toolkit';

type SidebarState = {
  collapsed: boolean;
};

const initialState: SidebarState = {
  collapsed: true
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.collapsed = !state.collapsed;
    },
    closeSidebar: (state) => {
      state.collapsed = true;
    },
    openSidebar: (state) => {
      state.collapsed = false;
    }
  }
});

export const { toggleSidebar, closeSidebar, openSidebar } =
  sidebarSlice.actions;
export default sidebarSlice.reducer;
