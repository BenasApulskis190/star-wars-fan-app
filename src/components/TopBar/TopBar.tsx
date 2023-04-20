import { Toolbar, useMediaQuery, useTheme } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { BurgerButton } from '../common/Ui/BurgerButton/BurgerButton';
import { BRAND_ICON_TYPE, BrandIcon } from '../common/Ui/BrandIcon/BrandIcon';
import { RootState } from '../../app/store';
import { toggleSidebar } from '../../app/features/slices/sidebarSlice';
import { BrandIconBox, StyledAppBar } from './TopBar.style';

export const TopBar = () => {
  const theme = useTheme();
  const collapsed = useSelector((state: RootState) => state.sidebar.collapsed);
  const dispatch = useDispatch();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <StyledAppBar
      position="fixed"
      color="primary"
      sx={{
        display: { xs: 'block', sm: 'none' }
      }}
    >
      <Toolbar>
        {isMobile && (
          <BurgerButton
            onClick={() => dispatch(toggleSidebar())}
            isActive={!collapsed}
          />
        )}
        <BrandIconBox>
          <BrandIcon type={BRAND_ICON_TYPE.WIDE} />
        </BrandIconBox>
      </Toolbar>
    </StyledAppBar>
  );
};
