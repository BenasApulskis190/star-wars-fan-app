import { Theme } from '@mui/material/styles';

export const drawerStyles = (theme: Theme, getDrawerWidth: () => string) => ({
  width: getDrawerWidth(),
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: getDrawerWidth(),
    boxSizing: 'border-box',
    borderRight: '0px',
    backgroundColor: theme.palette.primary.main
  }
});

export const stackStyles = (theme: Theme) => ({
  width: '100%',
  padding: theme.spacing(1.5, 0)
});

export const dividerStyles = (theme: Theme) => ({
  background: theme.palette.primary.light
});
