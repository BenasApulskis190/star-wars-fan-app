import { Theme } from '@mui/material/styles';

export const resolveWidth = (
  theme: Theme,
  isMobile: boolean,
  collapsed: boolean
) => {
  if (isMobile) {
    return 0;
  }

  if (!isMobile && !collapsed) {
    return theme.spacing(38);
  }

  return theme.spacing(9);
};
