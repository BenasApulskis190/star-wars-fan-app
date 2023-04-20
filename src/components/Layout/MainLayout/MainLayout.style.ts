import { Theme } from '@mui/material/styles';

export const navStyles = (resolveWidth: number | string) => ({
  width: resolveWidth,
  flexShrink: 0
});

export const mainStyles = (theme: Theme, isMobile: boolean) => ({
  flexGrow: 1,
  p: 3,
  minHeight: '100vh',
  paddingTop: isMobile
    ? `${theme.mixins.toolbar.minHeight}px`
    : theme.spacing(3)
});

export const mainContainer = () => ({
  display: 'flex'
});
