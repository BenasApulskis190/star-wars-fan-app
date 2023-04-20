import {
  Divider,
  Drawer,
  List,
  Stack,
  Toolbar,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { SidebarItem } from './components/SidebarItem';
import { useAppRoutes } from '../../../routes/useAppRoutes';
import {
  BRAND_ICON_TYPE,
  BrandIcon
} from '../../common/Ui/BrandIcon/BrandIcon';
import { BurgerButton } from '../../common/Ui/BurgerButton/BurgerButton';
import { RootState } from '../../../app/store';
import {
  closeSidebar,
  openSidebar,
  toggleSidebar
} from '../../../app/features/slices/sidebarSlice';
import { dividerStyles, drawerStyles, stackStyles } from './SideBar.styles';

export const Sidebar = () => {
  const appRoutes = useAppRoutes();
  const mainTheme = useTheme();
  const collapsed = useSelector((state: RootState) => state.sidebar.collapsed);
  const location = useLocation();

  const dispatch = useDispatch();

  const isTablet = useMediaQuery(mainTheme.breakpoints.down('md'));
  const isMobile = useMediaQuery(mainTheme.breakpoints.down('sm'));

  useEffect(() => {
    if (isTablet || isMobile) {
      dispatch(closeSidebar());
    } else {
      dispatch(openSidebar());
    }
  }, [isTablet, isMobile, dispatch]);

  const getDrawerWidth = () => {
    if (isMobile) {
      return '100%';
    }

    if (collapsed) {
      return mainTheme.spacing(9);
    }

    return mainTheme.spacing(38);
  };

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  useEffect(() => {
    if (isMobile || isTablet) {
      dispatch(closeSidebar());
    }
  }, [location, isMobile, isTablet, dispatch]);

  return (
    <Drawer
      variant={isMobile ? 'temporary' : 'permanent'}
      open={!collapsed}
      onClose={() => isMobile && handleToggleSidebar()}
      sx={drawerStyles(mainTheme, getDrawerWidth)}
    >
      <List disablePadding>
        <Toolbar>
          <Stack
            direction="row"
            justifyContent={{ sm: 'center', xs: 'space-between' }}
            spacing={2}
            sx={stackStyles(mainTheme)}
          >
            {!collapsed && (
              <BrandIcon
                type={isTablet ? BRAND_ICON_TYPE.WIDE : BRAND_ICON_TYPE.DEFAULT}
              />
            )}

            {isTablet && (
              <BurgerButton
                isActive={!collapsed}
                onClick={() => dispatch(toggleSidebar())}
              />
            )}
          </Stack>
        </Toolbar>
        <Divider sx={dividerStyles(mainTheme)} />
        {appRoutes.map(
          (route) =>
            route.sidebarProps && (
              <SidebarItem
                item={route}
                key={route.id}
                isCollapsed={collapsed}
              />
            )
        )}
      </List>
    </Drawer>
  );
};
