import { SxProps, Theme } from '@mui/material';

export const getSWSeparatorStyles = (
  theme: Theme,
  isToggled: boolean
): SxProps => ({
  position: 'relative',
  padding: theme.spacing(1),
  '&::before': {
    content: '""',
    backgroundColor: isToggled
      ? theme.palette.error.main
      : theme.palette.text.secondary,
    boxShadow: isToggled
      ? `0px 0px 4px .5px ${theme.palette.error.main}`
      : 'none',
    position: 'absolute',
    height: 4,
    width: 24,
    borderRadius: 4,
    left: 2,
    zIndex: 2,
    transition: 'background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out'
  },
  '&::after': {
    content: '""',
    backgroundColor: isToggled
      ? theme.palette.error.main
      : theme.palette.text.secondary,
    boxShadow: isToggled
      ? `0px 0px 4px .5px ${theme.palette.error.main}`
      : 'none',
    position: 'absolute',
    height: 4,
    width: 4,
    left: 30,
    borderRadius: 4,
    zIndex: 2,
    transition: 'background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out'
  }
});
