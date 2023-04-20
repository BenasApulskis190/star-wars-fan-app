import { Box, useMediaQuery, useTheme } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Sidebar } from '../Sidebar/Sidebar';
import { TopBar } from '../../TopBar/TopBar';
import { RootState } from '../../../app/store';
import { mainContainer, mainStyles, navStyles } from './MainLayout.style';
import { resolveWidth } from './utils/resolveWidth';

export const MainLayout = () => {
  const collapsed = useSelector((state: RootState) => state.sidebar.collapsed);
  const mainTheme = useTheme();
  const isMobile = useMediaQuery(mainTheme.breakpoints.down('sm'));
  const computedWidth = resolveWidth(mainTheme, isMobile, collapsed);
  return (
    <Box sx={mainContainer}>
      <Box component="nav" sx={navStyles(computedWidth)}>
        <Sidebar />
      </Box>
      <Box component="main" sx={mainStyles(mainTheme, isMobile)}>
        <TopBar />
        <Outlet />
      </Box>
    </Box>
  );
};
