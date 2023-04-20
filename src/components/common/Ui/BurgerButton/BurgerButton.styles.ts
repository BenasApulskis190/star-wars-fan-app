import { IconButton, styled } from '@mui/material';

export const BurgerButtonContainer = styled(IconButton)(() => ({
  width: 24,
  height: 24,
  padding: 0,
  position: 'relative',
  border: 0,

  '&:hover': {
    background: 'transparent'
  },
  '&:focus': {
    outline: 'none'
  }
}));

export const BurgerLine = styled('div')<{ open: boolean }>(
  ({ theme, open }) => ({
    width: '100%',
    height: 2,
    backgroundColor: theme.palette.secondary.main,
    position: 'absolute',
    transition: theme.transitions.create(
      ['transform', 'background-color', 'opacity'],
      {
        duration: theme.transitions.duration.short
      }
    ),
    ...(open
      ? {
          '&:nth-of-type(1)': {
            transform: 'rotate(45deg)',
            top: '50%'
          },
          '&:nth-of-type(2)': {
            opacity: 0
          },
          '&:nth-of-type(3)': {
            transform: 'rotate(-45deg)',
            top: '50%'
          }
        }
      : {
          '&:nth-of-type(1)': {
            top: '4px',
            transform: 'rotate(0)'
          },
          '&:nth-of-type(2)': {
            top: '50%',
            opacity: 1
          },
          '&:nth-of-type(3)': {
            bottom: '2px',
            transform: 'rotate(0)'
          }
        })
  })
);
